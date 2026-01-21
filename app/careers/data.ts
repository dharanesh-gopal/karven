// app/careers/data.ts

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full Time" | "Internship" | "Contract";
  experience: string;
  postedAt: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const JOBS_DATA: Job[] = [
  { 
    id: "1", 
    title: "Principal Drone Engineer", 
    department: "Engineering", 
    location: "Hyderabad", 
    type: "Full Time", 
    experience: "8+ Years",
    postedAt: "2 days ago",
    description: "We are looking for a Principal Engineer to lead our flight control systems team. You will be responsible for the core architecture of our autonomous navigation stack.",
    responsibilities: [
        "Architect and implement flight control algorithms.",
        "Lead a team of 5+ embedded systems engineers.",
        "Collaborate with AI research for vision-based navigation."
    ],
    requirements: [
        "M.Tech/PhD in Aerospace or Robotics.",
        "8+ years in embedded C/C++.",
        "Experience with PX4 or ArduPilot stacks."
    ]
  },
  { 
    id: "2", 
    title: "Computer Vision Researcher", 
    department: "AI Research", 
    location: "Bangalore", 
    type: "Full Time", 
    experience: "3-5 Years",
    postedAt: "1 week ago",
    description: "Join our core AI team to build detection models that run on the edge. You will work with Thermal and RGB data streams.",
    responsibilities: [
        "Train and optimize CNNs for edge devices (Jetson).",
        "Work on object tracking and classification."
    ],
    requirements: [
        "Strong PyTorch/TensorFlow skills.",
        "Experience with OpenCV and TensorRT.",
        "Published papers in CVPR/ICCV is a plus."
    ]
  },
  { 
    id: "3", 
    title: "Frontend Lead (React)", 
    department: "Product", 
    location: "Remote", 
    type: "Contract", 
    experience: "5+ Years",
    postedAt: "3 days ago",
    description: "We need a UI expert to build our Fleet Management Dashboard. This is a high-performance map-heavy application.",
    responsibilities: [
        "Build complex data visualizations using WebGL/Mapbox.",
        "Maintain the internal component library."
    ],
    requirements: [
        "Expert in React, Next.js and TypeScript.",
        "Experience with WebSockets for real-time data.",
        "Eye for design and micro-interactions."
    ]
  },
  { 
    id: "4", 
    title: "Enterprise Sales Director", 
    department: "Sales", 
    location: "Delhi NCR", 
    type: "Full Time", 
    experience: "10+ Years",
    postedAt: "Just now",
    description: "Drive B2B sales in the defense and agriculture sectors. You will manage key accounts and government contracts.",
    responsibilities: [
        "Close high-value contracts with government bodies.",
        "Build and manage a regional sales team."
    ],
    requirements: [
        "Proven track record in B2B hardware/SaaS sales.",
        "Strong network in Defense/Agri-tech.",
        "Excellent negotiation skills."
    ]
  },
];