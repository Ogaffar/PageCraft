import { Link } from "@tanstack/react-router";

export function Wordmark({
  className = "",
  size = "md",
  light = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  light?: boolean;
}) {
  const sizeCls =
    size === "lg" ? "text-4xl" : size === "sm" ? "text-xl" : "text-3xl";
  const color = light ? "text-[#FAFAF9]" : "text-[#1E1B4B]";
  return (
    <Link
      to="/"
      className={`inline-flex items-baseline tracking-tight ${sizeCls} ${color} ${className}`}
      aria-label="PageCraft home"
    >
      <span className="font-medium">Page</span>
      <span className="font-bold">Craft</span>
      <span className="font-bold text-[#F97316]">.</span>
    </Link>
  );
}
