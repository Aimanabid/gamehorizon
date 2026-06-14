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
    id: "jordan-kim",
    name: "Jordan Kim",
    role: "CEO & Co-Founder",
    bio: "Former AAA game designer with 12+ years at leading studios. Passionate about building worlds that players never want to leave.",
    image: "/images/team/jordan.jpg",
    social: { twitter: "@jordankim_gh", linkedin: "jordankim" },
  },
  {
    id: "alex-chen",
    name: "Alex Chen",
    role: "CTO & Co-Founder",
    bio: "Engine architect who has shipped 20+ titles across every major platform. Expert in real-time rendering and multiplayer infrastructure.",
    image: "/images/team/alex.jpg",
    social: { twitter: "@alexchen_dev", github: "alexchendev" },
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Creative Director",
    bio: "Award-winning art director whose visual style has defined multiple critically acclaimed franchises. Masters of immersive world-building.",
    image: "/images/team/priya.jpg",
    social: { twitter: "@priyasharma_art", linkedin: "priyasharma" },
  },
  {
    id: "marcus-rodriguez",
    name: "Marcus Rodriguez",
    role: "Lead Game Designer",
    bio: "Gameplay systems expert with a passion for creating fair, deep, and endlessly replayable game mechanics.",
    image: "/images/team/marcus.jpg",
    social: { twitter: "@marcusdesigns", linkedin: "marcusrodriguez" },
  },
  {
    id: "sarah-wong",
    name: "Sarah Wong",
    role: "Head of Engineering",
    bio: "Distributed systems specialist who keeps our multiplayer infrastructure running smoothly for millions of concurrent players.",
    image: "/images/team/sarah.jpg",
    social: { github: "sarahwong", linkedin: "sarahwong" },
  },
  {
    id: "daniel-okafor",
    name: "Daniel Okafor",
    role: "Head of Marketing",
    bio: "Brand strategist who helped launch five indie titles to top-10 charts on Steam and App Store. Master of gaming communities.",
    image: "/images/team/daniel.jpg",
    social: { twitter: "@danielokafor", linkedin: "danielokafor" },
  },
];

export const timeline = [
  {
    year: "2020",
    title: "GameHorizon Founded",
    description: "Jordan and Alex left their AAA jobs to pursue a vision: indie quality at AAA scale.",
  },
  {
    year: "2021",
    title: "First Game Released",
    description: "Shadow Realm Online launched in Early Access, reaching 100K players in the first week.",
  },
  {
    year: "2022",
    title: "Series A Funding",
    description: "$12M Series A raised. Team grew from 8 to 45 talented developers and artists.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Opened studios in London, Tokyo, and Austin. Launched mobile division.",
  },
  {
    year: "2024",
    title: "1 Million Players",
    description: "Crossed 1 million registered players across all titles. Won 3 industry awards.",
  },
  {
    year: "2025",
    title: "The Horizon Expands",
    description: "Launching VR division and two major new titles. The future is bright.",
  },
];
