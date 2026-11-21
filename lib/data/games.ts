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
  storeUrl?: string;
  // Full game-page article: blank-line blocks, "## " headings, "- " lists,
  // "[text](url)" links (same format as blog posts).
  content?: string;
  // Answers support "[text](url)" links.
  faqs?: { question: string; answer: string }[];
  // Blog post id of the launch post; its screenshots are shown on the game page.
  launchPost?: string;
}

export const games: Game[] = [
  {
    id: "football-league-27",
    title: "Football League 27",
    genre: "Sports",
    platform: ["Mobile"],
    status: "released",
    description: "Penalty shootouts vs smart AI — climb levels, win tournaments, earn coins!",
    longDescription:
      "Step up to the spot in Football League 27, the penalty shootout game where every shot and every save decides the match. Take your kick, watch the cinematic replay, then switch sides and defend the goal as the AI strikes back. Climb the league tiers, earn coins and take the trophy. Available on Android.",
    image: "/images/blog/football-league-27/feature-graphic.jpg",
    releaseDate: "2026-11-14",
    trailer: "vlpD_Yt_rSc",
    tags: ["Sports", "Football", "Penalty Shootout", "Android"],
    storeUrl: "https://play.google.com/store/apps/details?id=com.Pgh.Football.league",
    launchPost: "football-league-27",
    content: `## How to play

A match in Football League 27 is a penalty shootout, and you play both halves of it. Each round you take a turn as the striker, then swap gloves and stand in goal while the AI takes its shot. The player with more goals at the end of the shootout wins the match.

- As the striker, swipe to shoot. The direction, length and speed of your swipe decide where the ball goes and how hard it is struck.
- After a good strike, enjoy the cinematic replay of your goal.
- As the goalkeeper, drag to dive. Pick a side, time your dive and stretch for the ball.
- Outscore the AI over the shootout to win the match and move on.

## Tips for scoring more penalties

- Aim for the corners. Shots placed close to the posts are much harder for the keeper to reach than shots down the middle.
- Do not always go for maximum power. A fast shot that misses the target scores nothing, so accuracy comes first.
- Mix up your placement. If you keep shooting to the same side, the keeper will start guessing right.
- In goal, watch the run-up. Read the striker before you commit, and do not dive too early.

## Climbing the league

Football League 27 is built around progression. You start in the entry league and work your way up through the tiers on the level map. Each tier has an in-game coin entry fee: pay to play, and beat your rival to double your coins. Higher tiers bring tougher opponents and bigger rewards, so manage your coins wisely as you push for the trophy.

## Pick your country and team

Before you step up, choose the country you want to represent and check your team lineup. Then it is just you, the ball and the goal.

## Who is it for?

Football League 27 is made for anyone who loves the tension of a penalty shootout. A match takes only a few minutes, so it is ideal for short breaks. It is fully single-player, so there is no matchmaking and no waiting for opponents: you can play against the AI whenever you like.

Read the [launch announcement](/blog/football-league-27) for more about the game, or [download Football League 27 on Google Play](https://play.google.com/store/apps/details?id=com.Pgh.Football.league).`,
    faqs: [
      {
        question: "Is Football League 27 a full football match or penalties only?",
        answer:
          "It focuses on penalty shootouts. You alternate between taking penalties as the striker and saving them as the goalkeeper, round after round, against an AI opponent.",
      },
      {
        question: "How do I score more often?",
        answer:
          "Aim for the corners, close to the posts, and do not always use full power. Accuracy matters more than speed, and changing your placement stops the keeper from reading you.",
      },
      {
        question: "Can I play against friends online?",
        answer:
          "No. Football League 27 is single-player. You play against the AI, so there is no matchmaking or waiting for opponents.",
      },
      {
        question: "What are coins used for?",
        answer:
          "Each league tier has an in-game coin entry fee. Winning a match doubles your coins, which lets you enter higher tiers with bigger rewards.",
      },
      {
        question: "Where can I download it?",
        answer:
          "Football League 27 is available for Android on [Google Play](https://play.google.com/store/apps/details?id=com.Pgh.Football.league).",
      },
    ],
  },
  {
    id: "village-farm-2027",
    title: "Village Farm 2027",
    genre: "Simulation",
    platform: ["Mobile"],
    status: "released",
    description: "Farm life 3D: grow crops, milk cows, drive tractors & bullock carts.",
    longDescription:
      "Run your own village farm from sunrise to sunset. Plough fields, grow wheat, corn and tomatoes, milk cows, look after pigs, chickens and goats, drive a bullock cart or a red tractor, and sell your harvest to build your dream farm. Free to play on Android.",
    image: "/images/blog/village-farm/feature-graphic.jpg",
    releaseDate: "2026-10-29",
    tags: ["Simulation", "Farming", "3D", "Android"],
    storeUrl: "https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US",
    launchPost: "village-farm-2027",
    content: `## How to play

Village Farm 2027 puts you in charge of a farm in a 3D village. Your day is a cycle of work: prepare the land, grow and harvest crops, care for your animals, and sell what you produce. The coins you earn go back into upgrading your farm.

- Plough your fields and sow seeds for crops such as wheat, corn and tomatoes.
- Water your crops, wait for them to grow, then harvest them.
- Milk cows, collect eggs and look after your pigs, chickens and goats.
- Load hay bales and harvested produce, and haul them across the farm.
- Sell your crops and produce to earn coins.
- Spend coins to upgrade and grow your farm.

## Tractor or bullock cart?

Getting around the farm is half the fun. You can drive a powerful red tractor or take a classic bullock cart, the traditional way farm goods have moved through villages for generations. Both are used to carry your harvest and hay to where they need to go.

## Village missions

You are never left wondering what to do next. The game gives you farming missions, and waypoint markers guide you to the right field, barn or road. Completing missions keeps your farm running and helps you progress.

## A living countryside

The farm is set in open countryside with golden wheat fields, red barns and rivers, all in 3D. It is designed to feel calm and familiar, inspired by village life across South Asia.

## Tips for new farmers

- Follow the waypoint markers. They lead you straight to your next task.
- Keep your animals looked after. Milk and eggs are a steady source of produce to sell.
- Reinvest your coins. Upgrading your farm early makes later work faster.
- Use the tractor for bigger loads and longer trips across the farm.

## Free to play

Village Farm 2027 is free to download on Android. The game shows ads, which you can remove with a one-time No Ads purchase. An internet connection is required to play.

Read the [launch announcement](/blog/village-farm-2027) for more, or [download Village Farm 2027 on Google Play](https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US).`,
    faqs: [
      {
        question: "Which crops can I grow?",
        answer: "You can grow crops including wheat, corn and tomatoes, then harvest and sell them for coins.",
      },
      {
        question: "Which animals are on the farm?",
        answer: "You look after cows, pigs, chickens and goats. You can milk the cows and collect eggs from the chickens.",
      },
      {
        question: "Can I play offline?",
        answer: "No. An internet connection is required to play Village Farm 2027.",
      },
      {
        question: "Is it free?",
        answer:
          "Yes, it is free to download. The game shows ads, and a one-time No Ads purchase removes them. [Get it on Google Play](https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US).",
      },
    ],
  },
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
    content: `## The idea

Endless runners are one of the most popular kinds of mobile game, and for good reason: they are easy to pick up, quick to play and hard to put down. With Horizon Runner, we want to keep everything that makes the genre fun while giving it a look and feel you have not seen before.

## What we are building

- Hand-painted environments inspired by South Asian culture, rather than the generic cities and temples common in the genre
- Dynamic weather that changes the mood of a run
- Tight one-finger controls, designed so you can play comfortably with one hand
- Gems to collect and characters to unlock
- Levels built from mixed, procedurally arranged sections, so no two runs are quite the same

## Built mobile-first

Horizon Runner is being designed to run smoothly on modest Android phones, not just flagships. Our post on [why we build mobile-first](/blog/mobile-first-development) explains how we approach performance, controls and short play sessions.

## Current status

Horizon Runner is in active development. Details may change as we playtest and refine the game. Follow our [blog](/blog) for news, and we will announce the release there first.`,
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
    content: `## The idea

Our studio sits in Old Anarkali, Lahore, in the middle of one of the city's oldest bazaars. Every day we see how a market works up close: shopkeepers who know their regulars by name, the back-and-forth of bargaining, and stalls that change their stock with the seasons. Bazaar Tycoon turns that world into a cozy management game.

## What we are building

- Start small with a single chai stall
- Grow it, step by step, into a bustling marketplace
- Hire shopkeepers to run your stalls
- Haggle with customers to find the right price
- Stock seasonal goods and react to what customers want
- Shape a small neighborhood economy as your bazaar grows

## Cozy, not stressful

Many tycoon games are about optimizing every second. Bazaar Tycoon is meant to be relaxed, warm and funny, a game you can enjoy at your own pace. We wrote about why we build games around local settings in [Making Games That Feel Like Home](/blog/cultural-games).

## Current status

Bazaar Tycoon is in active development for mobile and PC. Features may change as we playtest. Follow our [blog](/blog) for updates.`,
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
    content: `## The idea

In Pakistan, cricket is everywhere: in stadiums, on television, and in every street and lane where kids play with a tennis ball and a taped bat. Cricket Legends is our attempt to capture that love of the game on a phone.

## What we are planning

- Physics-driven batting and bowling, so shots and deliveries feel right
- Simple single-tap controls that are easy to learn
- A career mode to follow over time
- Local tournaments
- Quick-play matches short enough to finish on a chai break
- Leaderboards to compare your results

## Current status

Cricket Legends is on our roadmap and has not been released yet. Plans may change as development begins in earnest. Follow our [blog](/blog) for news, and check out [Football League 27](/games/football-league-27), our sports game that is available now.`,
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
    content: `## How to play

Each level of Star Weaver shows a night sky scattered with stars. Your goal is to connect them to reveal the constellation hidden in the pattern. Early levels introduce the idea gently, and later levels add new twists that ask you to slow down and think.

## Features

- More than 60 hand-crafted levels, each designed by hand rather than generated
- A gentle lo-fi soundtrack made to sit in the background while you play
- A calm, unhurried pace
- Simple touch controls
- Playable on mobile and in the web browser

## Made for unwinding

Star Weaver is designed for the moments when you want your mind busy but calm: the end of a long day, a commute, or a short break. Play for two minutes or an hour. There is no need to rush.

## Tips

- Look at the whole sky before you start connecting stars. The shape often becomes clear once you step back.
- If you get stuck, take a break and come back. Fresh eyes solve a lot of puzzles.
- Play with sound on. The music is a big part of the experience.

Read the [Star Weaver launch notes](/blog/star-weaver-launch) for the story behind the game and what we learned making it.`,
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
    content: `## How to play

Chowk Chase drops you into a busy chowk, one of the crowded intersections Lahore is famous for. You control everything with a single touch. Weave through the traffic, avoid the rickshaws, and grab chaat along the way. Every run lasts 60 seconds, and your goal is to beat your high score.

## Features

- One-touch controls anyone can pick up instantly
- 60-second runs, perfect for short breaks
- A stylized, colorful take on Lahore's streets
- Rickshaws to dodge and chaat to collect
- High scores to chase, run after run

## Why a chowk?

Anyone who has crossed a busy chowk in Lahore knows it is its own kind of game. We turned that everyday chaos into something fun and light-hearted. You can read more about why we build games around local settings in [Making Games That Feel Like Home](/blog/cultural-games).

## Tips

- Watch the gaps, not the vehicles. Look for the open space you want to move into.
- Do not chase every snack. Grabbing one item is not worth crashing into a rickshaw.
- Stay calm near the end. The last few seconds are where high scores are won or lost.`,
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
    content: `## The idea

The Hunza valley in northern Pakistan is one of the most striking places in the world, surrounded by some of the highest mountains on Earth. Project Skyline imagines a mystical version of that landscape as the setting for a personal, story-driven adventure.

## What we are exploring

- A narrative adventure for PC
- A world inspired by Hunza, reimagined with a touch of mystery
- Ancient ruins to explore
- Memorable characters to meet
- A story about family, memory and the mountains

## Our most ambitious project

Project Skyline is the largest game we have planned, and it is in early development. As a small studio, we are being careful to scope it realistically, an approach we explain in [Scoping an Indie Game Realistically](/blog/scoping-indie-games). There is no release date yet, and the details above may change.

Follow our [blog](/blog) to hear about Project Skyline as it takes shape.`,
  },
];

export const categories = ["All", "Endless Runner", "Simulation", "Sports", "Puzzle", "Hyper-Casual", "Adventure"];
