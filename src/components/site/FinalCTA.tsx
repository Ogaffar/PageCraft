import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section className="bg-[#1E1B4B] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <h2 className="text-[32px] font-bold leading-tight text-[#FAFAF9] sm:text-[40px] lg:text-[52px]">
          Ready to get your site live in 7 days?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg font-light text-[#FAFAF9]/80">
          Send us a few details. We will get back to you within 24 hours.
        </p>
        <div className="mt-8">
          <Link
            to="/demo-form"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#F97316] px-8 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.7)] transition-all hover:bg-[#FB8533] hover:scale-[1.02]"
          >
            Get Your Demo
          </Link>
        </div>
        <p className="mt-6 text-sm text-[#FAFAF9]/70">
          Or email us at{" "}
          <a
            href="mailto:itspagecraft@gmail.com"
            className="font-medium text-[#FAFAF9] underline-offset-4 hover:text-[#F97316] hover:underline"
          >
            itspagecraft@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
