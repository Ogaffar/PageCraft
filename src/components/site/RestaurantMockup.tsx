import { Star } from "lucide-react";

export function RestaurantMockup({ withMobile = true }: { withMobile?: boolean }) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="overflow-hidden rounded-2xl border border-[#1E1B4B]/10 bg-white shadow-[0_30px_60px_-20px_rgba(30,27,75,0.25)]">
        <div className="flex items-center gap-2 border-b border-[#1E1B4B]/10 bg-[#F5F5F4] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <div className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-white px-3 text-xs text-[#475569] sm:flex">
            northstartavern.com
          </div>
        </div>

        <div className="relative h-44 bg-gradient-to-br from-[#1E1B4B] via-[#3a2b6b] to-[#F97316] sm:h-56">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
              Reservations open · 5p – 11p
            </div>
            <div className="mt-1 text-2xl font-bold leading-tight sm:text-3xl">
              North Star Tavern
            </div>
            <div className="text-xs text-white/80">New American · Atlanta, GA</div>
          </div>
        </div>

        <div className="px-5 pb-5 pt-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold text-[#1E1B4B]">Tonight's menu</div>
            <div className="text-xs font-medium text-[#F97316]">View all →</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: "Steak frites", price: "$32" },
              { name: "Trout amandine", price: "$28" },
              { name: "Wild mushroom", price: "$24" },
            ].map((m) => (
              <div
                key={m.name}
                className="group rounded-xl border border-[#1E1B4B]/10 bg-[#FAFAF9] p-3 transition-all hover:-translate-y-0.5 hover:border-[#F97316]/40 hover:shadow-md"
              >
                <div className="mb-2 h-10 rounded-lg bg-gradient-to-br from-[#F97316]/20 to-[#1E1B4B]/10" />
                <div className="text-[11px] font-semibold leading-tight text-[#1E1B4B]">
                  {m.name}
                </div>
                <div className="mt-0.5 text-[11px] font-bold text-[#F97316]">{m.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-[#F5F5F4] p-3">
              <div className="mb-1 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-[#F97316] text-[#F97316]" />
                ))}
                <span className="ml-1 text-[10px] font-semibold text-[#1E1B4B]">4.9</span>
              </div>
              <p className="text-[11px] leading-relaxed text-[#475569]">
                "Hands down the best meal we've had this year."
              </p>
              <p className="mt-1 text-[10px] text-[#475569]/70">— Daniel R.</p>
            </div>
            <div className="rounded-xl bg-[#1E1B4B] p-3 text-white">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                Reserve a table
              </div>
              <div className="mt-1 text-sm font-semibold">Friday · 7:30p</div>
              <div className="mt-2 inline-flex rounded-full bg-[#F97316] px-3 py-1 text-[10px] font-semibold">
                Confirm
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#1E1B4B]/10 bg-[#FAFAF9] px-5 py-3 text-[10px] text-[#475569]">
          <span>© North Star Tavern</span>
          <span>Reserve · Menu · Visit · Press</span>
        </div>
      </div>

      {withMobile && (
        <div className="absolute -bottom-6 -right-2 hidden w-32 overflow-hidden rounded-[18px] border-[3px] border-[#1E1B4B] bg-white shadow-2xl lg:block">
          <div className="h-24 bg-gradient-to-br from-[#1E1B4B] via-[#3a2b6b] to-[#F97316]" />
          <div className="space-y-1.5 px-2 py-2">
            <div className="h-1.5 w-3/4 rounded bg-[#1E1B4B]/80" />
            <div className="h-1 w-full rounded bg-[#1E1B4B]/15" />
            <div className="h-1 w-5/6 rounded bg-[#1E1B4B]/15" />
            <div className="mt-2 h-6 rounded bg-[#F97316]" />
          </div>
        </div>
      )}
    </div>
  );
}
