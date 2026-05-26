import { Link } from "@tanstack/react-router";
import { RestaurantMockup } from "./RestaurantMockup";

export function FeaturedDemo() {
  return (
    <section className="py-16 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#1E1B4B] sm:text-[38px] lg:text-[48px]">
            Real sites. Real businesses.
          </h2>
          <p className="mt-4 text-[18px] text-[#475569] lg:text-xl">
            Here is the kind of polished, conversion-focused work we deliver. Yours could be next.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-10 lg:mt-16">
          <div className="w-full lg:w-auto lg:pr-8">
            <RestaurantMockup />
          </div>

          <div className="flex flex-col items-center gap-3">
            <Link
              to="/demo-form"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#F97316] px-7 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.6)] transition-all hover:bg-[#FB8533] hover:scale-[1.02]"
            >
              Get yours built
            </Link>
            <p className="text-sm text-[#475569]">
              Want to see a recent build live?{" "}
              <a
                href="https://pan-fayetteville.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1E1B4B] underline-offset-4 hover:text-[#F97316] hover:underline"
              >
                View a sample build
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
