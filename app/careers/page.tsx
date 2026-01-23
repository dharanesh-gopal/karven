"use client"

import { useState, useEffect, useRef, ReactNode, MouseEvent } from "react"
import Link from "next/link"
import { 
  MapPin, ArrowRight, Target, Zap, Users, Award, 
  Heart, Coffee, Globe, ChevronLeft, ChevronRight, 
  Quote, Star, Cpu, CheckCircle, FileText, UserCheck, 
  Terminal, ShieldCheck, Briefcase, TrendingUp, Sparkles, 
  Wallet, Clock, Laptop, Baby, Monitor, Lightbulb, X, Send,
  Loader2, CheckCircle2 // Added these for the dynamic modal
} from "lucide-react"
import { JOBS_DATA } from "./data"
import { useSanityData } from "@/hooks/useSanityData"
import { urlFor } from "@/sanity/lib/image"

// Icon mapper for Sanity string icons
const iconMap: Record<string, any> = {
  Globe, TrendingUp, ShieldCheck, FileText, UserCheck, Terminal, CheckCircle,
  Sparkles, Monitor, MapPin, Heart, Coffee, Lightbulb, Award, Cpu, Target, Zap, Users
}

const getIconComponent = (iconName: string | any) => {
  if (typeof iconName === 'string') {
    return iconMap[iconName] || Globe
  }
  return iconName
}

// --- 1. DATA CONSTANTS ---

const CORPORATE_VALUES = [
  {
    title: "Global Exposure",
    desc: "Work on aviation projects that impact airspace regulations in the US, Europe, and India.",
    icon: Globe
  },
  {
    title: "Continuous Growth",
    desc: "We prioritize internal promotions. Our 'Future Leaders' program prepares engineers for management.",
    icon: TrendingUp
  },
  {
    title: "Stability & Innovation",
    desc: "Backed by industry giants, we offer the stability of an enterprise with the agility of a lab.",
    icon: ShieldCheck
  }
];

const HIRING_STEPS = [
  { icon: FileText, title: "Application", desc: "Reviewing your profile." },
  { icon: UserCheck, title: "HR Screening", desc: "Aligning on goals & culture." },
  { icon: Terminal, title: "Technical Round", desc: "Assessing core skills." },
  { icon: CheckCircle, title: "Final Offer", desc: "Welcome to the team." },
];

const TESTIMONIALS = [
  {
    name: "Aisha Verma",
    role: "Senior AI Engineer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
    quote: "The scale of data we work with at KarVenSen is unmatched. I'm building models that actually fly."
  },
  {
    name: "Rahul Mehta",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    quote: "Design here isn't an afterthought. We have a seat at the table from day one of product planning."
  },
  {
    name: "Sarah Jenkin",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    quote: "We don't micromanage. We hire smart people and get out of their way. That's our secret sauce."
  }
];

const CULTURE_IMAGES = [
  { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", category: "Teamwork", title: "Global Summits" },
  { url: "https://news.northeastern.edu/wp-content/uploads/2021/03/032221_MM_drone_001.jpg", category: "Innovation", title: "Prototyping Lab" },
  { url: "https://msftstories.thesourcemediaassets.com/sites/45/2019/07/Teamshacking@Microsoft2019hackathon_-960x630.jpg", category: "Learning", title: "Hackathons" },
  { url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", category: "Office", title: "Open Workspace" },
];

const BENEFIT_CATEGORIES = {
  "Engineering Ecosystem": [
    { title: "Cloud Sandbox", desc: "Uncapped AWS/Azure credits for personal R&D.", icon: Globe },
    { title: "AI Tool Stack", desc: "Enterprise access to Copilot, ChatGPT-4, and Midjourney.", icon: Sparkles },
    { title: "Top-Tier Hardware", desc: "M3 Pro MacBooks or Linux Workstations with GPU support.", icon: Monitor },
    { title: "Drone Lab Access", desc: "Direct access to flight testing facility and simulation env.", icon: Cpu },
  ],
  "Compensation & IP": [
    { title: "Aggressive Equity", desc: "High-upside ESOPs. Own a piece of the platform.", icon: TrendingUp },
    { title: "Patent Bonuses", desc: "$3,000 award for every utility patent filed and granted.", icon: Lightbulb },
    { title: "Performance Grants", desc: "Annual stock refreshers based on code quality.", icon: Award },
  ],
  "Global Lifestyle": [
    { title: "Remote-First", desc: "Work from our Hyderabad hub, US office, or home.", icon: MapPin },
    { title: "Premium Healthcare", desc: "Tier-1 medical coverage for you and family.", icon: Heart },
    { title: "Sabbatical Program", desc: "4 weeks paid leave to recharge after 4 years.", icon: Coffee },
  ]
};

// --- 2. UTILITY COMPONENTS ---

const RevealOnScroll = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
      {children}
    </div>
  );
};

const SpotlightCard = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-200/50 group hover:border-sky-500 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style={{ opacity, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(2, 132, 199, 0.30), transparent 40%)` }} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const JobSpotlightRow = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-sky-400 hover:shadow-lg cursor-pointer group ${className}`}
    >
      <div className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100" style={{ opacity, background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.08), transparent 40%)` }} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// --- 3. SUB-COMPONENTS (MODALS) ---

// 1. BENEFITS MODAL
const BenefitsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-lg h-full bg-white shadow-2xl animate-in slide-in-from-right duration-500 overflow-y-auto border-l border-slate-200">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
            <div><h2 className="text-2xl font-bold text-slate-900">Employee Policy Guide</h2><p className="text-xs text-slate-500 uppercase tracking-widest mt-1">2026 Edition • Global</p></div>
            <button onClick={onClose} className="p-2 hover:bg-sky-50 rounded-full transition-colors text-slate-500 hover:text-sky-600"><X className="w-6 h-6" /></button>
          </div>
          <div className="space-y-8">
            <div className="space-y-3"><h3 className="font-bold text-slate-900 flex items-center gap-2 text-lg"><Clock className="w-5 h-5 text-sky-600" /> Work Philosophy</h3><div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-600 leading-relaxed"><p className="mb-2"><strong>Core Hours:</strong> 11:00 AM - 3:00 PM (Local Time).</p><p><strong>Hybrid Policy:</strong> Remote-First. Offices available for collaboration.</p></div></div>
            <div className="space-y-3"><h3 className="font-bold text-slate-900 flex items-center gap-2 text-lg"><Wallet className="w-5 h-5 text-sky-600" /> Compensation & IP</h3><ul className="list-disc pl-5 text-sm text-slate-600 space-y-2"><li><strong>Base Salary:</strong> Reviewed bi-annually.</li><li><strong>ESOPs:</strong> Vested over 4 years.</li><li><strong>Patent Bonus:</strong> $3,000 upon grant.</li></ul></div>
            <div className="space-y-3"><h3 className="font-bold text-slate-900 flex items-center gap-2 text-lg"><Laptop className="w-5 h-5 text-sky-600" /> Equipment</h3><p className="text-sm text-slate-600 leading-relaxed"><strong>$1,000 Setup Stipend</strong> for home office.</p></div>
            <div className="space-y-3"><h3 className="font-bold text-slate-900 flex items-center gap-2 text-lg"><Baby className="w-5 h-5 text-sky-600" /> Parental & Family</h3><ul className="list-disc pl-5 text-sm text-slate-600 space-y-2"><li><strong>Primary Caregiver:</strong> 26 Weeks Fully Paid.</li><li><strong>Secondary Caregiver:</strong> 4 Weeks Fully Paid.</li></ul></div>
            <div className="pt-8 border-t border-slate-100"><button onClick={onClose} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-sky-600 transition-colors shadow-lg">Close Guide</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. TALENT NETWORK MODAL (UPDATED - DYNAMIC)
// --- UPDATED: TALENT NETWORK MODAL (Connected to Backend) ---
const TalentNetworkModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Reset state when modal is closed/opened
  useEffect(() => {
    if (isOpen) setStatus("idle");
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      // Call the API we created in Step 1
      const response = await fetch('/api/talent', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold tracking-tight">
              {status === "success" ? "Application Received" : "Join Talent Network"}
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              {status === "success" 
                ? "Welcome to the fleet. Check your inbox." 
                : "Leave your details and we will contact you for future roles."}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 bg-white min-h-[340px] flex items-center justify-center">
          
          {status === "success" ? (
            <div className="text-center w-full animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">You're on the list!</h3>
              <p className="text-slate-500 mb-8">We've sent a confirmation email to your inbox.</p>
              <button onClick={onClose} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                Close Window
              </button>
            </div>
          ) : (
            <form className="space-y-5 w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                  <input name="firstName" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input name="lastName" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input name="email" required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="jane@example.com" />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-sky-600 text-white rounded-xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-200 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Join Network <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 4. SUB-COMPONENTS (IN-PAGE) ---

const HiringPipeline = ({ steps }: { steps: any[] }) => {
  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsInView(entry.isIntersecting); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInView) {
      let step = 0;
      setActiveStep(0); 
      interval = setInterval(() => {
        step++;
        if (step < steps.length) setActiveStep(step);
        else clearInterval(interval);
      }, 500);
    } else {
      setActiveStep(-1);
    }
    return () => clearInterval(interval);
  }, [isInView, steps]);

  return (
    <div ref={containerRef} className="relative py-12">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0 hidden md:block rounded-full"></div>
      <div 
        className="absolute top-1/2 left-0 h-1 bg-sky-600 -translate-y-1/2 z-0 transition-all duration-700 ease-out hidden md:block rounded-full"
        style={{ width: activeStep === -1 ? '0%' : `${(activeStep / (steps.length - 1)) * 100}%` }}
      ></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, i) => {
          const isActive = i <= activeStep;
          return (
            <div key={i} className={`text-center transition-all duration-700 transform ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center border-4 transition-all duration-500 shadow-xl z-10 relative ${isActive ? "bg-white border-sky-600 scale-110 shadow-sky-100" : "bg-slate-100 border-slate-200 scale-100"}`}>
                <step.icon className={`w-8 h-8 transition-colors duration-500 ${isActive ? "text-sky-600" : "text-slate-400"}`} />
              </div>
              <div className="mt-8 bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className={`text-lg font-bold mb-1 transition-colors ${isActive ? "text-slate-900" : "text-slate-400"}`}>{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const HeroSection = ({ cultureData }: { cultureData: any[] }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "We are building the autonomous infrastructure of tomorrow.";
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 25;
    const y = (e.clientY - window.innerHeight / 2) / 25;
    setMousePosition({ x, y });
  };

  useEffect(() => {
  let index = 0;
  const timer = setInterval(() => {
    const char = fullText.charAt(index);
    setTypedText((prev) => prev + char);
    index++;
    if (index === fullText.length) clearInterval(timer);
  }, 30);
  return () => clearInterval(timer);
}, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'right' ? 320 : -320, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section onMouseMove={handleMouseMove} className="relative pt-18 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/90"></div> 
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[100px] pointer-events-none transition-transform duration-100 ease-out z-0" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none transition-transform duration-100 ease-out z-0" style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-left duration-700">
               <span className="h-px w-8 bg-sky-500"></span>
               <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">Join The Revolution</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 italic">KarVenSen</span>
            </h1>
            <p className="text-lg text-slate-300 font-light h-16 md:h-8">
              {typedText}<span className="animate-pulse text-sky-500">|</span>
            </p>
          </div>
          <div className="shrink-0 animate-in fade-in zoom-in duration-700 delay-300">
            <button onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/20">
              <span className="relative z-10 group-hover:text-white transition-colors">View Openings</span>
              <div className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            </button>
          </div>
        </div>

        <div className="relative group animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {cultureData.map((img: any, idx: number) => (
              <div key={idx} className="min-w-[280px] md:min-w-[320px] lg:min-w-[25%] h-[350px] relative rounded-xl overflow-hidden snap-center shrink-0 cursor-pointer border border-white/10 hover:border-sky-500 transition-all duration-300 group/card">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 transform transition-transform duration-300 group-hover/card:translate-y-[-5px]">
                  <span className="inline-block px-3 py-1 bg-sky-600/80 backdrop-blur-md rounded-full text-[10px] font-bold text-white mb-2 uppercase tracking-wider">
                    {img.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scroll('left')} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white hover:bg-sky-600 transition-all opacity-0 group-hover:opacity-100 z-10"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => scroll('right')} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white hover:bg-sky-600 transition-all opacity-0 group-hover:opacity-100 z-10"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </section>
  )
}

// --- 5. MAIN COMPONENT ---

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("Engineering Ecosystem");
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isTalentModalOpen, setIsTalentModalOpen] = useState(false); // STATE INITIALIZED CORRECTLY

  // Fetch careers data from CMS
  const { data: cmsValues } = useSanityData<any[]>(
    `*[_type == "careerValue" && isActive == true] | order(order asc){
      title,
      "desc": description,
      icon,
      order
    }`,
    {},
    []
  )

  const { data: cmsSteps } = useSanityData<any[]>(
    `*[_type == "hiringStep" && isActive == true] | order(order asc){
      title,
      "desc": description,
      icon,
      order
    }`,
    {},
    []
  )

  const { data: cmsTestimonials } = useSanityData<any[]>(
    `*[_type == "careerTestimonial" && isActive == true] | order(order asc){
      name,
      role,
      quote,
      "image": image.asset
    }`,
    {},
    []
  )

  const { data: cmsCulture } = useSanityData<any[]>(
    `*[_type == "cultureImage" && isActive == true] | order(order asc){
      title,
      category,
      "url": image.asset
    }`,
    {},
    []
  )

  const { data: cmsBenefits } = useSanityData<any[]>(
    `*[_type == "careerBenefit" && isActive == true] | order(order asc){
      title,
      "desc": description,
      category,
      icon
    }`,
    {},
    []
  )

  const { data: cmsJobs } = useSanityData<any[]>(
    `*[_type == "jobOpening" && isActive == true] | order(order asc){
      "id": id.current,
      title,
      department,
      location,
      type,
      experience,
      postedAt,
      description,
      responsibilities,
      requirements
    }`,
    {},
    []
  )

  // Use CMS data with fallback
  const VALUES = (cmsValues && cmsValues.length > 0) 
    ? cmsValues.map((v: any) => ({ ...v, icon: getIconComponent(v.icon) }))
    : CORPORATE_VALUES
  const STEPS = (cmsSteps && cmsSteps.length > 0) 
    ? cmsSteps.map((s: any) => ({ ...s, icon: getIconComponent(s.icon) }))
    : HIRING_STEPS
  const TESTIMONIALS_DATA = (cmsTestimonials && cmsTestimonials.length > 0) 
    ? cmsTestimonials.map(t => ({ ...t, image: (t.image && typeof t.image === 'object') ? urlFor(t.image).url() : (t.image || TESTIMONIALS.find(ft => ft.name === t.name)?.image) }))
    : TESTIMONIALS
  const CULTURE_DATA = (cmsCulture && cmsCulture.length > 0)
    ? cmsCulture.map(c => ({ ...c, url: (c.url && typeof c.url === 'object') ? urlFor(c.url).url() : (c.url || CULTURE_IMAGES.find(fc => fc.title === c.title)?.url) }))
    : CULTURE_IMAGES
  
  // Group benefits by category
  const BENEFITS_BY_CATEGORY = (cmsBenefits && cmsBenefits.length > 0) 
    ? cmsBenefits.map((b: any) => ({ ...b, icon: getIconComponent(b.icon) })).reduce((acc, benefit) => {
        if (!acc[benefit.category]) acc[benefit.category] = []
        acc[benefit.category].push(benefit)
        return acc
      }, {} as Record<string, typeof cmsBenefits>)
    : BENEFIT_CATEGORIES

  // Use CMS jobs or fallback
  const JOBS = (cmsJobs && cmsJobs.length > 0) ? cmsJobs : JOBS_DATA

  // Group JOBS by Department for Section 6
  const groupedJobs = JOBS.reduce((acc, job) => {
    if (!acc[job.department]) acc[job.department] = [];
    acc[job.department].push(job);
    return acc;
  }, {} as Record<string, typeof JOBS>);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 selection:bg-sky-500 selection:text-white">
      
      {/* SECTION 1: HERO */}
      <HeroSection cultureData={CULTURE_DATA} />

      {/* SECTION 2: VALUES */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Values */}
            <RevealOnScroll>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Where Technology Meets <br/>
                    <span className="text-sky-700">Real-World Impact</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    At KarVenSen, we build the digital infrastructure for the aviation industry. 
                    Join a team dedicated to precision, safety, and scalable engineering.
                  </p>
                </div>

                {/* VALUES LIST */}
                <div className="space-y-8 pt-4">
                  {VALUES.map((val: any, i: number) => (
                    <div key={i} className="flex gap-5 group cursor-default">
                      
                      {/* DYNAMIC ICON: Only this changes on hover */}
                      <div className="shrink-0 w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-sky-700 shadow-sm transition-all duration-500 ease-out 
                        group-hover:scale-110 group-hover:rotate-6 group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-200 group-hover:border-transparent">
                        <val.icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-sky-700">
                          {val.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                
              </div>
            </RevealOnScroll>

            {/* Right Column: Images (Unchanged) */}
            <RevealOnScroll delay={200}>
              <div className="relative h-[500px] w-full hidden lg:block">
                <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-lg overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white z-10">
                  <img src="https://static.ambitionbox.com/api/v2/photo/NURwNlNQQk5UMzFpa2M5djJpdEt2UT09" alt="Meeting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-8 left-0 w-[50%] h-[45%] rounded-lg overflow-hidden shadow-xl border-4 border-white z-20">
                  <img src="https://i0.wp.com/apeejay.news/wp-content/uploads/2024/03/280324-Drone-15.jpg?resize=740%2C494&ssl=1" alt="Engineer" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-0 right-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
                <div className="absolute top-10 left-10 w-60 h-60 bg-slate-200 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70"></div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* SECTION 3: HIRING PROCESS */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold text-slate-900">Our Hiring Process</h2><p className="text-slate-500 mt-2">A transparent path from application to offer.</p></div>
          <HiringPipeline steps={STEPS} />
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16"><h2 className="text-4xl font-bold text-white mb-4">Voices from the Team</h2><p className="text-slate-400">Hear from the people building the future.</p></div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t: any, i: number) => (<RevealOnScroll key={i} delay={i * 150}><div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl relative hover:bg-slate-800 transition-all duration-300 group cursor-default"><Quote className="w-10 h-10 text-sky-500/10 absolute top-6 right-6 group-hover:text-sky-500/30 group-hover:scale-110 transition-all duration-500" /><div className="flex items-center gap-1 mb-6">{[0, 1, 2, 3, 4].map((starIndex) => (<Star key={starIndex} className="w-4 h-4 fill-current text-sky-600 group-hover:text-yellow-400 transition-colors duration-300" style={{ transitionDelay: `${starIndex * 75}ms` }} />))}</div><p className="text-lg text-slate-300 italic mb-8 relative z-10 leading-relaxed group-hover:text-white transition-colors duration-300">"{t.quote}"</p><div className="flex items-center gap-4 pt-6 border-t border-slate-700"><img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-600 group-hover:ring-sky-500 transition-all duration-300" /><div><h4 className="font-bold text-white text-sm">{t.name}</h4><p className="text-xs font-semibold text-sky-400 uppercase tracking-wide">{t.role}</p></div></div></div></RevealOnScroll>))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS */}
      <section className="py-24 bg-white relative">
        <BenefitsModal isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1 sticky top-24 group cursor-default">
                <div className="inline-block p-3 bg-sky-50 border border-transparent rounded-xl mb-6 transition-all duration-500 group-hover:bg-yellow-50 group-hover:border-yellow-200 group-hover:shadow-lg group-hover:shadow-yellow-100/50"><Sparkles className="w-6 h-6 text-sky-700 transition-all duration-500 group-hover:text-yellow-500 group-hover:fill-yellow-400 group-hover:rotate-12 group-hover:scale-110" /></div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">Invest in your <br/><span className="text-sky-700 transition-colors duration-300 group-hover:text-sky-600">Future Self.</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">We don't just offer perks; we offer an ecosystem for you to master Cloud, AI, and Aviation tech.</p>
                <button onClick={() => setIsPolicyModalOpen(true)} className="flex items-center gap-3 text-slate-900 font-bold transition-all duration-300 group-hover:gap-4 group-hover:text-sky-700"><span className="border-b-2 border-slate-900 pb-1 transition-colors duration-300 group-hover:border-sky-700">View Full Policy Guide</span><ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"/></button>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 pb-1">{Object.keys(BENEFITS_BY_CATEGORY).map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-bold rounded-t-lg transition-all duration-300 relative top-[1px] ${activeTab === tab ? "text-sky-700 border-b-2 border-sky-700 bg-sky-50/50" : "text-slate-400 hover:text-slate-600"}`}>{tab}</button>))}</div>
              <div className="grid sm:grid-cols-2 gap-6 min-h-[300px]">
                {BENEFITS_BY_CATEGORY[activeTab as keyof typeof BENEFITS_BY_CATEGORY].map((perk: any, i: number) => (
                  <SpotlightCard key={perk.title} className="p-6 animate-in fade-in zoom-in-95 duration-500" delay={i * 100}>
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-slate-400 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500"><perk.icon className="w-6 h-6" /></div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">{perk.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{perk.desc}</p>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: JOB PORTAL (Categorized & Expanded) */}
      <section id="jobs" className="py-24 bg-slate-50 relative border-t border-slate-200">
        
        {/* MODAL (Now controlled by state) */}
        <TalentNetworkModal isOpen={isTalentModalOpen} onClose={() => setIsTalentModalOpen(false)} />

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="font-bold text-xs text-sky-700 uppercase tracking-widest mb-3 block">Join the Fleet</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Current Openings</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We are expanding across Engineering, Operations, and Product. Find the role where you can do your life's best work.</p>
          </div>

          <div className="space-y-16">
            {Object.entries(groupedJobs).map(([category, jobs], catIndex) => (
              <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <div className="flex items-center gap-4 mb-6"><h3 className="text-2xl font-bold text-slate-900">{category}</h3><div className="h-px flex-grow bg-slate-200"></div><span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">{(jobs as any[]).length} roles</span></div>
                <div className="grid gap-4">
                  {(jobs as any[]).map((job: any, jobIndex: number) => (
                    <RevealOnScroll key={job.id || `job-${category}-${jobIndex}`} delay={jobIndex * 50}>
                      <Link href={`/careers/${job.id}`} className="block">
                        <JobSpotlightRow className="group p-0 border border-slate-200 bg-white hover:border-sky-300 transition-all duration-300">
                          <div className="grid md:grid-cols-12 items-center p-6 md:p-8 gap-6">
                            <div className="md:col-span-5 flex items-center gap-5">
                              <div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 text-slate-400 font-bold group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shrink-0">{job.title.charAt(0)}</div>
                              <div><h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{job.title}</h4><span className="md:hidden text-xs text-slate-500 mt-1 block">{job.location}</span></div>
                            </div>
                            <div className="hidden md:flex md:col-span-5 items-center gap-6">
                              <div className="flex items-center gap-2 text-sm text-slate-600 font-medium"><MapPin className="w-4 h-4 text-sky-600" />{job.location}</div>
                              <div className="flex items-center gap-2 text-sm text-slate-600 font-medium"><Briefcase className="w-4 h-4 text-sky-600" />{job.type}</div>
                              <div className="flex items-center gap-2 text-sm text-slate-600 font-medium"><Users className="w-4 h-4 text-sky-600" />{job.experience}</div>
                            </div>
                            <div className="md:col-span-2 flex justify-end"><div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2"><ArrowRight className="w-5 h-5" /></div></div>
                          </div>
                        </JobSpotlightRow>
                      </Link>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Don't see your perfect role?</h3>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">We are always looking for exceptional talent. Send us your resume and we'll keep you on our radar for future missions.</p>
              
              {/* BUTTON CONNECTED TO STATE */}
              <button onClick={() => setIsTalentModalOpen(true)} className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">Join Talent Network</button>
            
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}