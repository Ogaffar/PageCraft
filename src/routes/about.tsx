import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Founders } from "@/components/site/Founders";
import { FeaturedDemo } from "@/components/site/FeaturedDemo";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About PageCraft — Chapel Hill web design studio" },
      {
        name: "description",
        content:
          "Meet Gaffar and Yejide, the founders of PageCraft. A small Chapel Hill studio building beautifully crafted websites for service businesses.",
      },
      { property: "og:title", content: "About PageCraft" },
      {
        property: "og:description",
        content:
          "A small Chapel Hill studio building beautifully crafted websites for service businesses.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <Founders />
      <FeaturedDemo />
      <FinalCTA />
    </SiteLayout>
  );
}