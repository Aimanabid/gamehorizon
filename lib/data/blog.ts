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
    id: "introducing-playgame-horizon",
    title: "Introducing PlayGame Horizon — Building Great Games from Lahore",
    excerpt:
      "A small studio with a big vision. Here's who we are, what we're working on, and why we think Pakistan is the perfect place to build thoughtful, player-first games.",
    content: "",
    category: "Company News",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2025-10-01",
    readTime: 5,
    image: "/images/blog/intro.jpg",
    tags: ["Studio", "Introduction", "Pakistan"],
    featured: true,
  },
  {
    id: "mobile-first-development",
    title: "Why We Build Mobile-First at PlayGame Horizon",
    excerpt:
      "Mobile is where most of our players are. Here's how we approach mobile-first game development without compromising on polish.",
    content: "",
    category: "Development",
    author: "PlayGame Horizon Team",
    authorRole: "Engineering",
    date: "2025-09-15",
    readTime: 6,
    image: "/images/blog/mobile-first.jpg",
    tags: ["Mobile", "Development", "Design"],
    featured: true,
  },
  {
    id: "scoping-indie-games",
    title: "Scoping an Indie Game Realistically (From Someone Who Learned the Hard Way)",
    excerpt:
      "The most common mistake small studios make isn't a lack of skill — it's over-scoping. Here's how we size our projects to actually ship.",
    content: "",
    category: "Development",
    author: "PlayGame Horizon Team",
    authorRole: "Design",
    date: "2025-08-28",
    readTime: 7,
    image: "/images/blog/scoping.jpg",
    tags: ["Indie", "Production", "Scoping"],
    featured: true,
  },
  {
    id: "star-weaver-launch",
    title: "Star Weaver Is Out Now — A Quiet Puzzle Game for Busy Lives",
    excerpt:
      "Our debut mobile title Star Weaver is now available. A short note on what we built, what we learned, and what's next.",
    content: "",
    category: "Launches",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2025-08-14",
    readTime: 4,
    image: "/images/blog/star-weaver.jpg",
    tags: ["Launch", "Puzzle", "Mobile"],
  },
  {
    id: "hiring-pakistan-game-devs",
    title: "Hiring Game Developers in Pakistan: What We Look For",
    excerpt:
      "There's incredible talent in Pakistan. Here are the qualities and skills we prioritize when growing a small, focused studio team.",
    content: "",
    category: "Company News",
    author: "PlayGame Horizon Team",
    authorRole: "People",
    date: "2025-07-20",
    readTime: 5,
    image: "/images/blog/hiring.jpg",
    tags: ["Hiring", "Pakistan", "Culture"],
  },
  {
    id: "cultural-games",
    title: "Making Games That Feel Like Home",
    excerpt:
      "Why we lean into local flavor — bazaars, chowks, cricket — rather than mimicking Western or Japanese studio aesthetics.",
    content: "",
    category: "Design",
    author: "PlayGame Horizon Team",
    authorRole: "Creative",
    date: "2025-06-10",
    readTime: 6,
    image: "/images/blog/cultural.jpg",
    tags: ["Design", "Culture", "Identity"],
  },
];
