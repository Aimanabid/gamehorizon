export interface Game {
  id: string;
  title: string;
  genre: string;
  platform: string[];
  status: "released" | "coming-soon" | "in-development";
  description: string;
  longDescription: string;
  image: string;
  releaseDate?: string;
  rating?: number;
  tags: string[];
  trailer?: string;
}

export const games: Game[] = [
  {
    id: "horizon-runner",
    title: "Horizon Runner",
    genre: "Endless Runner",
    platform: ["Mobile"],
    status: "in-development",
    description: "A fast-paced endless runner with hand-painted environments and smooth, intuitive controls built for mobile.",
    longDescription:
      "Horizon Runner is our first flagship mobile title — a vibrant endless runner featuring beautiful hand-painted environments inspired by South Asian culture, dynamic weather, and tight one-finger controls. Collect gems, unlock characters, and chase the horizon across procedurally mixed levels.",
    image: "/images/games/velocity-ultra.svg",
    releaseDate: "Q2 2026",
    tags: ["Mobile", "Casual", "Arcade", "Family-Friendly"],
  },
  {
    id: "bazaar-tycoon",
    title: "Bazaar Tycoon",
    genre: "Simulation",
    platform: ["Mobile", "PC"],
    status: "in-development",
    description: "Build and manage your own traditional bazaar — a cozy management sim with warmth, humor, and local flavor.",
    longDescription:
      "Bazaar Tycoon lets you build and run your own classic South Asian bazaar — from a tiny chai stall to a bustling marketplace. Hire shopkeepers, haggle with customers, stock seasonal goods, and shape a neighborhood economy. A cozy, chill sim with heart.",
    image: "/images/games/stellar-conquest.svg",
    releaseDate: "Q4 2026",
    tags: ["Simulation", "Casual", "Management", "Cozy"],
  },
  {
    id: "cricket-legends",
    title: "Cricket Legends",
    genre: "Sports",
    platform: ["Mobile"],
    status: "coming-soon",
    description: "A polished, physics-driven cricket experience built for the fans — single-tap controls, deep career mode.",
    longDescription:
      "Cricket Legends is a love letter to the sport that unites a nation. Drive the on-drive, nail the yorker, climb the leaderboards. Features a full career mode, local tournaments, and quick-play matches you can finish on a chai break.",
    image: "/images/games/phantom-protocol.svg",
    releaseDate: "Q3 2026",
    tags: ["Sports", "Cricket", "Multiplayer", "Mobile"],
  },
  {
    id: "star-weaver",
    title: "Star Weaver",
    genre: "Puzzle",
    platform: ["Mobile", "Web"],
    status: "released",
    description: "A relaxing constellation-building puzzle game with gentle music and over 60 hand-crafted levels.",
    longDescription:
      "Star Weaver is a meditative puzzle game where you connect stars to form constellations across a dreamy night sky. 60+ hand-crafted levels, gentle lo-fi soundtrack, and a soothing pace. Perfect for unwinding anywhere, any time.",
    image: "/images/games/neon-abyss-reborn.svg",
    releaseDate: "2025-08-14",
    rating: 4.7,
    tags: ["Puzzle", "Relaxing", "Casual", "Indie"],
  },
  {
    id: "chowk-chase",
    title: "Chowk Chase",
    genre: "Hyper-Casual",
    platform: ["Mobile"],
    status: "released",
    description: "Weave through the busy chowks of Lahore in this snappy, one-touch hyper-casual title.",
    longDescription:
      "Chowk Chase is a snack-sized hyper-casual game set in a stylized version of Lahore. Dodge rickshaws, grab chaat, and rack up high scores in 60-second runs. Simple, charming, and endlessly replayable.",
    image: "/images/games/shadow-realm-online.svg",
    releaseDate: "2025-04-22",
    rating: 4.5,
    tags: ["Hyper-Casual", "Mobile", "Fun", "Local Flavor"],
  },
  {
    id: "project-skyline",
    title: "Project Skyline",
    genre: "Adventure",
    platform: ["PC"],
    status: "coming-soon",
    description: "A story-driven adventure set in a reimagined, mystical Hunza valley. Our most ambitious project yet.",
    longDescription:
      "Project Skyline is a narrative-driven adventure set in a mystical reimagining of the Hunza valley. Explore ancient ruins, meet memorable characters, and uncover a story about family, memory, and the mountains. In early development — stay tuned.",
    image: "/images/games/arcane-realms-vr.svg",
    releaseDate: "TBA",
    tags: ["Adventure", "Narrative", "Indie", "PC"],
  },
];

export const categories = ["All", "Endless Runner", "Simulation", "Sports", "Puzzle", "Hyper-Casual", "Adventure"];
