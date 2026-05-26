const founders = [
  {
    name: "Gaffar Olatunde",
    bio: "MBA, Kenan-Flagler. Former PwC consultant. Handles strategy, client work, and making sure your site actually moves the needle.",
  },
  {
    name: "Yejide Alli",
    bio: "MBA, Kenan-Flagler. Ex-Google, ex-founder. Handles growth strategy, partnerships, and turning launches into real traction.",
  },
];

export function Founders() {
  return (
    <section className="bg-[#F5F5F4] py-16 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[28px] font-bold leading-tight text-[#1E1B4B] sm:text-[36px] lg:text-[44px]">
            Real people behind the work.
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            PageCraft is built by two operators who care about getting it right.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {founders.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-[#1E1B4B]/10 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#1E1B4B]">{f.name}</h3>
              <p className="mt-3 text-base leading-relaxed text-[#475569]">{f.bio}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#475569]">
          Based in Chapel Hill, NC. Reach us at{" "}
          <a
            href="mailto:itspagecraft@gmail.com"
            className="font-medium text-[#1E1B4B] underline-offset-4 hover:text-[#F97316] hover:underline"
          >
            itspagecraft@gmail.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:9199034170"
            className="font-medium text-[#1E1B4B] underline-offset-4 hover:text-[#F97316] hover:underline"
          >
            (919) 903-4170
          </a>
          .
        </p>
      </div>
    </section>
  );
}
