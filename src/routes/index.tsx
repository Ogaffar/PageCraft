import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { FoundersMini } from "@/components/site/FoundersMini";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PageCraft — Business websites built in 7 days | Restaurants, salons, hotels, spas" },
      {
        name: "description",
        content:
          "PageCraft builds beautifully crafted, mobile-first websites for service businesses. From $214.99 a month, no setup fee. Live in 7 days.",
      },
      { property: "og:title", content: "PageCraft — Business websites built in 7 days" },
      {
        property: "og:description",
        content:
          "Beautifully crafted, mobile-first websites for restaurants, salons, hotels, and spas. From $214.99 a month. Live in 7 days.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: "PageCraft — Business websites built in 7 days" },
      {
        name: "twitter:description",
        content:
          "Beautifully crafted, mobile-first websites for restaurants, salons, hotels, and spas.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "PageCraft",
          description:
            "Productized web design studio building beautifully crafted, mobile-first websites for service businesses in 7 days.",
          url: "/",
          image: "/og-image.jpg",
          telephone: "+1-919-903-4170",
          email: "itspagecraft@gmail.com",
          priceRange: "$199-$215/month",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chapel Hill",
            addressRegion: "NC",
            addressCountry: "US",
          },
          areaServed: "US",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website hosting" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ongoing website updates" } },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <FoundersMini />
    </SiteLayout>
  );
}
