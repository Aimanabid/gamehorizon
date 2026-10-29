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
  coverImage?: string;
  gallery?: { src: string; alt: string }[];
  cta?: { label: string; href: string };
}

export const blogPosts: BlogPost[] = [
  {
    id: "village-farm-2027",
    title: "Village Farm 2027 Is Out Now on Google Play",
    excerpt:
      "Grow crops, milk cows, drive tractors and bullock carts in our new 3D farm life game. Free to play on Android.",
    content: `Village Farm 2027 is a 3D farm life game where you run your own village farm from sunrise to sunset. Grow crops, take care of your animals, drive tractors and bullock carts, sell your harvest and build your dream farm. It is free to download on Google Play.

## Live the farmer's life

- Plough your fields, sow seeds and grow wheat, corn, tomatoes and more
- Milk cows, collect eggs and look after cows, pigs, chickens and goats
- Drive a classic bullock cart or a powerful red tractor
- Carry hay bales and haul your harvest across the farm
- Sell your crops and produce to earn coins
- Build and upgrade your farm to make it your dream farm

## Explore a living village

Walk through golden wheat fields, red barns, rivers and open countryside in detailed 3D graphics. Follow the waypoint markers to your next farming mission and keep your village farm running.

## Game features

- Realistic 3D farming simulator gameplay
- Farm animals: cows, pigs, chickens and goats
- Tractor farming and bullock cart farming
- Crop farming: plant, water, harvest and sell
- Village missions to complete
- Easy controls for all ages
- Beautiful countryside environment

## Free to play

Village Farm 2027 is free to download and play. The game shows ads, and you can remove them at any time with the one-time No Ads purchase. An internet connection is required to play.

If you love farming games, farm simulators, tractor games, animal farm games or village life games, this one is for you. [Download Village Farm 2027 on Google Play](https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US) and start your farming adventure today!`,
    category: "Launches",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2026-10-29",
    readTime: 3,
    image: "/images/blog/village-farm/feature-graphic.jpg",
    tags: ["Launch", "Farming", "Android"],
    featured: true,
    coverImage: "/images/blog/village-farm/feature-graphic.jpg",
    cta: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US",
    },
    gallery: [
      { src: "/images/blog/village-farm/screenshot-1.jpg", alt: "Walking through golden wheat fields past the scarecrow" },
      { src: "/images/blog/village-farm/screenshot-2.jpg", alt: "Village Farm 2027 gameplay screenshot 2" },
      { src: "/images/blog/village-farm/screenshot-3.jpg", alt: "Village Farm 2027 gameplay screenshot 3" },
      { src: "/images/blog/village-farm/screenshot-4.jpg", alt: "Village Farm 2027 gameplay screenshot 4" },
      { src: "/images/blog/village-farm/screenshot-5.jpg", alt: "Village Farm 2027 gameplay screenshot 5" },
      { src: "/images/blog/village-farm/screenshot-6.jpg", alt: "Village Farm 2027 gameplay screenshot 6" },
      { src: "/images/blog/village-farm/screenshot-7.jpg", alt: "Village Farm 2027 gameplay screenshot 7" },
      { src: "/images/blog/village-farm/screenshot-8.jpg", alt: "Village Farm 2027 gameplay screenshot 8" },
      { src: "/images/blog/village-farm/screenshot-9.jpg", alt: "Village Farm 2027 gameplay screenshot 9" },
    ],
  },
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
