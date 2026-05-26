import { ArrowUpRight, ChefHat, Hotel, Scissors, Sparkles, type LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  name: string;
  prop: string;
  metricLabel: string;
  metricValue: string;
  bg: string;
  iconBg: string;
  accentBg: string;
  metricCls: string;
};

const cards: Card[] = [
  {
    icon: ChefHat,
    name: "Restaurants",
    prop: "Menus that make people hungry and reservations that stick.",
    metricLabel: "Timeline",
    metricValue: "7d to launch",
    bg: "bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]",
    iconBg: "bg-[#F97316]",
    accentBg: "bg-[#F97316]",
    metricCls: "text-[#F97316]",
  },
  {
    icon: Scissors,
    name: "Salons",
    prop: "Booking flows that don't lose appointments mid-stream.",
    metricLabel: "Access",
    metricValue: "24/7 bookings",
    bg: "bg-gradient-to-br from-[#FDF4FF] to-[#F3E8FF]",
    iconBg: "bg-[#A855F7]",
    accentBg: "bg-[#A855F7]",
    metricCls: "text-[#A855F7]",
  },
  {
    icon: Hotel,
    name: "Hotels",
    prop: "Room pages that fill rooms and showcase amenities beautifully.",
    metricLabel: "Priority",
    metricValue: "100% mobile",
    bg: "bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]",
    iconBg: "bg-[#3B82F6]",
    accentBg: "bg-[#3B82F6]",
    metricCls: "text-[#3B82F6]",
  },
  {
    icon: Sparkles,
    name: "Spas",
    prop: "Treatment lists that build trust and calm before arrival.",
    metricLabel: "Cost",
    metricValue: "$0 setup fee",
    bg: "bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]",
    iconBg: "bg-[#16A34A]",
    accentBg: "bg-[#16A34A]",
    metricCls: "text-[#16A34A]",
  },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-8 rounded-t-[2rem] bg-white pt-20 pb-20 sm:-mt-10 sm:rounded-t-[2.5rem] sm:pt-24 sm:pb-28 lg:-mt-14 lg:rounded-t-[3.5rem] lg:pt-32 lg:pb-36 shadow-[0_-30px_60px_-40px_rgba(30,27,75,0.35)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#F97316]">
            Who we build for
          </span>
          <h2 className="mt-4 text-[36px] font-bold leading-[1.05] tracking-[-0.025em] text-[#1E1B4B] sm:text-[42px] lg:text-[60px] xl:text-[68px]">
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
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-[#475569] sm:text-lg lg:mt-6 lg:max-w-2xl lg:text-[20px]">
            Purpose-built layouts, copy, and booking flows tuned to the way real customers
            actually pick where to eat, stay, and book.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 sm:gap-7 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          {cards.map((c) => (
            <article
              key={c.name}
              className={`group relative flex cursor-default flex-col overflow-hidden rounded-3xl border border-white/80 shadow-[0_4px_24px_-8px_rgba(30,27,75,0.12)] ${c.bg} p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(30,27,75,0.18)] lg:p-9`}
            >
              {/* Colored top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${c.accentBg}`} />

              <div className="flex items-center justify-between pt-1">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.iconBg} text-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-110`}
                >
                  <c.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-[#1E1B4B]/30 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1E1B4B]/60"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mt-7 text-[22px] font-bold tracking-tight text-[#1E1B4B] lg:text-[24px]">
                {c.name}
              </h3>
              <p className="mt-3 flex-grow text-[16px] leading-relaxed text-[#475569] lg:text-[17px]">
                {c.prop}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-[#1E1B4B]/10 pt-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">
                  {c.metricLabel}
                </span>
                <span className={`text-[13px] font-bold uppercase tracking-wide ${c.metricCls}`}>
                  {c.metricValue}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-[15px] text-[#94a3b8] sm:mt-20 lg:mt-24">
          Also serving cafes, studios, resorts, and other service businesses.
        </p>
      </div>
    </section>
  );
}
