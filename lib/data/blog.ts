export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-multiplayer-gaming",
    title: "The Future of Multiplayer Gaming: What's Coming in 2025",
    excerpt:
      "From AI-driven NPCs to persistent cross-platform universes, we explore the technologies reshaping multiplayer experiences.",
    content: "",
    category: "Industry Trends",
    author: "Alex Chen",
    authorRole: "Lead Game Designer",
    date: "2025-01-10",
    readTime: 8,
    image: "/images/blog/multiplayer-future.jpg",
    tags: ["Multiplayer", "AI", "Cross-Platform", "2025"],
    featured: true,
  },
  {
    id: "mobile-gaming-revolution",
    title: "Mobile Gaming Revolution: How Smartphones Became AAA Platforms",
    excerpt:
      "The line between mobile and console gaming is blurring. Here's how studios are creating console-quality experiences on mobile.",
    content: "",
    category: "Mobile Gaming",
    author: "Priya Sharma",
    authorRole: "Mobile Lead Developer",
    date: "2025-01-05",
    readTime: 6,
    image: "/images/blog/mobile-revolution.jpg",
    tags: ["Mobile", "AAA", "Graphics", "Performance"],
    featured: true,
  },
  {
    id: "vr-ar-game-design",
    title: "Designing for VR/AR: Lessons from the Trenches",
    excerpt:
      "Our VR team shares hard-won insights on spatial UI, motion sickness prevention, and creating truly immersive virtual worlds.",
    content: "",
    category: "Development Insights",
    author: "Marcus Rodriguez",
    authorRole: "XR Development Lead",
    date: "2024-12-28",
    readTime: 10,
    image: "/images/blog/vr-design.jpg",
    tags: ["VR", "AR", "Game Design", "UX"],
    featured: true,
  },
  {
    id: "indie-studio-success",
    title: "From Garage to Global: Building an Indie Studio That Scales",
    excerpt:
      "How GameHorizon grew from a 5-person team to a global studio while keeping the indie spirit alive.",
    content: "",
    category: "Company News",
    author: "Jordan Kim",
    authorRole: "CEO & Co-Founder",
    date: "2024-12-15",
    readTime: 7,
    image: "/images/blog/indie-success.jpg",
    tags: ["Indie", "Studio", "Growth", "Culture"],
  },
  {
    id: "ai-in-game-development",
    title: "AI-Assisted Game Development: Tools We're Using Today",
    excerpt:
      "A technical deep-dive into how our team leverages AI for everything from procedural content to playtesting automation.",
    content: "",
    category: "Development Insights",
    author: "Sarah Wong",
    authorRole: "AI Integration Engineer",
    date: "2024-12-05",
    readTime: 12,
    image: "/images/blog/ai-development.jpg",
    tags: ["AI", "Development", "Tools", "Automation"],
  },
  {
    id: "game-monetization-ethics",
    title: "Ethical Monetization: Building Games Players Actually Love to Pay For",
    excerpt:
      "The industry is shifting away from predatory models. Here's our philosophy on fair monetization that respects players.",
    content: "",
    category: "Industry Trends",
    author: "Alex Chen",
    authorRole: "Lead Game Designer",
    date: "2024-11-22",
    readTime: 9,
    image: "/images/blog/monetization.jpg",
    tags: ["Monetization", "Ethics", "Player Experience", "Business"],
  },
];
