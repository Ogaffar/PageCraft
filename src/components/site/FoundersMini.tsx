import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";

export function FoundersMini() {
  return (
    <section className="bg-[#F5F5F4] py-14 sm:py-16 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        <div className="relative overflow-hidden rounded-3xl border border-[#1E1B4B]/8 bg-white p-7 shadow-[0_30px_60px_-30px_rgba(30,27,75,0.14)] sm:p-8 lg:rounded-[2rem] lg:p-16">
          {/* Subtle map silhouette */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-12 select-none text-[#1E1B4B] opacity-[0.04]"
          >
            <svg width="400" height="200" viewBox="0 0 800 400" fill="currentColor">
              <path d="M10 200 L100 150 L200 180 L350 140 L500 160 L750 100 L790 250 L600 350 L400 300 L200 380 Z" />
            </svg>
          </div>

          <div className="relative grid items-center gap-8 sm:gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
            {/* Avatar stack */}
            <div className="flex shrink-0 -space-x-6 lg:-space-x-7">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#1E1B4B] text-2xl font-bold text-white shadow-[0_10px_20px_-8px_rgba(30,27,75,0.45)] lg:h-32 lg:w-32 lg:text-3xl">
                G
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-[#F97316] text-2xl font-bold text-white shadow-[0_10px_20px_-8px_rgba(249,115,22,0.45)] lg:h-32 lg:w-32 lg:text-3xl">
                Y
              </div>
            </div>

            <div className="space-y-4 lg:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F5F4] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E1B4B]/70 lg:text-[12px]">
                <MapPin className="h-3 w-3 text-[#F97316] lg:h-3.5 lg:w-3.5" />
                Chapel Hill, NC
              </div>
              <h2 className="text-[30px] font-bold leading-tight tracking-tight text-[#1E1B4B] sm:text-3xl lg:text-[52px]">
                Gaffar &amp; Yejide.
              </h2>
              <p className="text-[17px] font-medium leading-snug text-[#475569] sm:text-lg lg:text-2xl">
                &ldquo;The two humans you&apos;ll actually talk to.&rdquo;
              </p>
              <p className="max-w-xl text-[16px] leading-relaxed text-[#475569] sm:text-base lg:text-[18px]">
                No agency runaround. No ticket queues. Just two operators who pick up the
                phone, sweat your details, and ship your site in seven days.
              </p>
              <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 lg:pt-3 lg:gap-6">
                <a
                  href="mailto:itspagecraft@gmail.com"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1E1B4B] px-5 text-[15px] font-semibold text-white transition-all hover:bg-[#2a2766] hover:-translate-y-0.5 sm:h-10 sm:px-4 sm:text-sm lg:h-12 lg:px-6 lg:text-[15px]"
                >
                  Say hi
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/demo-form"
                  className="group inline-flex items-center justify-center gap-1.5 text-[15px] font-semibold text-[#1E1B4B] transition-colors hover:text-[#F97316] sm:justify-start sm:text-sm lg:text-[15px]"
                >
                  Start your demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
