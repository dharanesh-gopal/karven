'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Users, Layout, Briefcase, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IndustryInsightProps {
    badge: string
    items: {
        id: string
        tabTitle: string
        icon: string
        title: string
        description: string
        image: string
    }[]
}

const iconMap: Record<string, React.ElementType> = {
    'layout': Layout,
    'users': Users,
    'graduation-cap': GraduationCap,
    'briefcase': Briefcase
}

export function IndustryInsightsClient({ badge, items }: IndustryInsightProps) {
    const [activeTab, setActiveTab] = useState(items[0]?.id)
    const activeItem = items.find(item => item.id === activeTab) || items[0]

    if (!items || items.length === 0) return null

    return (
        <section className="py-20 md:py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-primary/80 mb-10"
                    >
                        {badge}
                    </motion.div>

                    {/* Tabs Navigation */}
                    <div className="flex items-center justify-center gap-10 md:gap-16 border-b border-border/40 px-6">
                        {items.map((item) => {
                            const Icon = iconMap[item.icon] || Layout
                            const isActive = activeTab === item.id
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={cn(
                                        "relative flex items-center gap-2.5 pb-3.5 text-sm md:text-base font-bold transition-all duration-300",
                                        isActive ? "text-foreground" : "text-muted-foreground/70 hover:text-foreground"
                                    )}
                                >
                                    <Icon className={cn("w-4 h-4 md:w-5 md:h-5", isActive ? "text-primary/70" : "text-muted-foreground/50")} />
                                    <span>{item.tabTitle}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-t-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        >
                            {/* Text Content */}
                            <div className="space-y-6 order-2 lg:order-1 text-left">
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]"
                                >
                                    {activeItem.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-base md:text-lg text-muted-foreground/80 leading-relaxed font-normal"
                                >
                                    {activeItem.description}
                                </motion.p>
                            </div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-[4/3.2] rounded-2xl overflow-hidden shadow-xl group order-1 lg:order-2 w-full lg:max-w-[480px] ml-auto"
                            >
                                <Image
                                    src={activeItem.image}
                                    alt={activeItem.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
