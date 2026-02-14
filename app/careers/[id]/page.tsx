"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { 
  ArrowLeft, MapPin, Clock, Briefcase, Calendar, Upload, 
  CheckCircle, ChevronRight, AlertCircle, FileText, 
  Share2, Linkedin, Twitter, Target, User
} from "lucide-react"
import { JOBS_DATA } from "../data"
import { useSanityData } from "@/hooks/useSanityData"

// --- UTILS ---
const formatDate = (dateString: string) => dateString;

export default function JobApplicationPage() {
  const params = useParams()
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  // STATE
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" })
  const [resume, setResume] = useState<File | null>(null)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  // Fetch job from CMS (standalone document)
  const { data: jobData } = useSanityData<any>(
    `*[_type == "jobOpening" && id.current == $id][0]{
      "id": id.current,
      title,
      department,
      location,
      type,
      experience,
      postedAt,
      description,
      responsibilities,
      requirements,
      isActive
    }`,
    { id: params.id },
    null
  )

  // Use CMS data or fallback
  const job = jobData || JOBS_DATA.find((j) => j.id === params.id)

  if (!job) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center p-6">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Job Not Found</h1>
      <Link href="/careers" className="text-sky-600 hover:underline flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Return to Career Base
      </Link>
    </div>
  )

  // HANDLERS
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setResume(e.target.files[0])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resume) { alert("Please upload a resume"); return; }
    
    setStatus("submitting")
    
    // Hardcoded URL
    const API_URL = "/api/apply"; 

    try {
      const data = new FormData()
      data.append("firstName", formData.firstName)
      data.append("lastName", formData.lastName)
      data.append("email", formData.email)
      data.append("jobTitle", job.title)
      data.append("resume", resume)

      const response = await fetch(API_URL, { method: "POST", body: data })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-sky-500 selection:text-white">
      
      {/* --- HERO HEADER (Compact) --- */}
      <section className="relative pt-32 pb-16 bg-slate-900 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{job.title}</h1>
            <div className="flex justify-center items-center gap-4 text-slate-400 text-sm font-mono">
               <span>{job.department}</span>
               <span>•</span>
               <span>{job.location}</span>
               <span>•</span>
               <span>{job.type}</span>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* GRID LAYOUT: Left (Form) - Right (Content) */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: APPLICATION FORM + BACK BUTTON (Sticky) --- */}
          <div className="lg:col-span-5 relative order-1 lg:sticky lg:top-8">
            
            {/* BACK BUTTON (Inside Left Column) */}
            <div className="mb-6">
               <Link href="/careers" className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors font-bold text-sm">
                 <ArrowLeft className="w-4 h-4" /> Back to All Jobs
               </Link>
            </div>

            {/* THE FORM BOX */}
            {status === "success" ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-3xl text-center animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Application Received!</h3>
                  <p className="text-green-700 mb-6 text-sm">
                    Confirmation sent to <strong>{formData.email}</strong>.
                  </p>
                  <Link href="/careers" className="inline-block w-full bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all text-sm">
                    Browse More Jobs
                  </Link>
                </div>
              ) : (
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600"></div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Apply Now</h3>
                    <p className="text-slate-500 text-sm mt-1">Join the team in {job.location}</p>
                  </div>
                  
                  {status === "error" && (
                     <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl flex items-center gap-3 border border-red-100">
                       <AlertCircle className="w-5 h-5" /> <span>Server Error. Try again.</span>
                     </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">First Name</label>
                          <input name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all text-sm" placeholder="Jane" />
                      </div>
                      <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Last Name</label>
                          <input name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all text-sm" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all text-sm" placeholder="jane@example.com" />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Resume</label>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />

                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 group ${
                            resume ? "border-sky-500 bg-sky-50" : "border-slate-300 hover:border-sky-400 hover:bg-slate-50"
                          }`}
                        >
                            {resume ? (
                                <div className="animate-in zoom-in duration-300">
                                  <FileText className="w-6 h-6 text-sky-600 mb-1 mx-auto" />
                                  <p className="text-xs text-sky-900 font-bold truncate max-w-[150px]">{resume.name}</p>
                                </div>
                            ) : (
                                <>
                                  <Upload className="w-5 h-5 text-slate-400 group-hover:text-sky-600 mb-2" />
                                  <p className="text-xs text-slate-600 font-medium">Upload Resume</p>
                                </>
                            )}
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === "submitting"}
                        className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-sky-600 transition-all flex justify-center items-center gap-2 text-sm disabled:bg-slate-400 mt-2"
                    >
                        {status === "submitting" ? "Sending..." : "Submit Application"}
                    </button>
                    
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Protected by reCAPTCHA and Subject to Privacy Policy.
                    </p>
                  </form>
                </div>
              )}
          </div>

          {/* --- RIGHT COLUMN: DESCRIPTION CONTENT --- */}
          <div className="lg:col-span-7 space-y-10 order-2">
            
            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase tracking-widest text-sky-600">Overview</h3>
               <p className="text-slate-600 leading-relaxed text-lg">
                 {job.description}
               </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6  flex items-center gap-2">
                <Target className="w-5 h-5 text-sky-600" /> Key Responsibilities
              </h3>
              <ul className="grid gap-4">
                {job.responsibilities?.map((req, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-sky-200 transition-all hover:shadow-md">
                    <span className="text-sky-500 font-bold mt-0.5">0{i+1}.</span>
                    <span className="text-slate-700 font-medium">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-sky-600" /> Requirements
              </h3>
              <ul className="space-y-3">
                {job.requirements?.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Snippet */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center shrink-0">
                 <User className="w-8 h-8 text-white" />
              </div>
              <div className="relative z-10">
                 <p className="text-sky-400 font-mono text-xs uppercase mb-1">Hiring Manager</p>
                 <p className="font-bold text-lg">"We are looking for people who want to build the impossible."</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}