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
  // True for a regular 16:9 video; otherwise the trailer is a 9:16 Short.
  trailerLandscape?: boolean;
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
    id: "dessert-crush",
    title: "Dessert Crush: Match 3 Puzzle",
    genre: "Puzzle",
    platform: ["Mobile"],
    status: "released",
    description: "Swap and match cakes, cupcakes and cookies in our sweet new match-3 puzzle!",
    longDescription:
      "Dessert Crush: Match 3 Puzzle is a colorful puzzle game full of cakes, cookies, cupcakes and other tasty treats. Swap neighboring desserts to line up three or more of a kind, clear them from the board and move on to the next level. Available on Android.",
    image: "/images/blog/dessert-crush/feature-graphic.jpg",
    releaseDate: "2026-11-26",
    trailer: "EbdfjK8raK0",
    trailerLandscape: true,
    tags: ["Puzzle", "Match 3", "Casual", "Android"],
    storeUrl: "https://play.google.com/store/apps/details?id=com.pgh.dessert.crush.puzzel&hl=en&gl=US",
    launchPost: "dessert-crush",
    content: `## How to play

- Swipe to swap neighboring desserts.
- Match three or more of the same treat to clear them from the board.
- Plan your moves and clear each puzzle.
- Move on to the next level on the map.

## Combos and boosters

Matching more than the basics pays off. Set off dessert combos that sweep across the board, and use boosters to get through the trickier layouts.

## Sweet challenges

Boards come in many shapes, with blocks to blast along the way. Look at the whole board before you move, because the best match is not always the first one you see.

## Tips

- Look for matches of four or more before settling for three.
- Try matches near the bottom of the board. Falling desserts can create extra matches.
- Save your boosters for the levels where you really need them.
- Work on the blocks early so you have more room later.

## Free to download

Dessert Crush is free to download on Android. The game contains ads and offers in-app purchases.

Read the [launch announcement](/blog/dessert-crush) for more, or [download Dessert Crush on Google Play](https://play.google.com/store/apps/details?id=com.pgh.dessert.crush.puzzel&hl=en&gl=US).`,
    faqs: [
      {
        question: "What kind of game is Dessert Crush?",
        answer: "It is a match-3 puzzle game. You swap neighboring desserts to line up three or more of the same kind and clear them from the board.",
      },
      {
        question: "Is Dessert Crush free?",
        answer: "It is free to download. The game contains ads and offers in-app purchases.",
      },
      {
        question: "What age rating does it have?",
        answer: "It is rated Everyone on Google Play. Note that it has ads and in-app purchases.",
      },
      {
        question: "Where can I download it?",
        answer: "Dessert Crush is available for Android on [Google Play](https://play.google.com/store/apps/details?id=com.pgh.dessert.crush.puzzel&hl=en&gl=US).",
      },
    ],
  },
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
];

export const categories = ["All", "Simulation", "Sports", "Puzzle"];
