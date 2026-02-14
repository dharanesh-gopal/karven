import type { Metadata } from "next"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "Blog | Karvensen",
  description:
    "Explore deep insights, innovations, and real-world applications across AI, Drone Technology, Cloud Computing, LMS platforms, and next-generation digital solutions.",
}

export default function BlogPage() {
  return <BlogPageClient />
}
