import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1E1B4B] text-white">
      {/* Orange glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.4) 0%, rgba(249,115,22,0.1) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(120,90,200,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24">
        {/* CTA banner */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-center lg:pb-14">
          <h2 className="text-[28px] font-bold leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-[56px]">
            Ready when you are.
          </h2>
          <Link
            to="/demo-form"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-bold text-[#1E1B4B] shadow-lg transition-all duration-300 hover:bg-[#F97316] hover:text-white hover:-translate-y-0.5 sm:h-auto sm:w-auto sm:rounded-xl sm:py-3 sm:text-sm lg:h-14 lg:rounded-full lg:px-8 lg:text-base"
          >
            Get Your Demo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:h-5 lg:w-5" />
          </Link>
        </div>

        <div className="grid gap-8 pt-10 sm:gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="text-2xl font-bold tracking-tight text-white">
              PageCraft<span className="text-[#F97316]">.</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Beautifully crafted, mobile-first websites for service businesses. Built by humans
              in Chapel Hill.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2 pr-3 text-xs text-white/70 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-[#F97316]" />
              Chapel Hill, NC
            </div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Explore
            </div>
            <ul className="mt-4 space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/pricing", label: "Pricing" },
                { to: "/faq", label: "FAQ" },
                { to: "/demo-form", label: "Get Your Demo" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-[#F97316]"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:itspagecraft@gmail.com"
                  className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-[#F97316]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#F97316]" />
                  itspagecraft@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:9199034170"
                  className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-[#F97316]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#F97316]" />
                  (919) 903-4170
                </a>
              </li>
              <li>
                <a
                  href="tel:9842919785"
                  className="inline-flex items-center gap-2.5 text-sm text-white/75 transition-colors hover:text-[#F97316]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#F97316]" />
                  (984) 291-9785
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© 2026 PageCraft. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/terms" className="hover:text-[#F97316]">
              Terms
            </Link>
            <Link to="/terms" className="hover:text-[#F97316]">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

