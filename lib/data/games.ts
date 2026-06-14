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
    id: "neon-abyss-reborn",
    title: "Neon Abyss: Reborn",
    genre: "Action RPG",
    platform: ["PC", "PlayStation", "Xbox"],
    status: "released",
    description: "Dive into a cyberpunk underworld and battle gods in this explosive action roguelite.",
    longDescription:
      "Neon Abyss: Reborn is a frenetic action roguelite with deep RPG elements set in a dark cyberpunk universe. Descend into the ever-changing dungeons, collect an insane amount of items, and battle against the New Gods.",
    image: "/images/games/neon-abyss-reborn.svg",
    releaseDate: "2024-03-15",
    rating: 4.8,
    tags: ["Action", "Roguelite", "Cyberpunk", "Co-op"],
  },
  {
    id: "stellar-conquest",
    title: "Stellar Conquest",
    genre: "Strategy",
    platform: ["PC", "Mobile"],
    status: "released",
    description: "Command galactic fleets, forge alliances, and conquer the universe in real-time.",
    longDescription:
      "A massive multiplayer real-time strategy game set across thousands of star systems. Build your empire, research technologies, and lead your civilization to galactic dominance.",
    image: "/images/games/stellar-conquest.svg",
    releaseDate: "2024-07-20",
    rating: 4.6,
    tags: ["Strategy", "Multiplayer", "Sci-Fi", "4X"],
  },
  {
    id: "shadow-realm-online",
    title: "Shadow Realm Online",
    genre: "MMORPG",
    platform: ["PC", "Mac"],
    status: "released",
    description: "A vast open world MMORPG with dynamic seasons, guild wars, and endless progression.",
    longDescription:
      "Shadow Realm Online offers a breathtaking fantasy world with millions of players. Experience dynamic world events, deep crafting systems, and the most competitive guild warfare ever created.",
    image: "/images/games/shadow-realm-online.svg",
    releaseDate: "2023-11-10",
    rating: 4.7,
    tags: ["MMORPG", "Fantasy", "Open World", "Guild Wars"],
  },
  {
    id: "velocity-ultra",
    title: "Velocity Ultra",
    genre: "Racing",
    platform: ["Mobile", "PC", "Console"],
    status: "released",
    description: "Hyper-speed futuristic racing with magnetic tracks and zero-gravity zones.",
    longDescription:
      "Velocity Ultra redefines racing games with anti-gravity vehicles, magnetic tracks, and environmental hazards. Race across 60 tracks set on exotic alien worlds with full cross-platform multiplayer.",
    image: "/images/games/velocity-ultra.svg",
    releaseDate: "2024-01-28",
    rating: 4.5,
    tags: ["Racing", "Futuristic", "Multiplayer", "Anti-Gravity"],
  },
  {
    id: "phantom-protocol",
    title: "Phantom Protocol",
    genre: "Tactical Shooter",
    platform: ["PC", "Console"],
    status: "coming-soon",
    description: "A next-gen tactical shooter where every bullet, every decision, every second counts.",
    longDescription:
      "Phantom Protocol is a hyper-realistic tactical shooter featuring advanced AI, destructible environments, and squad-based gameplay. Every mission is a high-stakes operation with permanent consequences.",
    image: "/images/games/phantom-protocol.svg",
    releaseDate: "Q2 2025",
    tags: ["Tactical", "Shooter", "Realistic", "Squad"],
  },
  {
    id: "arcane-realms-vr",
    title: "Arcane Realms VR",
    genre: "VR Adventure",
    platform: ["VR", "PC"],
    status: "coming-soon",
    description: "Step into a breathtaking fantasy world with full VR immersion and magic combat.",
    longDescription:
      "Arcane Realms VR is a groundbreaking virtual reality adventure that places you directly inside a living, breathing fantasy world. Cast real spells with hand-tracking, explore ancient dungeons, and forge bonds with legendary creatures.",
    image: "/images/games/arcane-realms-vr.svg",
    releaseDate: "Q3 2025",
    tags: ["VR", "Fantasy", "Adventure", "Magic"],
  },
];

export const categories = ["All", "Action RPG", "Strategy", "MMORPG", "Racing", "Shooter", "VR Adventure"];
