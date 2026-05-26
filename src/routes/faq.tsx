import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Faq } from "@/components/site/Faq";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — PageCraft website plans, timeline, and pricing" },
      {
        name: "description",
        content:
          "Answers to common questions about the PageCraft 7-day build, monthly plans, cancellations, domains, and what's included.",
      },
      { property: "og:title", content: "PageCraft FAQ" },
      {
        property: "og:description",
        content:
          "How the 7-day build works, what's included monthly, and how the plans differ.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
});

function FaqPage() {
  return (
    <SiteLayout>
      <Faq />
      <FinalCTA />
    </SiteLayout>
  );
}