"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface Application {
    stat: string
    title: string
    description: string
    image: string
    alt: string
}

interface ApplicationsClientProps {
    sectionTitle: string
    items: Application[]
}

export function ApplicationsClient({ sectionTitle, items }: ApplicationsClientProps) {
    return (
        <section id="applications" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#1a1a1a] mb-20"
                >
                    {sectionTitle}
                </motion.h2>

                <div className="space-y-32">
                    {items.map((app, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex-1 space-y-6"
                            >
                                <div className="inline-block relative">
                                    <span className="relative z-10 text-4xl md:text-5xl lg:text-7xl font-bold text-[#1a1a1a] px-2">
                                        {app.stat}
                                        <div className="absolute left-0 bottom-2 w-full h-[40%] bg-[#FFD700] -z-10 opacity-90" />
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight">
                                    {app.title}
                                </h3>

                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    {app.description}
                                </p>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group"
                            >
                                <Image
                                    src={app.image}
                                    alt={app.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Decorative Elements */}
                                <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
