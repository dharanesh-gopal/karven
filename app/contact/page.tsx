"use client";

import React, { useEffect, useState } from "react";
import ConnectCards from "@/components/ui/connect-cards";
import ContactSection from "@/components/contact-section";
import CursorDrone from "@/components/ui/cursor-drone";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <CursorDrone />
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(220, 38, 38, 0.8);
          }
        }

        @keyframes underline-expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-pulseGlow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-expandUnderline {
          animation: underline-expand 1s ease-out 0.4s forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* Hero Section: "Get in Touch" */}
      <section className="relative w-full bg-[#1a1f2c] py-24 md:py-32 flex flex-col items-center text-center px-4 overflow-hidden">
        {/* Background animated gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Subtle curve at the bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>

        <div className="z-10 max-w-4xl mx-auto space-y-6 flex flex-col items-center">
          {/* Badge with animation */}
          <div
            className={`inline-block px-4 py-1.5 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm mb-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-red-500 font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Fly High. Aim Higher!
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </span>
          </div>

          {/* Main heading with animated underline */}
          <h1
            className={`text-4xl md:text-6xl font-bold text-white tracking-tight ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            Get in Touch{' '}
            <span className="relative inline-block">
              with Us
              <span
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full ${isVisible ? 'animate-expandUnderline' : 'w-0'}`}
                style={{ width: isVisible ? '100%' : '0%' }}
              ></span>
            </span>
          </h1>

          {/* Description with animation */}
          <p
            className={`text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            We're here to answer your queries, offer personalized assistance, and guide
            you through every step of your drone experience. Reach out to us, and let's
            make your vision take flight.
          </p>

          {/* Animated CTA hint */}
          <div
            className={`flex justify-center gap-2 items-center text-red-500 text-sm font-medium mt-8 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <span>↓ Scroll to explore our services</span>
            <div className="inline-block animate-bounce">↓</div>
          </div>
        </div>
      </section>

      {/* Animated Contact Cards Section */}
      <ConnectCards />

      {/* Contact Form Section */}
      <ContactSection />

    </>
  );
}