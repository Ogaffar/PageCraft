import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

const links = [
  { label: "Pricing", href: "/pricing", to: true },
  { label: "FAQ", href: "/faq", to: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#FAFAF9]/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(30,27,75,0.06),0_8px_24px_-12px_rgba(30,27,75,0.12)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-14">
        <Wordmark />

        <div className="flex items-center gap-2 lg:gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-base font-medium text-[#1E1B4B]/80 transition-colors hover:text-[#F97316]"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-base font-medium text-[#1E1B4B]/80 transition-colors hover:text-[#F97316]"
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>
          <a
            href="tel:9199034170"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1E1B4B] transition-colors hover:bg-[#F5F5F4] lg:hidden"
            aria-label="Call PageCraft"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Link
            to="/demo-form"
            className="hidden h-11 items-center justify-center rounded-full bg-[#F97316] px-6 text-base font-semibold text-white shadow-sm transition-all hover:bg-[#FB8533] hover:scale-[1.02] sm:inline-flex"
          >
            Get Your Demo
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#1E1B4B] lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#1E1B4B]/10 bg-[#FAFAF9] lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-6 py-4">
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-[#1E1B4B] hover:bg-[#F5F5F4]"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium text-[#1E1B4B] hover:bg-[#F5F5F4]"
                >
                  {l.label}
                </a>
              ),
            )}
            <Link
              to="/demo-form"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#F97316] px-5 text-base font-semibold text-white sm:hidden"
            >
              Get Your Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
