"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Box, Cpu, Signal } from "lucide-react";
import Image from "next/image";

// Data for the cards - Easy to edit
const locations = [
  {
    title: "Pune - Headquarters",
    address: "1st & 2nd Floor, Galore Tech Lohia-Jain, Lane 2, Bavdhan, Pune, Maharashtra - 411021",
    phones: ["+91 98900 03590", "+91 89564 44677"],
    email: "info@karvensen.com",
    droneIcon: "🚁",
    status: "SYSTEMS ONLINE",
    statusIcon: <Signal className="w-3 h-3 text-green-500 animate-pulse" />
  },
  {
    title: "IIT Ropar - RPTO",
    address: "Indian Institute of Technology, Ropar, Rupnagar, Punjab - 140001",
    phones: ["+91 89563 33866", "+91 90272 50519"],
    email: "info@karvensen.com",
    droneIcon: "🛸",
    status: "RPTO LINK ACTIVE",
    statusIcon: <Cpu className="w-3 h-3 text-blue-500 animate-pulse" />
  },
  {
    title: "Jaipur - RPTO",
    address: "Subhkhyati Aerospace. B64, Sumitra Marg Hanuman Nagar, Vaishali Nagar, Jaipur 302021",
    phones: ["+91 70230 84390"],
    email: "info@karvensen.com",
    droneIcon: "🛰️",
    status: "CARGO READY",
    statusIcon: <Box className="w-3 h-3 text-orange-500 animate-pulse" />
  },
];

export default function ConnectCards() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxYReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gray-50 py-20 overflow-hidden relative"
    >
      {/* Flight Path SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.path
          d="M 100 200 Q 400 300 800 100 T 1200 600"
          fill="transparent"
          stroke="#8B0000"
          strokeWidth="2"
          strokeDasharray="5 5"
          style={{ pathLength }}
        />
      </svg>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-20 right-10 w-64 h-64 bg-red-100 rounded-full blur-[100px] -z-10 opacity-50"
      />
      <motion.div
        style={{ y: parallaxYReverse }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -z-10 opacity-30"
      />


      <div className="container mx-auto px-4 md:px-8 relative">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Animated Title Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#8B0000] mb-4">
              Connect with Karvensen
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-light">
              From premier academic campuses to advanced tech hubs, our presence drives the future of drone technology.
            </p>
          </motion.div>

          {/* Drone Illustration & Air Particles */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 z-10"
            >
              <Image
                src="/undraw_flying-drone_0oms.svg"
                alt="Flying Drone"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-red-500/10 blur-3xl -z-10 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Air Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 50, 100],
                  x: [(i - 4) * 20, (i - 4) * 30, (i - 4) * 40],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                className="absolute left-1/2 top-3/4 w-1 h-1 bg-red-400 rounded-full blur-sm"
              />
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <motion.a
              key={index}
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group block cursor-pointer"
            >
              {/* Decorative drone element in the corner of the card */}
              <div className="absolute -top-4 -right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-500">
                {loc.droneIcon}
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[#8B0000] flex items-center gap-3">
                  <span className="text-3xl">{loc.droneIcon}</span>
                  {loc.title}
                </h3>
                {/* Status Badge */}
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-gray-100 bg-gray-50/50 backdrop-blur-sm shadow-inner">
                  {loc.statusIcon}
                  <span className="text-[10px] font-bold text-gray-500 tracking-tighter uppercase whitespace-nowrap">
                    {loc.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {loc.address}
                  </p>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div className="flex flex-col">
                    {loc.phones.map((phone, i) => (
                      <span key={i} className="text-gray-600 text-sm font-medium">
                        {phone}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm font-medium">
                    {loc.email}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}