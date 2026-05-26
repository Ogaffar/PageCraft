const steps = [
  {
    n: "01",
    title: "Day 1: You send us the basics.",
    body:
      "Business name, location, menu or services, photos, and any brand assets you have. We handle the rest.",
  },
  {
    n: "02",
    title: "Days 2 to 5: We design and build.",
    body:
      "You see your site take shape with one round of feedback included. Mobile-first, on-brand, conversion-focused.",
  },
  {
    n: "03",
    title: "Day 7: You go live.",
    body:
      "Hosting included, domain configured, contact form working, Google Business synced. We hand over the keys.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[30px] font-bold leading-tight text-[#1E1B4B] sm:text-[38px] lg:text-[48px]">
            How PageCraft works.
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Three steps. Seven days. No agency runaround.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-6xl font-extrabold leading-none text-[#F97316]">{s.n}</div>
              <h3 className="mt-5 text-[22px] font-bold text-[#1E1B4B]">{s.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-[#475569]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
