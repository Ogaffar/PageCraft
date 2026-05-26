import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the 7-day timeline actually work?",
    a: "Once you send us the basics on day 1 (business info, menu or services, photos), we design and build over days 2 to 5. You get one round of feedback in that window. Day 7 your site is live with hosting and domain configured.",
  },
  {
    q: "What is included in the monthly fee?",
    a: "Hosting, ongoing updates (new menu items, seasonal hours, photo swaps), and additions like new pages or contact forms. No surprise costs.",
  },
  {
    q: "What is the 24-month plan?",
    a: "Instead of paying $499.99 upfront for design, you pay $214.99 per month for 24 months. Setup is free, design is free, hosting is free, updates are free. After 24 months you can continue at the standard $199.99 per month rate or end the contract.",
  },
  {
    q: "What happens if I cancel early on the 24-month plan?",
    a: "Standard cancellation terms apply, published in your service agreement (see /terms). Generally, early termination requires paying out the remaining months. We work with genuine hardship cases.",
  },
  {
    q: "Can I bring my own domain?",
    a: "Yes. If you already own one, we configure it. If you don't, we help you buy one.",
  },
  {
    q: "What if I don't like the first design?",
    a: "One round of revisions is included. If you genuinely don't like the direction after the first build, we start over once.",
  },
  {
    q: "Do you do e-commerce or just informational sites?",
    a: "Our core product is informational and lead-generation sites for service businesses. We integrate basic ordering and booking (Toast, Square, OpenTable, Calendly, Vagaro, etc.). For full custom e-commerce, contact us to scope.",
  },
  {
    q: "Where are you based?",
    a: "Chapel Hill, North Carolina. We work with clients across the US.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F5F5F4] py-16 lg:py-28">
      <div className="mx-auto max-w-[720px] px-5 lg:px-8">
        <h2 className="text-center text-[28px] font-bold leading-tight text-[#1E1B4B] sm:text-[36px] lg:text-[44px]">
          Questions, answered.
        </h2>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                  isOpen ? "border-[#F97316]/30 shadow-sm" : "border-[#1E1B4B]/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#FAFAF9] sm:px-6"
                >
                  <span className="text-base font-semibold text-[#1E1B4B] sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#F97316] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pr-8 text-base leading-relaxed text-[#475569] sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
