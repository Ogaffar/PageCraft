import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — PageCraft | $214.99/month, no setup fee" },
      {
        name: "description",
        content:
          "Simple pricing for PageCraft websites. Two plans. Both include hosting, updates, and care. No surprise fees.",
      },
      { property: "og:title", content: "Pricing — PageCraft | $214.99/month, no setup fee" },
      {
        property: "og:description",
        content: "Two simple plans. Both include hosting, updates, and care. No surprise fees.",
      },
      { property: "og:url", content: "/pricing" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: "Pricing — PageCraft" },
      {
        name: "twitter:description",
        content: "Two simple plans. Both include hosting, updates, and care.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

const payAsYouGo = [
  "Custom website design and build",
  "Hosting included",
  "Mobile-first responsive design",
  "Updates and additions as you need them",
  "Domain configuration",
  "Google Business sync",
];

const plan24 = [
  "Everything in Pay As You Go",
  "No upfront cost ($499.99 design fee waived)",
  "Locked-in monthly rate for 24 months",
  "Priority access to add-ons (SEO, Google Ads) at preferred rate",
];

function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#10B981]/10">
        <Check className="h-3.5 w-3.5 text-[#10B981]" strokeWidth={3} />
      </span>
      <span className="text-base leading-relaxed text-[#1E1B4B]">{children}</span>
    </li>
  );
}

function PricingPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-16 sm:px-8 lg:px-14 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[36px] font-bold leading-tight text-[#1E1B4B] sm:text-5xl lg:text-[56px]">
            Simple pricing. No surprises.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#475569]">
            Two ways to work with us. Both include hosting, updates, and care.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Pay As You Go */}
          <div className="flex h-full flex-col rounded-2xl border border-[#1E1B4B]/10 bg-white p-7 shadow-sm sm:p-9">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#475569]">
              Pay As You Go
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-[#1E1B4B] lg:text-6xl">$199.99</span>
              <span className="text-base font-medium text-[#475569]">/month</span>
            </div>
            <p className="mt-2 text-sm text-[#475569]">
              Plus <span className="font-semibold text-[#1E1B4B]">$499.99</span> one-time setup fee
            </p>

            <ul className="mt-7 space-y-3 border-t border-[#1E1B4B]/10 pt-7">
              {payAsYouGo.map((f) => (
                <CheckRow key={f}>{f}</CheckRow>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                to="/demo-form"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F97316] px-6 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.5)] transition-all hover:bg-[#FB8533] hover:scale-[1.02]"
              >
                Start with Pay As You Go
              </Link>
              <p className="mt-4 text-center text-sm text-[#475569]">
                Best if you want flexibility and no long commitment.
              </p>
              <p className="mt-2 text-center text-xs">
                <Link
                  to="/terms"
                  className="text-[#475569] underline-offset-4 hover:text-[#F97316] hover:underline"
                >
                  View the Pay As You Go terms
                </Link>
              </p>
            </div>
          </div>

          {/* 24-Month Plan */}
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-[#F97316] bg-white p-7 shadow-[0_20px_50px_-20px_rgba(249,115,22,0.4)] sm:p-9">
            <div className="absolute right-0 top-0 origin-top-right">
              <div className="rounded-bl-2xl bg-[#F97316] px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                Most Popular
              </div>
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#475569]">
              24-Month Plan
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-[#F97316] lg:text-6xl">$214.99</span>
              <span className="text-base font-medium text-[#475569]">/month</span>
            </div>
            <p className="mt-2 text-sm text-[#475569]">
              For 24 months · <span className="font-semibold text-[#10B981]">$0 setup fee</span>
            </p>

            <ul className="mt-7 space-y-3 border-t border-[#1E1B4B]/10 pt-7">
              {plan24.map((f) => (
                <CheckRow key={f}>{f}</CheckRow>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                to="/demo-form"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F97316] px-6 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.6)] transition-all hover:bg-[#FB8533] hover:scale-[1.02]"
              >
                Choose the 24-Month Plan
              </Link>
              <p className="mt-4 text-center text-sm text-[#475569]">
                Best if you want the lowest barrier to launching. No upfront design fee.
              </p>
              <p className="mt-2 text-center text-xs">
                <Link
                  to="/terms"
                  className="text-[#475569] underline-offset-4 hover:text-[#F97316] hover:underline"
                >
                  View the 24-Month Plan terms
                </Link>
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-[#475569]">
          All plans include hosting, regular updates, and platform care. No surprise fees.
          Standard contract terms apply to the 24-month plan.
        </p>
      </section>
    </SiteLayout>
  );
}
