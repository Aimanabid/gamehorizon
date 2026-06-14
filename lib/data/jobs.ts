export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  level: "Junior" | "Mid" | "Senior" | "Lead" | "Director";
  description: string;
  requirements: string[];
  niceToHave: string[];
  salary?: string;
  posted: string;
}

export const jobs: Job[] = [
  {
    id: "senior-game-developer",
    title: "Senior Game Developer (Unreal Engine 5)",
    department: "Engineering",
    location: "Remote / Austin, TX",
    type: "Full-time",
    level: "Senior",
    description:
      "We're looking for a senior game developer with deep UE5 expertise to help build our next flagship title. You'll work closely with our creative and design teams to bring ambitious gameplay systems to life.",
    requirements: [
      "5+ years of game development experience",
      "Proficiency in Unreal Engine 5 and C++",
      "Experience shipping at least one commercial title",
      "Strong understanding of game optimization techniques",
      "Excellent collaboration and communication skills",
    ],
    niceToHave: ["Experience with multiplayer game development", "Blueprint scripting", "VR/AR development experience"],
    salary: "$120K - $160K",
    posted: "2025-01-08",
  },
  {
    id: "mobile-game-developer",
    title: "Mobile Game Developer (Unity)",
    department: "Mobile Division",
    location: "Remote",
    type: "Full-time",
    level: "Mid",
    description:
      "Join our mobile team to create high-performance gaming experiences on iOS and Android. You'll optimize gameplay for mobile constraints while maintaining a premium feel.",
    requirements: [
      "3+ years of mobile game development with Unity",
      "Strong C# programming skills",
      "Experience with mobile optimization (memory, battery, thermal)",
      "Knowledge of App Store and Google Play submission processes",
    ],
    niceToHave: ["Experience with cross-platform development", "Shader programming", "Analytics integration"],
    salary: "$90K - $120K",
    posted: "2025-01-05",
  },
  {
    id: "lead-3d-artist",
    title: "Lead 3D Artist",
    department: "Art",
    location: "London, UK / Remote",
    type: "Full-time",
    level: "Lead",
    description:
      "Lead our 3D art team in creating stunning game assets that push the boundaries of real-time rendering. Define our visual pipeline and mentor junior artists.",
    requirements: [
      "7+ years of 3D art experience in games",
      "Expert in ZBrush, Maya/Blender, and Substance Painter",
      "Experience with PBR workflows and real-time constraints",
      "Portfolio showcasing AAA-quality character and environment art",
      "Leadership and mentoring experience",
    ],
    niceToHave: ["Cinematic experience", "Houdini for VFX", "Experience with photogrammetry"],
    salary: "£70K - £95K",
    posted: "2025-01-03",
  },
  {
    id: "multiplayer-backend-engineer",
    title: "Multiplayer Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
    description:
      "Architect and implement the server infrastructure powering our multiplayer titles. Handle millions of concurrent connections with sub-100ms latency globally.",
    requirements: [
      "5+ years of backend engineering",
      "Experience with game server architecture",
      "Proficiency in Go, Rust, or C++",
      "Experience with Kubernetes and cloud infrastructure (AWS/GCP)",
      "Understanding of networking protocols (UDP, WebSockets, WebRTC)",
    ],
    niceToHave: ["Experience with dedicated game servers", "Anti-cheat systems", "Real-time databases"],
    salary: "$130K - $175K",
    posted: "2024-12-28",
  },
  {
    id: "vr-developer",
    title: "VR/AR Developer",
    department: "XR Division",
    location: "Tokyo, Japan / Remote",
    type: "Full-time",
    level: "Mid",
    description:
      "Help build the next generation of immersive VR experiences. Work with cutting-edge hardware and push the boundaries of what's possible in virtual reality.",
    requirements: [
      "3+ years of XR development experience",
      "Experience with Meta Quest, PlayStation VR2, or SteamVR",
      "Proficiency in Unity or Unreal Engine for VR",
      "Understanding of comfort and accessibility in VR design",
    ],
    niceToHave: ["Hand tracking experience", "Spatial audio implementation", "Mixed reality development"],
    salary: "¥9M - ¥13M",
    posted: "2024-12-20",
  },
  {
    id: "game-designer",
    title: "Game Designer (Systems & Economy)",
    department: "Design",
    location: "Remote / Austin, TX",
    type: "Full-time",
    level: "Mid",
    description:
      "Design and balance the gameplay systems, economies, and progression mechanics that keep players engaged for thousands of hours.",
    requirements: [
      "3+ years of game design experience",
      "Strong analytical and data-driven design approach",
      "Experience designing game economies and progression systems",
      "Proficiency in spreadsheet-based balancing",
      "Excellent written communication for design documentation",
    ],
    niceToHave: ["Live service game experience", "Data analysis skills (SQL, Python)", "Player behavior research"],
    salary: "$85K - $115K",
    posted: "2024-12-15",
  },
];

export const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    description: "Top-of-market compensation with equity options. We believe in sharing success with our team.",
  },
  {
    icon: "🏠",
    title: "Remote-First",
    description: "Work from anywhere. We have optional hubs in Austin, London, and Tokyo for those who prefer an office.",
  },
  {
    icon: "🎮",
    title: "Gaming Budget",
    description: "$2,000/year gaming budget for hardware, games, and industry events. Research is part of the job.",
  },
  {
    icon: "📚",
    title: "Learning & Development",
    description: "$3,000/year for conferences, courses, and books. We invest heavily in your growth.",
  },
  {
    icon: "🏥",
    title: "Premium Healthcare",
    description: "Comprehensive medical, dental, and vision for you and your family. Mental health support included.",
  },
  {
    icon: "⏰",
    title: "Flexible Hours",
    description: "Core hours overlap for collaboration, but we trust you to manage your own time.",
  },
  {
    icon: "🚀",
    title: "Early Access",
    description: "Play all our games before launch. Your feedback directly shapes the final product.",
  },
  {
    icon: "🌴",
    title: "Unlimited PTO",
    description: "Unlimited paid time off with a mandatory 2-week minimum. We mean it — rest is productive.",
  },
];
