import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Games",
  description: "Android games from PlayGame Horizon: farming, football, match-3 puzzles and carrom.",
  path: "/games",
});

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
