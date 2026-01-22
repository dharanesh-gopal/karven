// app/careers/data.ts

export const JOBS_DATA = [
  // --- ENGINEERING ---
  {
    id: "eng-1",
    title: "Senior Drone Perception Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "5+ Years",
    postedAt: "2 days ago",
    description: "We are looking for a Computer Vision expert to lead our obstacle avoidance systems. You will work with LiDAR, Stereo Cameras, and radar data to build autonomous navigation stacks for urban environments.",
    responsibilities: [
      "Design and implement SLAM algorithms for GPS-denied environments.",
      "Optimize deep learning models (YOLO, SSD) for edge computing on NVIDIA Jetson.",
      "Collaborate with the flight control team to integrate perception outputs.",
      "Mentor junior engineers in C++ and Python best practices."
    ],
    requirements: [
      "M.S. or Ph.D. in Robotics, Computer Science, or related field.",
      "5+ years of experience with OpenCV, PCL, and ROS/ROS2.",
      "Strong proficiency in C++ and Python.",
      "Experience with sensor fusion (LiDAR + Camera)."
    ]
  },
  {
    id: "eng-2",
    title: "Embedded Flight Systems Lead",
    department: "Engineering",
    location: "San Francisco, US",
    type: "Full-time",
    experience: "7+ Years",
    postedAt: "1 week ago",
    description: "Lead the development of our core flight controller firmware. You will ensure our drones fly with millimeter-precision and handle failsafes gracefully.",
    responsibilities: [
      "Architect real-time flight control firmware (RTOS).",
      "Develop drivers for IMUs, GPS, and ESCs.",
      "Conduct HIL (Hardware-in-Loop) simulation testing.",
      "Ensure compliance with DO-178C safety standards."
    ],
    requirements: [
      "7+ years in embedded systems (STM32, ARM Cortex).",
      "Deep understanding of PID control loops and Kalman Filters.",
      "Experience with PX4 or ArduPilot codebases.",
      "US Citizenship or Green Card holder (EAR/ITAR compliance)."
    ]
  },
  {
    id: "eng-3",
    title: "Backend Cloud Architect",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "4+ Years",
    postedAt: "3 days ago",
    description: "Build the scalable infrastructure that manages thousands of concurrent drone missions. You will design the UTM (Unmanned Traffic Management) backend.",
    responsibilities: [
      "Design microservices using Go and Node.js.",
      "Manage Kubernetes clusters for high-availability mission control.",
      "Implement WebSocket protocols for real-time telemetry streaming.",
      "Optimize database queries for geospatial data (PostGIS)."
    ],
    requirements: [
      "Experience scaling distributed systems on AWS/Azure.",
      "Proficiency with Docker, Kubernetes, and Terraform.",
      "Knowledge of MQTT and WebSockets.",
      "Experience with time-series databases."
    ]
  },

  // --- OPERATIONS ---
  {
    id: "ops-1",
    title: "Chief Drone Pilot",
    department: "Flight Operations",
    location: "Bangalore, India",
    type: "On-site",
    experience: "3+ Years",
    postedAt: "Just now",
    description: "Manage flight testing protocols and lead field deployments. You are the final authority on flight safety and mission execution.",
    responsibilities: [
      "Execute complex BVLOS (Beyond Visual Line of Sight) test missions.",
      "Maintain fleet readiness and log maintenance schedules.",
      "Train new pilots on proprietary ground control software.",
      "Coordinate with DGCA/FAA for flight permissions."
    ],
    requirements: [
      "DGCA/FAA Remote Pilot Certificate (Category: Large).",
      "500+ logged flight hours on enterprise platforms.",
      "Experience with mission planning software.",
      "Willingness to travel 50% of the time."
    ]
  },
  {
    id: "ops-2",
    title: "Fleet Maintenance Technician",
    department: "Flight Operations",
    location: "Hyderabad, India",
    type: "On-site",
    experience: "2+ Years",
    postedAt: "5 days ago",
    description: "Keep our birds in the air. You will handle hardware repairs, soldering, and pre-flight checklist verifications.",
    responsibilities: [
      "Diagnose and repair motor, ESC, and carbon fiber frame issues.",
      "Manage inventory of spare parts and batteries.",
      "Perform soldering and wiring harness assembly.",
      "Assist engineering team with prototype assembly."
    ],
    requirements: [
      "Diploma in Electronics or Mechanical Engineering.",
      "Hands-on soldering and hardware debugging skills.",
      "Attention to detail and safety protocols.",
      "Experience with lipo battery management."
    ]
  },

  // --- PRODUCT ---
  {
    id: "prod-1",
    title: "Technical Product Manager",
    department: "Product",
    location: "Remote",
    type: "Contract",
    experience: "5+ Years",
    postedAt: "2 weeks ago",
    description: "Bridge the gap between business requirements and engineering execution. You will define the roadmap for our autonomous delivery platform.",
    responsibilities: [
      "Gather requirements from logistics partners.",
      "Define user stories for the flight autonomy team.",
      "Prioritize feature backlog based on market impact.",
      "Conduct competitive analysis of the drone delivery market."
    ],
    requirements: [
      "Background in Engineering or Computer Science.",
      "Experience launching hardware+software products.",
      "Strong communication skills with technical teams.",
      "Agile/Scrum certification is a plus."
    ]
  },
  {
    id: "prod-2",
    title: "UI/UX Designer (Aviation)",
    department: "Product",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3+ Years",
    postedAt: "1 day ago",
    description: "Design the cockpit of the future. You will create the Ground Control Station (GCS) interfaces used by operators to monitor drone fleets.",
    responsibilities: [
      "Design high-contrast, readable interfaces for field usage.",
      "Create prototypes for mission planning workflows.",
      "Conduct user testing with pilots.",
      "Build design systems for our React-based GCS."
    ],
    requirements: [
      "Portfolio demonstrating complex dashboard/data visualization work.",
      "Proficiency in Figma and prototyping tools.",
      "Understanding of cognitive load and human factors.",
      "Experience with dark-mode centric designs."
    ]
  },

  // --- BUSINESS ---
  {
    id: "sales-1",
    title: "Enterprise Sales Director",
    department: "Business",
    location: "Mumbai, India",
    type: "Hybrid",
    experience: "8+ Years",
    postedAt: "4 days ago",
    description: "Drive adoption of our technology among defense and logistics giants. You will handle high-value contract negotiations.",
    responsibilities: [
      "Identify and close multi-million dollar contracts.",
      "Build relationships with government and defense stakeholders.",
      "Present technical demos to C-level executives.",
      "Develop pricing strategies for SaaS and Hardware bundles."
    ],
    requirements: [
      "Proven track record in B2B Enterprise Sales (SaaS or Hardware).",
      "Network within Aerospace, Defense, or Logistics sectors.",
      "Strong negotiation and presentation skills.",
      "MBA preferred."
    ]
  }
];