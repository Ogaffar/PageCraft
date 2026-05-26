import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1E1B4B] text-white">
      {/* Orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[700px] w-[700px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.55) 0%, rgba(249,115,22,0.18) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(120,90,200,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-14 sm:gap-14 sm:px-5 sm:pb-28 sm:pt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-8 lg:pb-40 lg:pt-28">
        <div className="pc-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-white/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F97316] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F97316]" />
            </span>
            Live in 7 days
          </div>
          <h1 className="mt-5 text-[64px] font-extrabold leading-[0.92] tracking-[-0.04em] text-white sm:mt-6 sm:text-7xl lg:text-[120px] xl:text-[140px]">
            PageCraft<span className="text-[#F97316]">.</span>
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/75 sm:mt-6 sm:text-xl lg:mt-8 lg:max-w-lg lg:text-[22px]">
            Your business website. Professional, mobile-first, and live in just{" "}
            <span className="text-white">seven days.</span>
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:mt-12 lg:gap-8">
            <Link
              to="/demo-form"
              className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#F97316] px-7 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(249,115,22,0.7)] transition-all hover:bg-[#FB8533] hover:-translate-y-0.5 sm:h-12 sm:w-auto lg:h-14 lg:px-9 lg:text-[17px]"
            >
              Get Your Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 lg:h-5 lg:w-5" />
            </Link>
            <Link
              to="/pricing"
              className="group inline-flex items-center justify-center gap-1.5 text-base font-medium text-white/85 transition-colors hover:text-[#F97316] sm:justify-start lg:text-[17px]"
            >
              See pricing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60 sm:mt-10 lg:mt-12 lg:gap-x-4 lg:text-[15px]">
            <span>
              From <span className="font-semibold text-white/85">$214.99</span>/month
            </span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>No setup fee</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>Cancel anytime</span>
          </div>
        </div>

        <div
          className="relative flex items-center justify-center pc-fade-in"
          style={{ animationDelay: "150ms" }}
        >
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative w-full max-w-2xl">
      {/* Desktop browser frame */}
      <div className="overflow-hidden rounded-[14px] bg-[#0f0d2e] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        <div className="flex items-center gap-2 bg-[#1a1840] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <div className="ml-4 h-5 flex-1 rounded-md bg-black/30" />
        </div>

        <div className="bg-[#FAF8F2]">
          {/* Top nav */}
          <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
            <div className="leading-tight">
              <div className="font-serif text-[15px] tracking-[0.25em] text-[#1a1a1a]">VERO</div>
              <div className="text-[8px] tracking-[0.3em] text-[#1a1a1a]/60">RESTAURANT</div>
            </div>
            <div className="hidden items-center gap-6 text-[10px] font-medium tracking-[0.2em] text-[#1a1a1a]/80 md:flex">
              <span>HOME</span>
              <span>MENU</span>
              <span>ABOUT</span>
              <span>CONTACT</span>
            </div>
            <div className="rounded bg-[#1a1a1a] px-3 py-1.5 text-[8px] font-semibold tracking-[0.2em] text-white">
              RESERVE
            </div>
          </div>

          {/* Hero block */}
          <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#2a1f1a] via-[#3a2820] to-[#1a1410] sm:h-64">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(180,120,60,0.5),transparent_60%)]" />
            <div className="absolute inset-0 flex flex-col justify-center px-6">
              <div className="text-[8px] font-semibold tracking-[0.3em] text-[#d4a574]">
                MODERN CUISINE
              </div>
              <div className="mt-2 font-serif text-2xl leading-[1.05] text-white sm:text-3xl">
                Exceptional
                <br />
                ingredients.
              </div>
              <div className="mt-3 h-px w-8 bg-[#d4a574]" />
              <div className="mt-3 inline-flex w-fit border border-[#d4a574]/70 px-3 py-1.5 text-[8px] font-semibold tracking-[0.25em] text-[#d4a574]">
                VIEW OUR MENU
              </div>
            </div>
          </div>

          {/* Three-up */}
          <div className="grid grid-cols-3 gap-4 px-6 py-6">
            {[
              { t: "SEASONAL", d: "Finest local ingredients" },
              { t: "CRAFTED", d: "Thoughtfully prepared" },
              { t: "HOSPITALITY", d: "A welcoming room" },
            ].map((c) => (
              <div key={c.t} className="text-center">
                <div className="mx-auto h-4 w-4 rounded-full border border-[#d4a574]/60" />
                <div className="mt-2 text-[8px] font-semibold tracking-[0.25em] text-[#1a1a1a]">
                  {c.t}
                </div>
                <div className="mt-1 text-[8px] leading-snug text-[#1a1a1a]/60">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* iPhone */}
      <div className="absolute -bottom-10 -right-4 hidden w-[150px] rounded-[28px] bg-black p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] sm:block lg:-right-10 lg:w-[170px]">
        <div className="overflow-hidden rounded-[22px] bg-[#FAF8F2]">
          {/* status bar */}
          <div className="flex items-center justify-between px-3 py-1.5 text-[8px] font-semibold text-black">
            <span>9:41</span>
            <span>···</span>
          </div>
          {/* nav */}
          <div className="flex items-center justify-between px-3 pb-2">
            <div>
              <div className="font-serif text-[9px] tracking-[0.25em]">VERO</div>
              <div className="text-[5px] tracking-[0.3em] text-black/60">RESTAURANT</div>
            </div>
            <Menu className="h-3 w-3" />
          </div>
          {/* hero */}
          <div className="relative h-32 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(180,120,60,0.5),transparent_60%)]" />
            <div className="absolute inset-0 flex flex-col justify-center px-3">
              <div className="text-[6px] font-semibold tracking-[0.3em] text-[#d4a574]">
                MODERN CUISINE
              </div>
              <div className="mt-1 font-serif text-[11px] leading-tight text-white">
                Exceptional
                <br />
                ingredients.
              </div>
              <div className="mt-1.5 inline-flex w-fit border border-[#d4a574]/70 px-2 py-1 text-[5px] font-semibold tracking-[0.25em] text-[#d4a574]">
                VIEW MENU
              </div>
            </div>
          </div>
          <div className="px-3 py-2 text-center">
            <div className="mx-auto h-2 w-2 rounded-full border border-[#d4a574]/60" />
            <div className="mt-1 text-[6px] font-semibold tracking-[0.25em]">SEASONAL</div>
            <div className="mt-0.5 text-[6px] text-black/60">Finest local ingredients</div>
          </div>
        </div>
      </div>
    </div>
  );
}
