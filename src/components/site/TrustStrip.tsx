import { ArrowUpRight, ChefHat, Hotel, Scissors, Sparkles, type LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  name: string;
  prop: string;
  metricLabel: string;
  metricValue: string;
};

const cards: Card[] = [
  {
    icon: ChefHat,
    name: "Restaurants",
    prop: "Menus that make people hungry and reservations that stick.",
    metricLabel: "Timeline",
    metricValue: "7d to launch",
  },
  {
    icon: Scissors,
    name: "Salons",
    prop: "Booking flows that don't lose appointments mid-stream.",
    metricLabel: "Access",
    metricValue: "24/7 bookings",
  },
  {
    icon: Hotel,
    name: "Hotels",
    prop: "Room pages that fill rooms and showcase amenities beautifully.",
    metricLabel: "Priority",
    metricValue: "100% mobile",
  },
  {
    icon: Sparkles,
    name: "Spas",
    prop: "Treatment lists that build trust and calm before arrival.",
    metricLabel: "Cost",
    metricValue: "$0 setup fee",
  },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-8 rounded-t-[2rem] bg-white pt-20 pb-20 sm:-mt-10 sm:rounded-t-[2.5rem] sm:pt-24 sm:pb-28 lg:-mt-14 lg:rounded-t-[3.5rem] lg:pt-32 lg:pb-36 shadow-[0_-30px_60px_-40px_rgba(30,27,75,0.35)]">
      <div className="mx-auto max-w-6xl px-6 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#F97316]">
            Who we build for
          </span>
          <h2 className="mt-4 text-[34px] font-bold leading-[1.05] tracking-[-0.025em] text-[#1E1B4B] sm:text-[38px] lg:text-[56px] xl:text-[64px]">
            Built for service businesses that{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#F97316]">show up</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-2.5 rounded bg-[#F97316]/15 lg:h-3.5"
              />
            </span>{" "}
            for their customers.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-[#475569] sm:text-base lg:mt-6 lg:max-w-2xl lg:text-[19px]">
            Purpose-built layouts, copy, and booking flows tuned to the way real customers
            actually pick where to eat, stay, and book.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 sm:gap-6 lg:mt-24 lg:grid-cols-4 lg:gap-7">
          {cards.map((c, i) => (
            <article
              key={c.name}
              className={`group relative flex cursor-default flex-col rounded-3xl border border-[#1E1B4B]/8 bg-[#FAFAF9]/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#F97316]/30 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(249,115,22,0.25)] sm:p-7 lg:p-8 ${
                i % 2 === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E1B4B] text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[#F97316] sm:h-12 sm:w-12 sm:rounded-xl lg:h-14 lg:w-14 lg:rounded-2xl">
                  <c.icon className="h-6 w-6 sm:h-5 sm:w-5 lg:h-6 lg:w-6" strokeWidth={1.75} />
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-[#1E1B4B]/25 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F97316] sm:h-4 sm:w-4"
                  strokeWidth={2}
                />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#1E1B4B] sm:mt-7 sm:text-lg lg:mt-8 lg:text-[22px]">{c.name}</h3>
              <p className="mt-2 flex-grow text-[15px] leading-relaxed text-[#475569] sm:text-sm lg:mt-3 lg:text-[15px]">{c.prop}</p>
              <div className="mt-6 flex items-center justify-between border-t border-[#1E1B4B]/8 pt-4 sm:mt-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94a3b8] lg:text-[11px]">
                  {c.metricLabel}
                </span>
                <span className="text-xs font-bold uppercase tracking-wide text-[#F97316] lg:text-[13px]">
                  {c.metricValue}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-[#94a3b8] sm:mt-20 lg:mt-24">
          Also serving cafes, studios, resorts, and other service businesses.
        </p>
      </div>
    </section>
  );
}
