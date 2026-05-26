import { Link } from "@tanstack/react-router";

export function PricingTeaser() {
  return (
    <section className="bg-[#F5F5F4] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#1E1B4B] sm:text-[36px] lg:text-[44px]">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Two ways to work with us. Both include hosting, updates, and care.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-[#1E1B4B]/10 bg-white p-7 shadow-sm sm:p-9">
          <div className="space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#475569]">
                Pay As You Go
              </div>
              <div className="mt-1 text-lg text-[#1E1B4B] sm:text-xl">
                From <span className="text-2xl font-bold text-[#F97316] sm:text-3xl">$199.99</span>
                /month plus{" "}
                <span className="font-semibold text-[#1E1B4B]">$499.99</span> one-time setup.
              </div>
            </div>
            <div className="h-px w-full bg-[#1E1B4B]/10" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#475569]">
                  24-Month Plan
                </div>
                <span className="inline-flex items-center rounded-full bg-[#F97316]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#F97316]">
                  Most popular
                </span>
              </div>
              <div className="mt-1 text-lg text-[#1E1B4B] sm:text-xl">
                Or <span className="text-2xl font-bold text-[#F97316] sm:text-3xl">$214.99</span>
                /month for 24 months.{" "}
                <span className="font-semibold text-[#1E1B4B]">No setup fee.</span>
              </div>
            </div>
          </div>

          <div className="mt-7 flex justify-center">
            <Link
              to="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#F97316] px-7 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.5)] transition-all hover:bg-[#FB8533] hover:scale-[1.02]"
            >
              See full pricing
            </Link>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-[#475569]">
          Includes hosting, updates, additions, and platform care. No surprise fees.
        </p>
      </div>
    </section>
  );
}
