import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Service Agreements — PageCraft" },
      {
        name: "description",
        content:
          "High-level summary of PageCraft service agreement terms for Pay As You Go and 24-Month Plan.",
      },
      { property: "og:title", content: "Service Agreements — PageCraft" },
      {
        property: "og:description",
        content:
          "High-level summary of PageCraft service agreement terms for Pay As You Go and 24-Month Plan.",
      },
      { property: "og:url", content: "/terms" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: "Service Agreements — PageCraft" },
      {
        name: "twitter:description",
        content:
          "High-level summary of PageCraft service agreement terms for Pay As You Go and 24-Month Plan.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

const payg = [
  "$499.99 one-time setup fee, fully earned upon start of design work.",
  "$199.99 per month for hosting and updates, billed monthly.",
  "Month-to-month, cancel any time with 30 days written notice.",
  "Setup fee is non-refundable.",
];

const plan24 = [
  "$0 setup fee.",
  "$214.99 per month for 24 months, total $5,159.76.",
  "Early termination before 24 months may incur a fee equal to a portion of remaining months.",
  "After 24 months, converts to month-to-month at the standard $199.99 rate unless renewed or canceled.",
  "Hardship buy-out available in defined cases (such as business closure).",
];

function TermsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[36px] font-bold leading-tight text-[#1E1B4B] sm:text-5xl">
            Service Agreements
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#475569]">
            Our service agreements are being finalized. Below is a high-level summary of what they
            will cover. The full executed agreement will be provided before any client commitment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <PlanCard title="Pay As You Go Plan" items={payg} />
          <PlanCard title="24-Month Plan" items={plan24} highlighted />
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#1E1B4B]/10 bg-[#F5F5F4] p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#475569]">
            Both plans include
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[#1E1B4B]">
            Hosting, ongoing updates, mobile-first responsive design, domain configuration, and
            Google Business sync.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#475569]">
          Full written agreements with complete terms will be provided to all prospective clients
          prior to signing. For questions, email{" "}
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

function PlanCard({
  title,
  items,
  highlighted,
}: {
  title: string;
  items: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-7 shadow-sm sm:p-8 ${
        highlighted ? "border-[#F97316]/40" : "border-[#1E1B4B]/10"
      }`}
    >
      <h2 className="text-xl font-bold text-[#1E1B4B]">{title} summary</h2>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-sm leading-relaxed text-[#1E1B4B]">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
