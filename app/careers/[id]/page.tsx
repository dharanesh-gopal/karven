"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, MapPin, Clock, Briefcase, Calendar, Upload, CheckCircle, ChevronRight, AlertCircle } from "lucide-react"
import { JOBS_DATA } from "../data"

export default function JobApplicationPage() {
  const params = useParams()
  
  // 1. STATE MANAGEMENT FOR FORM DATA
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const job = JOBS_DATA.find((j) => j.id === params.id)

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Job Not Found</h1>
        <Link href="/careers" className="text-sky-600 hover:underline">Return to Careers</Link>
      </div>
    )
  }

  // 2. HANDLE SUBMISSION TO BACKEND
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          jobTitle: job.title
        }),
      })

      if (response.ok) {
        setStatus("success")
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  // Helper to update state on typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-sky-200">
      
      {/* HEADER */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/careers" className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Jobs
          </Link>
          <span className="font-bold text-slate-900">KarVenSen Careers</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* LEFT COLUMN: DESCRIPTION */}
          <div className="lg:col-span-3 space-y-8 animate-in slide-in-from-bottom-10 duration-700">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Briefcase className="w-4 h-4 text-sky-600" /> {job.department}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <MapPin className="w-4 h-4 text-sky-600" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <Clock className="w-4 h-4 text-sky-600" /> {job.type}
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-8">
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">About the Role</h3>
                <p className="text-slate-600 leading-relaxed">{job.description}</p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Responsibilities</h3>
                <ul className="space-y-3">
                  {job.responsibilities?.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-sky-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* RIGHT COLUMN: APPLICATION FORM */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              
              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Application Sent!</h3>
                  <p className="text-green-700 mb-6">Check your inbox. We've sent a confirmation email to <strong>{formData.email}</strong>.</p>
                  <Link href="/careers" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700">
                    Browse More Jobs
                  </Link>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Apply for this position</h3>
                  <p className="text-sm text-slate-500 mb-6">Complete the form below.</p>
                  
                  {status === "error" && (
                     <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
                       <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                     </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                        <input 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all" 
                          placeholder="Jane" 
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                        <input 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all" 
                          placeholder="Doe" 
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                        <input 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all" 
                          placeholder="jane@example.com" 
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Resume / CV</label>
                        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-sky-50 hover:border-sky-400 transition-all cursor-pointer group">
                            <Upload className="w-6 h-6 text-slate-400 group-hover:text-sky-600 mb-2" />
                            <p className="text-xs text-slate-500 font-medium">Click to upload (Simulation)</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit" 
                            disabled={status === "submitting"}
                            className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-sky-600 transition-all flex justify-center items-center gap-2 disabled:bg-slate-400"
                        >
                            {status === "submitting" ? "Sending..." : "Submit Application"}
                            {status !== "submitting" && <ChevronRight className="w-4 h-4" />}
                        </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}