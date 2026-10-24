export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "The Founding Team",
    role: "Direction & Vision",
    bio: "A tight group of designers, engineers, and artists who came together with a shared belief: Pakistan can — and should — be making world-class games.",
    image: "/images/team/founder.jpg",
    social: {},
  },
  {
    id: "engineering",
    name: "Engineering",
    role: "Code That Just Works",
    bio: "Our engineering team ships clean, performant code across Unity, Unreal, and web platforms. Mobile-first by habit, platform-agnostic by discipline.",
    image: "/images/team/engineering.jpg",
    social: {},
  },
  {
    id: "art",
    name: "Art & Design",
    role: "Visual Identity & Feel",
    bio: "Illustration, UI, and 3D artists who care about how a game feels in your hands as much as how it looks on screen.",
    image: "/images/team/art.jpg",
    social: {},
  },
  {
    id: "production",
    name: "Production & QA",
    role: "On Time, Done Right",
    bio: "The quiet heroes who keep projects shipping — scoping, scheduling, and testing with calm, honest communication.",
    image: "/images/team/production.jpg",
    social: {},
  },
];

export const timeline = [
  {
    year: "2024",
    title: "PlayGame Horizon Founded",
    description: "A small team gathered in Lahore with a shared mission: build thoughtful, player-first games from Pakistan.",
  },
  {
    year: "2025",
    title: "First Prototypes Shipped",
    description: "Released our debut titles Star Weaver and Chowk Chase on mobile — our first steps into the market.",
  },
  {
    year: "2025",
    title: "SECP Registration",
    description: "Officially incorporated as PlayGame Horizon (SMC-Private) Limited with the Securities and Exchange Commission of Pakistan.",
  },
  {
    year: "2026",
    title: "Expanding the Portfolio",
    description: "Horizon Runner, Bazaar Tycoon, and Cricket Legends enter active development. Team growing carefully, project by project.",
  },
  {
    year: "Future",
    title: "The Horizon Ahead",
    description: "We're building for the long term — a trusted Pakistani game studio with a catalog of titles people genuinely love.",
  },
];
