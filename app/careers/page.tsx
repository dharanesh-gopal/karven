
"use client"

import { useState, useEffect, useRef, ReactNode, MouseEvent } from "react"
import Link from "next/link"
import { 
  MapPin, ArrowRight, Target, Zap, Users, Award, 
  Heart, Coffee, Globe, ChevronLeft, ChevronRight, 
  Quote, Star, Cpu, CheckCircle, FileText, UserCheck 
} from "lucide-react"
import { JOBS_DATA, type Job } from "./data"

// --- 1. CONFIGURATION & DATA ---

const CULTURE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    category: "Teamwork",
    title: "Global Summits in Hyderabad"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    category: "Innovation",
    title: "Testing Drone Prototypes"
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    category: "Learning",
    title: "Friday Hackathons"
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    category: "Culture",
    title: "Celebrating Milestones"
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    category: "Office",
    title: "Our Open Workspaces"
  },
];

const VALUES = [
  { icon: Cpu, title: "Obsessed with Quality", desc: "We don't ship 'good enough'. We ship 'perfect'. Code that flies must be flawless." },
  { icon: Users, title: "No Ego, Just Code", desc: "The best idea wins, regardless of your title, tenure, or background." },
  { icon: Zap, title: "Move Fast", desc: "We deploy daily. Speed is our competitive advantage in the drone airspace." },
];

const HIRING_PROCESS = [
  { icon: FileText, title: "Apply", desc: "Submit your profile. No cover letters needed." },
  { icon: UserCheck, title: "Screening", desc: "30-min chat to align on goals and culture." },
  { icon: Cpu, title: "Tech Challenge", desc: "Show us your skills with a real-world task." },
  { icon: CheckCircle, title: "Offer", desc: "Welcome to the team. Let's fly." },
];

const PERKS = [
  { icon: Heart, title: "Comprehensive Health", desc: "Full medical coverage for you & family." },
  { icon: Globe, title: "Remote-First DNA", desc: "Work from our hubs or your home." },
  { icon: Zap, title: "Learning Budget", desc: "Annual stipend for conferences & courses." },
  { icon: Coffee, title: "Sabbatical Program", desc: "6-week paid break every 4 years." },
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

// --- 3. THE HERO SECTION (COMPACT & INTERACTIVE) ---

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "We are building the autonomous infrastructure of tomorrow.";
  const scrollRef = useRef<HTMLDivElement>(null);

  // JS EFFECT 1: Parallax Mouse Movement
  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 25;
    const y = (e.clientY - window.innerHeight / 2) / 25;
    setMousePosition({ x, y });
  };

  // JS EFFECT 2: Typewriter Text
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

  // Carousel Logic
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; 
      scrollRef.current.scrollBy({ left: direction === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-18 pb-16 bg-slate-900 overflow-hidden">
      {/* Parallax Backgrounds */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[100px] pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HERO TEXT (Compact) */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-left duration-700">
               <span className="h-px w-8 bg-sky-500"></span>
               <span className="text-sky-400 font-mono text-xs uppercase tracking-widest">/ Join_The_Revolution</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Life at <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 font-light italic">KarVenSen_</span>
            </h1>
            
            {/* Typewriter Subtext */}
            <p className="text-lg text-slate-400 font-light h-16 md:h-8 font-mono">
              {typedText}<span className="animate-pulse text-sky-500">|</span>
            </p>
          </div>
          
          <div className="shrink-0 animate-in fade-in zoom-in duration-700 delay-300">
            <button onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-6 py-3 bg-white text-slate-900 rounded-lg font-bold overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 group-hover:text-white transition-colors">View Openings</span>
              <div className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            </button>
          </div>
        </div>

        {/* CAROUSEL (Compact & Integrated) */}
        <div className="relative group animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CULTURE_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[25%] h-[350px] relative rounded-xl overflow-hidden snap-center shrink-0 cursor-pointer border border-white/5 hover:border-sky-500/50 transition-all duration-300 group/card"
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 p-6 transform transition-transform duration-300 group-hover/card:translate-y-[-5px]">
                  <span className="inline-block px-2 py-0.5 bg-sky-500/20 border border-sky-500/30 rounded text-[10px] font-bold text-sky-300 mb-2 uppercase tracking-wider">
                    {img.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scroll('left')} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white hover:bg-sky-600 transition-all opacity-0 group-hover:opacity-100 z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm border border-white/10 p-2 rounded-full text-white hover:bg-sky-600 transition-all opacity-0 group-hover:opacity-100 z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

// --- 4. MAIN PAGE ---

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 selection:bg-sky-500 selection:text-white">
      
      {/* SECTION 1: HERO (With Parallax & Carousel) */}
      <HeroSection />

      {/* SECTION 2: VALUES */}
      <section className="py-24 pt-16 bg-white">
        <div className="container mx-auto px-6">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Not just another tech company.</h2>
               <p className="text-lg text-slate-600 leading-relaxed">
                 At KarVenSen, we don't just write software; we write the logic that controls flying robots. 
               </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((val, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-sky-600 shadow-sm group-hover:scale-110 transition-transform">
                    <val.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HIRING PROCESS */}
      <section className="py-24 pt-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How we hire</h2>
            <p className="text-slate-500 mt-2">A transparent process designed to find the best match.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HIRING_PROCESS.map((step, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="text-center relative">
                  {i !== HIRING_PROCESS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>
                  )}
                  <div className="w-16 h-16 mx-auto bg-white rounded-full border-4 border-slate-100 flex items-center justify-center text-slate-900 mb-4 z-10 relative">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-[150px] mx-auto">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      
      {/* --- SECTION 4: TESTIMONIALS (Dark Mode) --- */}
      <section className="py-24 pt-16 bg-slate-900 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Voices from the Team</h2>
            <p className="text-slate-400">Hear from the people building the future.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <RevealOnScroll key={i} delay={i * 150}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl relative hover:bg-slate-800 transition-all duration-300 group cursor-default">
                  
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-sky-500/10 absolute top-6 right-6 group-hover:text-sky-500/30 group-hover:scale-110 transition-all duration-500" />
                  
                  {/* --- THE STARS --- */}
                  <div className="flex items-center gap-1 mb-6">
                    {[0, 1, 2, 3, 4].map((starIndex) => (
                      <Star 
                        key={starIndex} 
                        // HERE IS THE CHANGE:
                        // 1. text-sky-600 (Blue by default)
                        // 2. group-hover:text-yellow-400 (Turns Gold one by one on hover)
                        className="w-4 h-4 fill-current text-sky-600 group-hover:text-yellow-400 transition-colors duration-300"
                        style={{ transitionDelay: `${starIndex * 75}ms` }}
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg text-slate-300 italic mb-8 relative z-10 leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-600 group-hover:ring-sky-500 transition-all duration-300" />
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-xs font-semibold text-sky-400 uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: BENEFITS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
               <div className="inline-block p-2 bg-sky-50 rounded-2xl mb-4">
                  <Award className="w-6 h-6 text-sky-600" />
               </div>
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Benefits that matter.</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 We believe that happy, healthy employees write the best code.
               </p>
               <button className="text-sky-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-sm tracking-wide">
                 View Full Guide <ArrowRight className="w-4 h-4"/>
               </button>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {PERKS.map((perk, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                      <perk.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{perk.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{perk.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: JOB LIST */}
      <section id="jobs" className="py-24 pt-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Open Positions</h2>
              <p className="text-slate-600">Find your place in our mission.</p>
            </div>
            <div className="bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
               <span className="text-sm font-bold text-slate-600">
                 <span className="text-sky-600">{JOBS_DATA.length}</span> Roles Available
               </span>
            </div>
          </div>
          
          <div className="space-y-4">
            {JOBS_DATA.map((job: Job, i: number) => (
              <RevealOnScroll key={job.id} delay={i * 50}>
                <Link href={`/careers/${job.id}`} className="block">
                  <div className="group flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/40 transition-all cursor-pointer relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                    <div className="flex items-center gap-6 w-full md:w-auto">
                      <div className="hidden md:flex h-16 w-16 bg-slate-50 rounded-2xl items-center justify-center text-slate-400 font-bold text-xl group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                        {job.title.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-2">
                          <span className="flex items-center gap-1"><Users className="w-3 h-3"/> {job.department}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {job.location}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 w-full md:w-auto text-right">
                      <span className="inline-flex justify-center items-center gap-2 px-6 py-3 w-full md:w-auto rounded-full border border-slate-200 text-slate-700 font-semibold group-hover:bg-sky-600 group-hover:text-white group-hover:border-transparent transition-all">
                        View Role <ArrowRight className="w-4 h-4"/>
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  )
}