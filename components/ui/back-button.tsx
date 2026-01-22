"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackButton() {
    const router = useRouter();

    return (
        <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => router.back()}
            className="group flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
        >
            <div className="p-1 rounded-full bg-red-600 group-hover:bg-red-500 transition-colors">
                <ArrowLeft className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-semibold tracking-wide uppercase">Back</span>
        </motion.button>
    );
}
