import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  head: () => ({
    meta: [
      { title: "Thank you — PageCraft" },
      { name: "description", content: "Pick a time to talk with the PageCraft team." },
      { property: "og:title", content: "Thank you — PageCraft" },
      { property: "og:description", content: "Pick a time to talk with the PageCraft team." },
      { property: "og:url", content: "/thank-you" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: "Thank you — PageCraft" },
      { name: "twitter:description", content: "Pick a time to talk with the PageCraft team." },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
});

function ThankYouPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-5 pb-20 pt-16 lg:pt-20">
        <div className="text-center">
          <h1 className="text-[36px] font-bold leading-tight text-[#1E1B4B] sm:text-5xl">
            Got it. Now let's talk for 15 minutes.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#475569]">
            Pick a time below that works for you. We'll come prepared with ideas for your site.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[#1E1B4B]/10 bg-white shadow-sm">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/itspagecraft"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>

        <p className="mt-8 text-center text-sm text-[#475569]">
          Prefer email? Reply directly to your confirmation email or write to{" "}
          <a
            href="mailto:itspagecraft@gmail.com"
            className="font-medium text-[#1E1B4B] underline-offset-4 hover:text-[#F97316] hover:underline"
          >
            itspagecraft@gmail.com
          </a>
          .
        </p>
      </section>
    </SiteLayout>
  );
}
