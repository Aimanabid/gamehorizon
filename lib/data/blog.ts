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
  // True when the gallery images are phone-shaped (9:16) screenshots.
  galleryPortrait?: boolean;
  cta?: { label: string; href: string };
  // Answers support "[text](url)" links.
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "football-league-27",
    title: "Football League 27 Is Out Now on Google Play — Penalty Shootout Game",
    excerpt:
      "Take the penalty, make the save, win the trophy. Our new football penalty shootout game is live on Google Play for Android.",
    content: `Football League 27 is a penalty shootout game where every shot and every save decides the match. Take your kick, watch the cinematic replay, then switch sides and defend the goal as the AI strikes back. Outscore your rival and take the trophy. It is out now on Google Play for Android.

## How the penalty shootout works

- Alternate between striker and goalkeeper every round
- Take your shot: aim, power and placement
- Enjoy the cinematic replay of your strike
- Dive, stretch and save as the keeper
- Outscore the AI to win the shootout

## Climb the league tiers

Start at the entry league and climb your way up through the ranks. Each tier has an in-game coin entry: pay to play, win to earn. Beat your rival to double your coins, then move up to higher tiers with bigger rewards.

## Be the striker. Be the keeper.

Half the game is scoring and the other half is stopping. Read your opponent's body language, pick the right side and pull off the match-winning save.

## Simple controls

Swipe to shoot and drag to dive. Easy to learn, hard to master. One perfectly placed shot into the top corner feels unbeatable.

## Single-player focused

No matchmaking and no waiting for opponents. It is just you against the AI, round after round, whenever you want to play.

If you love football penalty games, soccer shootouts and goalkeeper games, this one is for you. [Download Football League 27 on Google Play](https://play.google.com/store/apps/details?id=com.Pgh.Football.league) and step up to the spot today.`,
    category: "Launches",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2026-11-14",
    readTime: 3,
    image: "/images/blog/football-league-27/feature-graphic.jpg",
    tags: ["Launch", "Football", "Penalty Shootout", "Android"],
    featured: true,
    coverImage: "/images/blog/football-league-27/feature-graphic.jpg",
    cta: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.Pgh.Football.league",
    },
    galleryPortrait: true,
    gallery: [
      { src: "/images/blog/football-league-27/screenshot-1.jpg", alt: "Football League 27 penalty kick: aiming a shot at the target zones in the goal" },
      { src: "/images/blog/football-league-27/screenshot-2.jpg", alt: "Football League 27 goalkeeper diving to save a penalty" },
      { src: "/images/blog/football-league-27/screenshot-3.jpg", alt: "Football League 27 free kick against a wall of defenders" },
      { src: "/images/blog/football-league-27/screenshot-4.jpg", alt: "Football League 27 level map with stars and a trophy" },
      { src: "/images/blog/football-league-27/screenshot-5.jpg", alt: "Football League 27 goalkeeper stretching to stop the ball" },
      { src: "/images/blog/football-league-27/screenshot-6.jpg", alt: "Football League 27 striker attempting an acrobatic kick in front of goal" },
      { src: "/images/blog/football-league-27/screenshot-7.jpg", alt: "Football League 27 select country screen" },
      { src: "/images/blog/football-league-27/screenshot-8.jpg", alt: "Football League 27 team lineup screen" },
    ],
    faqs: [
      {
        question: "What is Football League 27?",
        answer:
          "Football League 27 is a single-player penalty shootout game for Android. You take penalties as the striker, then defend the goal as the keeper, against smart AI opponents. See the full [Football League 27 game page](/games/football-league-27) for details.",
      },
      {
        question: "Which platforms can I play it on?",
        answer:
          "Football League 27 is available for Android phones and tablets. [Download it on Google Play](https://play.google.com/store/apps/details?id=com.Pgh.Football.league).",
      },
      {
        question: "Is there online multiplayer?",
        answer:
          "No. Football League 27 is single-player. There is no matchmaking and no waiting for opponents, you play against the AI whenever you want.",
      },
      {
        question: "How does progression work?",
        answer:
          "You start in the entry league and climb through the tiers. Each tier has an in-game coin entry, and beating your rival wins you coins so you can move up to higher tiers with bigger rewards.",
      },
      {
        question: "How do the controls work?",
        answer:
          "Swipe to shoot, choosing your aim, power and placement. As the goalkeeper, drag to dive and make the save.",
      },
      {
        question: "Who makes Football League 27?",
        answer:
          "It is made by PlayGame Horizon, a small game studio in Lahore, Pakistan. Learn more [about the studio](/about) or see [our other games](/games).",
      },
    ],
  },
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
    faqs: [
      {
        question: "What is Village Farm 2027?",
        answer:
          "Village Farm 2027 is a free 3D farm simulator for Android. You run your own village farm: plough fields, grow crops, look after animals, drive a tractor or bullock cart, and sell your harvest. See the full [Village Farm 2027 game page](/games/village-farm-2027) for details.",
      },
      {
        question: "Is Village Farm 2027 free to play?",
        answer:
          "Yes. It is a free farming game and costs nothing to download from [Google Play](https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US). The game shows ads, and you can remove them with a one-time No Ads purchase.",
      },
      {
        question: "Which platforms can I play this farming game on?",
        answer:
          "Village Farm 2027 is a farming game for Android phones and tablets. [Download it on Google Play](https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US).",
      },
      {
        question: "Do I need an internet connection to play?",
        answer:
          "Yes, an internet connection is required to play Village Farm 2027.",
      },
      {
        question: "What can I do in this farm simulator?",
        answer:
          "Grow wheat, corn and tomatoes, milk cows, collect eggs, care for pigs, chickens and goats, carry hay bales, complete village missions and upgrade your farm. It combines crop farming, animal farm gameplay and tractor farming in one village life game.",
      },
      {
        question: "Can I drive a tractor in Village Farm 2027?",
        answer:
          "Yes. You can drive a powerful red tractor as well as a classic bullock cart to haul your harvest around the farm. Browse the [screenshots](/press) to see them in action.",
      },
      {
        question: "How do I remove ads from the game?",
        answer:
          "Use the one-time No Ads purchase inside the game. If you have trouble with a purchase, [contact us](/contact) and we will help.",
      },
      {
        question: "Who makes Village Farm 2027?",
        answer:
          "It is made by PlayGame Horizon, a small game studio in Lahore, Pakistan. Learn more [about the studio](/about) or see [our other games](/games).",
      },
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
