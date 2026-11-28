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
  // YouTube video ID (Shorts are 9:16) shown as an embedded player.
  videoId?: string;
  // True for a regular 16:9 video rather than a Short.
  videoLandscape?: boolean;
  cta?: { label: string; href: string };
  // Answers support "[text](url)" links.
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "dessert-crush-guide",
    title: "Dessert Crush Guide: How to Plan Better Moves",
    excerpt:
      "Read the goal, watch your move count and set up bigger chains. A practical guide to clearing more Dessert Crush levels.",
    content: `Swapping the first match you see will carry you through an easy board. Later boards ask for more thought. This guide covers habits that help in [Dessert Crush](/games/dessert-crush) and in match-3 puzzles generally.

## Read the top of the screen first

Before your first swap, look at the panel above the board: the goal, the number of moves left and the star meter next to your score. The goal tells you what actually finishes the level. A move that scores points but does nothing for the goal still costs you a move.

## Spend moves on the goal

If a level asks you to collect a particular dessert, look for matches that include it, or that bring others of its kind into line. When your moves run low, stop building elaborate setups and take whatever moves the goal forward.

## Start low when you can

Desserts fall to fill the gaps you leave. A match near the bottom of the board shifts the pieces above it, which gives you a good chance of free follow-up matches. A match at the very top moves very little.

## Use high matches to stay in control

The reverse is useful too. When you have spotted a promising arrangement near the bottom and do not want to disturb it, make your next match higher up, so the pieces you are saving stay where they are.

## Look for four or more

Before settling for three, scan for a line of four or five, or for two lines that cross. Bigger matches are worth setting up when you have moves to spare.

## Mind the shape of the board

Many boards are not simple squares. Gaps, narrow arms and separate sections limit which pieces can ever meet. Corners and thin sections are the hardest places to make a match, so take an opportunity there when one appears.

## Deal with blocks early

Frozen pieces and other blocks take up space and cut down your options. Clearing them early usually makes every later move easier. If you leave them to the end, you may have few moves left to reach them.

## Save boosters for the right moment

The buttons under the board are your boosters, each with a limited count. It is tempting to use one as soon as you are stuck. First check whether an ordinary swap elsewhere would change the board enough to open up the spot you want. Keep boosters for the situation a normal move cannot solve, such as a single awkward piece standing between you and the goal.

## When a level keeps beating you

If a level beats you, change one thing on the next attempt: try clearing the blocks first, or start from the bottom, and see which helps. A short break often helps as well.

Dessert Crush is free to download and contains ads and in-app purchases. [Get it on Google Play](https://play.google.com/store/apps/details?id=com.pgh.dessert.crush.puzzel&hl=en&gl=US).`,
    category: "Guides",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2026-11-28",
    readTime: 2,
    image: "/images/blog/dessert-crush/feature-graphic.jpg",
    tags: ["Guide","Match 3","Puzzle"],
    coverImage: "/images/blog/dessert-crush/feature-graphic.jpg",
    galleryPortrait: true,
    gallery: [
      { src: "/images/blog/dessert-crush/screenshot-6.jpg", alt: "Dessert Crush level screen showing the score, moves left, goal and boosters" },
      { src: "/images/blog/dessert-crush/screenshot-7.jpg", alt: "Dessert Crush level with frozen blocks beside the main board" },
      { src: "/images/blog/dessert-crush/screenshot-2.jpg", alt: "Dessert Crush boosters moving across a shaped puzzle board" },
    ],
  },
  {
    id: "football-league-27-penalty-guide",
    title: "Football League 27 Penalty Guide: Score More, Save More",
    excerpt:
      "Placement, power and patience. How to take better penalties and make more saves in Football League 27.",
    content: `A shootout in [Football League 27](/games/football-league-27) has two halves: you shoot, then you keep goal. Winning means being good enough at both. Here is how to approach each one.

## Shooting: get the swipe right

Your swipe sets the direction, length and speed of the shot. Because all three come from one motion, it pays to practise a swipe you can repeat. Change one thing at a time, so you can tell what made the ball go where it did.

## Aim away from the keeper

A shot down the middle gives the keeper the least to do. The areas close to the posts take longer to reach. The top corners are the hardest of all to save, but they also leave the smallest margin for error.

## Accuracy before power

A hard shot that misses the goal is worth nothing. Start with controlled shots that land on target, then add speed once you can place the ball reliably.

## Mix up your placement

If you shoot to the same side every time, you become easy to read. Vary the side and the height. A change after two or three similar shots is a simple way to stay unpredictable.

## Goalkeeping: watch before you dive

As the keeper you drag to dive. A common mistake is committing too early, which leaves the other side of the goal open. Watch the striker's run-up, wait, then move.

## Pick a side with intent

When you cannot read the shot, choose a side and commit to it fully. A half-hearted dive covers neither the middle nor the corner.

## Think about the whole shootout

One miss or one conceded goal does not decide a match. Rushing the next shot to make up for it often leads to a second mistake. Treat every kick on its own.

## Manage your coins

Each league tier has an in-game coin entry fee, and beating your rival doubles your coins. Higher tiers bring tougher opponents. Move up when you are winning comfortably where you are, and try not to spend nearly everything on one entry. Keeping some coins back gives you another chance if a match goes against you.

## Use the level map

The level map shows the stars you earned on each stage as you work towards the final. If a new stage feels too hard, take a moment to look at what went wrong: your placement, your power or the timing of your dives.

Football League 27 is a single-player game for Android. [Download it on Google Play](https://play.google.com/store/apps/details?id=com.Pgh.Football.league).`,
    category: "Guides",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2026-11-28",
    readTime: 2,
    image: "/images/blog/football-league-27/feature-graphic.jpg",
    tags: ["Guide","Football","Penalty Shootout"],
    coverImage: "/images/blog/football-league-27/feature-graphic.jpg",
    galleryPortrait: true,
    gallery: [
      { src: "/images/blog/football-league-27/screenshot-1.jpg", alt: "Aiming a penalty in Football League 27 with target rings in the goal" },
      { src: "/images/blog/football-league-27/screenshot-2.jpg", alt: "Goalkeeper diving to reach a shot in Football League 27" },
      { src: "/images/blog/football-league-27/screenshot-4.jpg", alt: "Football League 27 level map with star ratings and a final" },
    ],
  },
  {
    id: "village-farm-beginners-guide",
    title: "Village Farm 2027 Beginner's Guide: Your First Days on the Farm",
    excerpt:
      "Where to go, what to do first and how to keep your farm earning. A starting guide for new Village Farm 2027 players.",
    content: `[Village Farm 2027](/games/village-farm-2027) gives you fields to work, animals to look after and loads to move. This guide suggests an order to learn them in.

## Follow the waypoint marker

The blue marker points to where you need to go and shows how far away it is. In your first sessions, let it lead. It takes you around the farm and shows you where things are.

## Prepare the field

Crops start with the soil. Plough the field before you sow. Take your time on the turns and work in rows, so you do not keep covering ground you have already done.

## Grow your crops

Once the field is ready, sow your seeds, water them and wait for them to grow. Wheat, corn and tomatoes are among the crops you can grow.

## Look after the animals

Cows can be milked and chickens give eggs, and there are pigs and goats to care for too. Keeping the cattle yard swept is part of the work as well.

## Choose how to haul

You have two ways to move hay and harvest: the bullock cart and the red tractor. The cart is the traditional choice and part of the village feel. The tractor suits bigger loads and longer trips. Try both and use whichever fits the job.

## A simple routine to start with

- Check the marker for your current mission.
- Harvest anything that is ready.
- Plough and sow the empty fields, so something is always growing.
- Visit the animals.
- Load up and haul your produce, then sell it.

## Spend coins with a plan

Selling crops and produce earns coins, and coins upgrade your farm. Decide what you are saving for before you spend. An upgrade that helps with a job you do constantly is usually worth more than one you will rarely notice.

## Good to know before you start

The game is free to download and shows ads, which you can remove with a one-time No Ads purchase. You need an internet connection to play. [Get Village Farm 2027 on Google Play](https://play.google.com/store/apps/details?id=com.pgh.village.farm.game2027&hl=en&gl=US).`,
    category: "Guides",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2026-11-28",
    readTime: 2,
    image: "/images/blog/village-farm/feature-graphic.jpg",
    tags: ["Guide","Farming","Simulation"],
    coverImage: "/images/blog/village-farm/feature-graphic.jpg",
    gallery: [
      { src: "/images/blog/village-farm/screenshot-8.jpg", alt: "Ploughing a field with an ox in Village Farm 2027" },
      { src: "/images/blog/village-farm/screenshot-4.jpg", alt: "Hauling round hay bales on a bullock cart towards a waypoint marker" },
      { src: "/images/blog/village-farm/screenshot-2.jpg", alt: "Milking a cow in the cattle yard in Village Farm 2027" },
    ],
  },
  {
    id: "dessert-crush",
    title: "Dessert Crush: Match 3 Puzzle Is Out Now on Google Play",
    excerpt:
      "Swap, match and crush your way through cakes, cupcakes and cookies. Our new match-3 puzzle game is live on Android.",
    content: `Dessert Crush: Match 3 Puzzle is our new puzzle game, full of cakes, cookies, cupcakes and other tasty treats. Swap neighboring desserts, line up three or more of the same kind and keep the sweet chain going. It is out now on Google Play for Android.

## How to play

- Swipe to swap neighboring desserts
- Match three or more of the same treat to clear them
- Plan your moves and clear each puzzle board
- Move on to the next level

## What is on the menu

- Classic match-3 gameplay with a dessert twist
- Dessert combos and boosters for the tricky moments
- Blocks to blast and boards in many shapes
- A colorful level map to travel through
- Simple one-finger controls for all ages

## Play at your own pace

Dessert Crush is easy to pick up and a relaxing way to spend a few minutes. Play one level on a short break, or keep going and see how far along the map you can get.

## Free to download

The game is free to download and is rated Everyone. It contains ads and offers in-app purchases.

If you enjoy match-3 games, sweet puzzles or a relaxing dessert puzzle to unwind with, this one is for you. [Download Dessert Crush on Google Play](https://play.google.com/store/apps/details?id=com.pgh.dessert.crush.puzzel&hl=en&gl=US) and start matching today.`,
    category: "Launches",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2026-11-26",
    readTime: 2,
    image: "/images/blog/dessert-crush/feature-graphic.jpg",
    tags: ["Launch", "Match 3", "Puzzle", "Android"],
    featured: true,
    coverImage: "/images/blog/dessert-crush/feature-graphic.jpg",
    cta: {
      label: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.pgh.dessert.crush.puzzel&hl=en&gl=US",
    },
    videoId: "EbdfjK8raK0",
    videoLandscape: true,
    galleryPortrait: true,
    gallery: [
      { src: "/images/blog/dessert-crush/screenshot-1.jpg", alt: "Dessert Crush: a cupcake combo blasting across the board" },
      { src: "/images/blog/dessert-crush/screenshot-2.jpg", alt: "Dessert Crush: fish boosters swimming across the puzzle board" },
      { src: "/images/blog/dessert-crush/screenshot-3.jpg", alt: "Dessert Crush: waffle and chocolate blocks around a match-3 board" },
      { src: "/images/blog/dessert-crush/screenshot-4.jpg", alt: "Dessert Crush: a shaped challenge level with cakes and candies" },
      { src: "/images/blog/dessert-crush/screenshot-5.jpg", alt: "Dessert Crush: a burst booster clearing desserts in the dessert world" },
      { src: "/images/blog/dessert-crush/screenshot-6.jpg", alt: "Dessert Crush: level screen with score, moves, goal and boosters" },
      { src: "/images/blog/dessert-crush/screenshot-7.jpg", alt: "Dessert Crush: a level with frozen desserts and a strawberry booster" },
      { src: "/images/blog/dessert-crush/screenshot-8.jpg", alt: "Dessert Crush: level map through a candy village with a castle" },
    ],
    faqs: [
      {
        question: "What is Dessert Crush: Match 3 Puzzle?",
        answer: "It is a dessert-themed match-3 puzzle game for Android. See the full [Dessert Crush game page](/games/dessert-crush) for details.",
      },
      {
        question: "Is it free?",
        answer: "It is free to download from [Google Play](https://play.google.com/store/apps/details?id=com.pgh.dessert.crush.puzzel&hl=en&gl=US). The game contains ads and offers in-app purchases.",
      },
      {
        question: "Who makes Dessert Crush?",
        answer: "It is made by PlayGame Horizon, a small game studio in Lahore, Pakistan. Learn more [about the studio](/about) or see [our other games](/games).",
      },
    ],
  },
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
    videoId: "vlpD_Yt_rSc",
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
    content: `PlayGame Horizon is a small game development studio in Old Anarkali, Lahore. We make games for mobile, PC and the web, and we take on a limited number of client projects alongside our own titles. This post is a proper hello: who we are, what we care about, and what we are working on.

## Who we are

PlayGame Horizon started in 2024 and is registered with the Securities and Exchange Commission of Pakistan (SECP) as PlayGame Horizon (SMC-Private) Limited. We are deliberately small. Every person on the team works directly on the games we ship, and nobody is hidden behind layers of management.

Our office sits in one of the oldest and busiest neighborhoods in Lahore. Step outside and you are in the middle of the bazaar: shopkeepers calling out prices, rickshaws squeezing through lanes that were never designed for them, chai being poured from a height. That energy finds its way into our work, sometimes literally, as you will see in our games.

## What "player-first" means to us

Plenty of studios say they are player-first. For us it comes down to a few practical rules we try to hold ourselves to on every project:

- Respect the player's time. Sessions should feel complete, whether you have two minutes or twenty.
- Respect the player's device. Many people in Pakistan and across South Asia play on budget Android phones, so our games need to run well on them, not only on flagships.
- Respect the player's wallet. Monetization should never block the fun. If a game shows ads, players should have a fair way to remove them.
- Polish the basics. Responsive controls, readable text and clear feedback matter more than a long feature list.

These rules shape our design decisions long before we write any code. You can read more about the technical side in our post on [why we build mobile-first](/blog/mobile-first-development).

## Our games

*Updated November 2026.* Three of our games are out on Google Play for Android: [Village Farm 2027](/games/village-farm-2027), a 3D farm life game; [Football League 27](/games/football-league-27), a penalty shootout game; and [Dessert Crush](/games/dessert-crush), a match-3 puzzle. The full list is always on our [games page](/games).

## Why build games in Pakistan

Pakistan has a large, young population, strong engineering universities, and a growing community of developers and artists who already work with studios around the world. What has been missing is more studios that make original games here, with their own voice, rather than only doing outsourced work for others.

We think there is real value in games that feel rooted in a place. Bazaars, chowks, cricket and mountain valleys are settings that millions of players recognize and that the rest of the world rarely sees in games. We wrote more about this in [Making Games That Feel Like Home](/blog/cultural-games).

## Working with clients

Alongside our own titles, we offer full-cycle game development: design, art, engineering, QA and store release, with mobile as our main focus and PC, web and VR work where it fits. We keep our client list short on purpose, so each project gets the attention it needs. If you have a game idea, take a look at our [services](/services) or [get in touch](/contact).

## What this blog is for

This blog is our studio journal. We will use it to share launch notes, honest lessons from production, and how we approach design and hiring. Some posts will be about our games. Others, like our guide to [scoping an indie game realistically](/blog/scoping-indie-games), are meant to be useful to anyone making games, whether you work with us or not.

If you want to build games with us, our [careers page](/careers) lists open roles, and our post on [hiring game developers in Pakistan](/blog/hiring-pakistan-game-devs) explains what we look for. Thanks for reading, and welcome to PlayGame Horizon.`,
    category: "Company News",
    author: "PlayGame Horizon Team",
    authorRole: "Studio",
    date: "2025-10-01",
    readTime: 4,
    image: "/og-default.jpg",
    tags: ["Studio", "Introduction", "Pakistan"],
    featured: true,
  },
  {
    id: "mobile-first-development",
    title: "Why We Build Mobile-First at PlayGame Horizon",
    excerpt:
      "Mobile is where most of our players are. Here's how we approach mobile-first game development without compromising on polish.",
    content: `For most players in Pakistan and across South Asia, the phone is the gaming device. Many of those phones are mid-range or budget Android devices with limited memory, modest GPUs and storage that is nearly full. If a game only runs well on a flagship, it quietly shuts out a big share of the people we most want to reach.

That is why we build mobile-first. It does not mean "mobile only". It means mobile constraints are the starting point for design and engineering, and other platforms are added from there. Here is what that looks like in practice.

## Start with a target device, not a target resolution

Before a project starts, we pick a low-end reference phone that represents a real slice of our audience. The game has to run smoothly on that device, and every milestone build is tested on it, not just on whatever phone the developer happens to own.

Having a concrete device changes conversations. "Can we add this effect?" becomes "What does this effect cost on the reference phone?" That question is much easier to answer honestly.

## Set a performance budget early

We agree on budgets at the start of a project and track them throughout:

- Frame rate: a stable 30 FPS on the reference device at minimum, with 60 FPS where the game benefits from it. Stable matters more than high; players notice stutter far more than they notice a lower cap.
- Memory: a hard ceiling on texture and audio memory, because Android will close a game that uses too much in the background.
- Download size: smaller installs get more downloads, especially for players on limited data plans. We compress textures and audio, remove unused assets and split optional content where we can.
- Battery and heat: a phone that gets hot in the hand is a phone that gets put down. Capping frame rate on menus and pausing heavy work when it is not needed helps a lot.

## Engineering habits that keep games smooth

Most of our games are built in Unity. A few habits make the biggest difference on weaker hardware:

- Avoid creating garbage every frame. Frequent memory allocations trigger garbage collection, which shows up as small but noticeable hitches. We reuse objects with pooling and avoid allocating in update loops.
- Keep draw calls low. Shared materials, texture atlases and batching keep the GPU from doing unnecessary work.
- Use mobile-friendly texture compression and sensible texture sizes. A 4K texture on a five-inch screen is wasted memory.
- Profile on the device. The editor on a powerful PC hides problems that are obvious on a real phone.

## Design for thumbs and short sessions

Mobile-first is as much about design as code. Players often hold the phone in one hand, play in short bursts, and get interrupted constantly by messages and calls.

- Controls should work with one thumb where possible, with large touch targets kept away from screen edges and notches.
- Every session should feel complete. A run, a level or a match should fit into a couple of minutes.
- The game should handle interruptions gracefully, saving progress and pausing when the app goes to the background.
- Text must be readable on small screens, and important information should never rely on color alone.

A penalty shootout in [Football League 27](/games/football-league-27) takes only a few minutes for exactly this reason: it should be easy to finish a match while waiting for chai.

## Plan for unreliable connections

Mobile networks can be slow or patchy, and data is not free for everyone. We keep network calls small, retry gracefully when they fail, and make sure a lost connection never wipes a player's progress. Where a game needs to be online, we tell players clearly instead of letting it fail silently.

## Monetization that respects players

Most mobile games are free, and ads or in-app purchases pay for development. That is fine, but how it is done matters. We avoid ads that interrupt gameplay at frustrating moments, we never hide progress behind aggressive paywalls, and when a game shows ads we offer a simple way to remove them. Players who feel respected stay longer, and they recommend the game to friends.

## Polish still matters

Building for modest hardware is not an excuse for a game that looks cheap. Good art direction often matters more than raw graphical power. A clear visual style, readable silhouettes, satisfying sound and responsive feedback make a game feel premium on any phone.

## Then bring it to other platforms

Once a game feels great on a budget phone, scaling up is the easy direction. Higher resolutions, extra effects and larger screens can be added for tablets, PC and the web. Going the other way, squeezing a PC-first game onto a budget phone, is much harder and usually ends with compromises players can feel.

If you are planning a mobile game and want a team that thinks this way, take a look at our [mobile game development services](/services#mobile) or [contact us](/contact).`,
    category: "Development",
    author: "PlayGame Horizon Team",
    authorRole: "Engineering",
    date: "2025-09-15",
    readTime: 4,
    image: "/images/blog/football-league-27/feature-graphic.jpg",
    tags: ["Mobile", "Development", "Design"],
    featured: true,
  },
  {
    id: "scoping-indie-games",
    title: "Scoping an Indie Game Realistically (From Someone Who Learned the Hard Way)",
    excerpt:
      "The most common mistake small studios make isn't a lack of skill — it's over-scoping. Here's how we size our projects to actually ship.",
    content: `Ask any small studio why a game never shipped, and the honest answer is rarely "we were not skilled enough". Far more often, the plan was simply too big for the team, the budget and the time available. Like most teams, our first plans were much larger than what we could realistically build. This post covers the habits we now use to size projects so they actually get finished.

## Why scope grows out of control

Scope creep rarely comes from one bad decision. It comes from many small, reasonable-sounding ones: one more level, a second game mode, a crafting system, online multiplayer "because players expect it". Each addition looks small on its own. Together they can double or triple the work.

Content is the hidden multiplier. One new enemy type is not just a model. It is art, animation, sound, behavior code, balancing, bugs and testing across every level where it appears. Systems interact with each other, and every interaction is another place for bugs to hide.

## Find the core loop first

Before planning features, we write down the core loop in one or two sentences: what the player does over and over, and why it is fun. For Football League 27 it is "take a penalty, then save one, and outscore your rival". For Dessert Crush it is "swap desserts to match three and clear the board".

Then we build a rough prototype of only that loop, with placeholder art. If the loop is not fun in a grey-box prototype, more features will not save it. If it is fun, we know exactly what every other feature needs to support.

## Build a vertical slice before full production

Once the loop works, we build a vertical slice: one small part of the game at close to final quality. It includes final-style art, audio, UI and a level or two. The slice tells us how long one unit of content really takes to make, which is the single most useful number for planning.

If one polished level took three weeks, a plan with 50 levels is not a plan. It is a wish. Better to discover that now than six months in.

## Estimate honestly, then add a buffer

Developers tend to estimate the time to make something work, not the time to make it finished. Finished includes polish, edge cases, device testing, bug fixing and store submission. We break work into small tasks, estimate each one, and then add a buffer. For new types of work we have never done before, the buffer is larger.

## Keep a "must, should, could" list

Every feature idea goes into one of three columns:

- Must have: the game does not work or is not fun without it.
- Should have: clearly improves the game, and we will do it if time allows.
- Could have: nice ideas that belong in an update, a sequel or nowhere.

Only the "must" column goes into the first release plan. When new ideas come up during production, and they always do, they go into the list instead of straight into the build. This keeps the team excited about ideas without derailing the schedule.

## Cut early, not late

Cutting a feature early costs almost nothing. Cutting it late means throwing away art, code and testing that are already done. We review scope at every milestone and ask a simple question: if we had to ship in half the remaining time, what would we keep? Whatever falls outside that answer is the first thing to cut if the schedule slips.

## Watch out for the expensive features

Some features are much more expensive than they look, especially for a small team:

- Online multiplayer, which brings servers, cheating, latency and ongoing costs.
- Open worlds and large amounts of handmade content.
- Complex progression and economy systems that need constant balancing.
- Heavy narrative with branching choices and lots of dialogue.
- Supporting many platforms at launch instead of one.

None of these are off-limits, but each one should be a deliberate decision with time set aside for it, not something added along the way.

## Lock features before the finish line

At a set point before launch we declare a feature freeze. After that, the team only fixes bugs, improves performance and polishes what already exists. It is tempting to keep adding things up to the last day, but the final weeks are when quality is won or lost.

## Ship, then grow

A small game that ships teaches you more than a big game that does not. Real players show you which parts they love and which they ignore, and updates let you build on what works. Many great games launched small and grew over time.

Scoping well is not about thinking small. It is about choosing the version of your idea that your team can finish and polish. If you are planning a game and want help sizing it realistically, our team offers [full-cycle game development](/services#development), and we are always happy to [talk through a project](/contact).`,
    category: "Development",
    author: "PlayGame Horizon Team",
    authorRole: "Design",
    date: "2025-08-28",
    readTime: 4,
    image: "/og-default.jpg",
    tags: ["Indie", "Production", "Scoping"],
    featured: true,
  },
  {
    id: "hiring-pakistan-game-devs",
    title: "Hiring Game Developers in Pakistan: What We Look For",
    excerpt:
      "There's incredible talent in Pakistan. Here are the qualities and skills we prioritize when growing a small, focused studio team.",
    content: `Pakistan has no shortage of talented people who want to make games. Every year, universities across the country produce strong computer science and design graduates, and many self-taught developers and artists build impressive work from home. The challenge for a small studio is not finding talent. It is finding the right fit for a team where every person's work shows up directly in the games we ship.

Here is what we look for when we hire, and how you can put your best foot forward if you want to work with us.

## Shipped work beats perfect CVs

The single strongest signal for us is that you have finished something. It does not need to be big or commercial. A small game on Google Play, a game jam entry, a polished prototype on itch.io, or a mod you released all show the same thing: you can take an idea from start to finish, including the boring last 10% that most projects never get through.

Degrees and certificates are welcome, but we will always look at your work first. Some of the best developers we meet learned mostly through building their own projects.

## Strong fundamentals

For programmers, we care about fundamentals more than knowing every engine feature. That means:

- Solid C# and object-oriented programming, since most of our work is in Unity
- Understanding how game loops, physics and rendering work at a basic level
- Writing code that other people can read and change
- Debugging patiently and methodically instead of guessing
- Awareness of performance, especially on low-end mobile devices

For artists and designers, we look for a clear eye for readability, consistency and style, plus an understanding of the technical limits of mobile games.

## Ownership

In a small team, there is nobody to hand problems to. We look for people who notice when something is broken and fix it or flag it, who follow a task through to the end, and who care whether the feature actually works for players, not just whether the ticket is closed.

## Clear, honest communication

Most problems in game production are communication problems. We value people who say "I'm stuck" early, who give realistic estimates, and who can explain their work simply. Good written English helps, since documentation, store listings and client communication are in English, but we care far more about clarity than perfect grammar.

## Curiosity and the ability to learn

Tools and platforms change constantly. We would rather hire someone who learns quickly and enjoys figuring things out than someone who knows one tool and does not want to move beyond it. In interviews, we often ask what you have learned recently and how you went about it.

## Care for players

We make [player-first games](/blog/introducing-playgame-horizon), so we look for people who play games thoughtfully and can explain why something feels good or frustrating. You do not need to be a hardcore gamer, but you should be curious about what makes games work.

## How to make your application stand out

- Send a portfolio link first. A short list of projects, each with a sentence about your role, is better than a long CV.
- Show your process. Screenshots of early prototypes, sketches or a short write-up of a problem you solved tell us a lot.
- Be specific. "I built the enemy AI and the save system" is much more useful than "I worked on a game".
- Keep it focused. Pick your three best pieces rather than everything you have ever made.
- Tell us why you want to work at a small studio. The work is different from a big company, and we want people who will enjoy it.

## Advice for students and beginners

If you are still learning, start building now. Join game jams, such as Global Game Jam, or online jams on itch.io. Make tiny games and finish them. Share your work and ask for feedback. Pakistan's game development community is growing quickly, and showing up with finished projects is the fastest way into it.

## Join us

We are a small team in Old Anarkali, Lahore, working on our own games and selected client projects. If this sounds like a place you would enjoy, check our [careers page](/careers) for current openings, or [get in touch](/contact) and tell us about your work.`,
    category: "Company News",
    author: "PlayGame Horizon Team",
    authorRole: "People",
    date: "2025-07-20",
    readTime: 4,
    image: "/og-default.jpg",
    tags: ["Hiring", "Pakistan", "Culture"],
  },
  {
    id: "cultural-games",
    title: "Making Games That Feel Like Home",
    excerpt:
      "Why we lean into local flavor, from village farms to busy bazaars, rather than mimicking Western or Japanese studio aesthetics.",
    content: `Walk through Old Anarkali in Lahore on any evening and you will find more game ideas than you could build in a lifetime. Rickshaws weaving through impossible gaps. Shopkeepers bargaining with customers who have been coming for twenty years. Kids playing cricket in a lane with a tennis ball and a taped bat. Yet when you look at the games played across Pakistan, almost none of them look or feel like this.

Most games are set in American cities, European fantasy kingdoms or Japanese-inspired worlds. Those games can be wonderful, but they mean players here rarely see their own streets, food, sports and stories on screen. We think that is a missed opportunity, both creatively and commercially.

## Why local flavor matters

There are three reasons we lean into settings that feel like home.

First, recognition. When players see something familiar, a chai stall, a truck painted in bright patterns, a crowded chowk at rush hour, they feel an instant connection. That emotional hook is hard to create any other way.

Second, standing out. App stores are flooded with games that look alike. A game set in a Lahore bazaar is immediately different from the thousandth generic runner. Distinctiveness helps players remember a game and talk about it.

Third, authenticity. We know these places. We grew up with the food, the sports and the rhythm of daily life here. Writing what you know produces richer, more believable worlds than imitating a style we only know from other games.

## How this shows up in our games

Local flavor is not one decoration we add at the end. It shapes setting, mechanics and tone. [Village Farm 2027](/games/village-farm-2027) is the clearest example: its countryside is inspired by village life across South Asia, and alongside a red tractor you can drive a traditional bullock cart to haul your harvest.

## Universal mechanics, local wrapping

A game set in Lahore still has to be fun for someone who has never been to Pakistan. Our approach is to keep the core mechanics universal, things like dodging, building, managing and exploring, and let the setting provide the personality.

Anyone can understand "grow a crop and sell it". A player from South Asia may also recognize the bullock cart from real life. A player from somewhere else gets a setting they have not seen as often. Both can enjoy the game, for slightly different reasons.

## Avoiding stereotypes

Leaning into culture comes with responsibility. It is easy to reduce a place to clichés: dusty streets, sad music, the same few images the outside world already associates with Pakistan. We try to avoid that by:

- Showing everyday life with warmth and humor, not as something exotic
- Using real reference: photos, sketches and walks through the neighborhoods we depict
- Paying attention to small details, such as signage, colors, clothing and food, that make a place feel lived-in
- Asking people from the places we depict whether something feels right

## Details that make it feel real

The difference between a setting that feels authentic and one that feels like a costume usually lies in the details. Pakistani truck art, with its bold colors and patterns, is a rich visual language. Urdu signage and typography give a street instant character. Sounds, like the call of a chaiwala, the buzz of a rickshaw engine or the noise of a cricket crowd, do a lot of quiet work. We collect these details carefully and build them into art direction from the start.

## A bigger opportunity

Pakistan has a huge, young, mobile-first audience, and South Asia as a whole is one of the largest gaming markets in the world. Games that speak to that audience directly, in settings and humor they recognize, have room to grow. At the same time, players everywhere are curious about places they have not seen in games before.

We believe the best way to build a studio with a real identity is to make the games only we can make. For us, that means games that feel like home. If you share that vision, as a player, a partner or a future teammate, we would love to [hear from you](/contact).`,
    category: "Design",
    author: "PlayGame Horizon Team",
    authorRole: "Creative",
    date: "2025-06-10",
    readTime: 4,
    image: "/images/blog/village-farm/feature-graphic.jpg",
    tags: ["Design", "Culture", "Identity"],
  },
];
