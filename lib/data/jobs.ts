export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote" | "Internship";
  level: "Junior" | "Mid" | "Senior" | "Lead" | "Director";
  description: string;
  requirements: string[];
  niceToHave: string[];
  salary?: string;
  posted: string;
}

export const jobs: Job[] = [
  {
    id: "unity-developer",
    title: "Unity Game Developer",
    department: "Engineering",
    location: "Lahore / Hybrid",
    type: "Full-time",
    level: "Mid",
    description:
      "Help us build polished mobile and PC games in Unity. You'll own gameplay systems end-to-end — from the first prototype to the final shippable build.",
    requirements: [
      "2+ years of Unity + C# experience",
      "At least one shipped title (even indie / jam) in your portfolio",
      "Strong grasp of mobile performance considerations",
      "Comfortable with Git-based workflows",
      "Good written and spoken English",
    ],
    niceToHave: ["Shader work", "Multiplayer / networking", "Experience with ad / IAP SDKs"],
    salary: "Market rate",
    posted: "2025-10-01",
  },
  {
    id: "junior-unity",
    title: "Junior Unity Developer",
    department: "Engineering",
    location: "Lahore / On-site",
    type: "Full-time",
    level: "Junior",
    description:
      "Early in your career? Bring a strong portfolio of game-jam or hobby projects and a hunger to learn. We'll invest in your growth with real production work from day one.",
    requirements: [
      "Working knowledge of Unity + C#",
      "A portfolio of personal projects, prototypes, or game jams",
      "Curiosity, attention to detail, and willingness to take feedback",
    ],
    niceToHave: ["CS / IT degree in progress or completed", "Open source contributions"],
    salary: "Market rate",
    posted: "2025-09-20",
  },
  {
    id: "2d-game-artist",
    title: "2D Game Artist",
    department: "Art",
    location: "Lahore / Remote-friendly",
    type: "Full-time",
    level: "Mid",
    description:
      "Create characters, environments, UI, and animation for our mobile and PC titles. We especially value artists who can lean into local, culturally-rooted visual styles.",
    requirements: [
      "3+ years of professional 2D game art experience",
      "Strong portfolio showcasing a range of styles",
      "Experience with sprite animation (Spine, DragonBones, or similar)",
      "Comfortable collaborating with engineers in Unity",
    ],
    niceToHave: ["Illustration / concept art background", "UI design for games", "Pakistani / South Asian visual sensibility"],
    salary: "Market rate",
    posted: "2025-09-10",
  },
  {
    id: "game-designer",
    title: "Game Designer",
    department: "Design",
    location: "Lahore / Hybrid",
    type: "Full-time",
    level: "Mid",
    description:
      "Design gameplay, systems, and progression for our mobile titles. You'll own documentation, balance, and the moment-to-moment feel of what we ship.",
    requirements: [
      "3+ years of game design experience",
      "Strong systems-thinking and data-driven balance skills",
      "Experience with mobile game economies",
      "Excellent documentation habits",
    ],
    niceToHave: ["Live-ops design experience", "SQL / spreadsheets for balance", "A shipped mobile title you worked on"],
    salary: "Market rate",
    posted: "2025-08-28",
  },
  {
    id: "qa-tester",
    title: "QA Tester (Mobile Games)",
    department: "QA",
    location: "Lahore / On-site",
    type: "Full-time",
    level: "Junior",
    description:
      "Help us ship clean, polished games. You'll test builds on real devices, write clear bug reports, and work closely with developers to track down and reproduce issues.",
    requirements: [
      "A love for games and sharp attention to detail",
      "Strong written English for clear bug reports",
      "Comfortable with Android / iOS test devices",
    ],
    niceToHave: ["Familiarity with Jira / Linear / GitHub issues", "Basic knowledge of Unity"],
    salary: "Market rate",
    posted: "2025-08-15",
  },
  {
    id: "internship",
    title: "Game Development Internship",
    department: "Internship",
    location: "Lahore / On-site",
    type: "Internship",
    level: "Junior",
    description:
      "3–6 month paid internships for students and early-career developers across engineering, art, design, and QA. Real projects, real mentorship, a real portfolio piece at the end.",
    requirements: [
      "Currently studying or recently graduated",
      "A portfolio of personal work (game jams, hobby projects, art)",
      "Able to commit to on-site hours in Lahore",
    ],
    niceToHave: ["Previous jam or hackathon experience", "Any shipped work, even small"],
    posted: "2025-07-30",
  },
];

export const benefits = [
  {
    icon: "🎮",
    title: "Real Projects",
    description: "No fake busywork. From day one you work on games we actually ship.",
  },
  {
    icon: "👥",
    title: "Small Team",
    description: "A tight-knit team where your work and voice genuinely matter.",
  },
  {
    icon: "🏢",
    title: "Lahore Office",
    description: "Centrally located in Old Anarkali — accessible, lively, and full of character.",
  },
  {
    icon: "📚",
    title: "Learning Budget",
    description: "Yearly budget for courses, books, and conferences to support your growth.",
  },
  {
    icon: "⏰",
    title: "Reasonable Hours",
    description: "No crunch culture. Clear hours, clear deadlines, and respect for your time.",
  },
  {
    icon: "🎨",
    title: "Creative Freedom",
    description: "Pitch your own ideas — we run studio game-jams and encourage ownership.",
  },
  {
    icon: "💻",
    title: "Good Gear",
    description: "Modern laptops, dual monitors, and test devices provided for everyone.",
  },
  {
    icon: "🚀",
    title: "Grow With Us",
    description: "Join an early-stage studio with real room to grow in responsibility and craft.",
  },
];
