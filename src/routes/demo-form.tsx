import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/demo-form")({
  component: DemoFormPage,
  head: () => ({
    meta: [
      { title: "Get Your Demo — PageCraft" },
      {
        name: "description",
        content:
          "Tell us about your business and we'll build you a custom website demo within 24 hours.",
      },
      { property: "og:title", content: "Get Your Demo — PageCraft" },
      {
        property: "og:description",
        content: "Tell us about your business and we'll build you a custom website demo within 24 hours.",
      },
      { property: "og:url", content: "/demo-form" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:title", content: "Get Your Demo — PageCraft" },
      {
        name: "twitter:description",
        content: "Tell us about your business and we'll build you a custom website demo within 24 hours.",
      },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/demo-form" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(100),
  businessName: z.string().trim().min(1, "Business name is required").max(120),
  businessType: z.enum(["Restaurant", "Salon", "Hotel", "Spa", "Other"], {
    message: "Please select a business type",
  }),
  cityState: z.string().trim().min(2, "City and state are required").max(120),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

type FormState = {
  name: string;
  businessName: string;
  businessType: string;
  cityState: string;
  phone: string;
  email: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  businessName: "",
  businessType: "",
  cityState: "",
  phone: "",
  email: "",
  notes: "",
};

const inputCls =
  "w-full rounded-lg border border-[#1E1B4B]/15 bg-white px-4 py-3 text-base text-[#1E1B4B] placeholder:text-[#475569]/60 transition-all focus:border-[#1E1B4B] focus:outline-none focus:ring-4 focus:ring-[#1E1B4B]/10";
const labelCls = "block text-sm font-medium text-[#475569] mb-1.5";

function DemoFormPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    // TODO: wire to email delivery when Lovable Cloud + email domain are enabled.
    try {
      await new Promise((r) => setTimeout(r, 400));
      await navigate({ to: "/thank-you" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[640px] px-6 pb-20 pt-16 sm:px-8 lg:pt-20">
        <div className="text-center">
          <h1 className="text-[36px] font-bold leading-tight text-[#1E1B4B] sm:text-5xl">
            Tell us about your business.
          </h1>
          <p className="mt-4 text-lg text-[#475569]">
            We'll review and get back to you within 24 hours with a custom demo.
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="mt-10 space-y-5">
          <Field label="Your name" error={errors.name}>
            <input
              className={inputCls}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={update("name")}
              required
            />
          </Field>

          <Field label="Business name" error={errors.businessName}>
            <input
              className={inputCls}
              type="text"
              autoComplete="organization"
              value={values.businessName}
              onChange={update("businessName")}
              required
            />
          </Field>

          <Field label="Business type" error={errors.businessType}>
            <div className="relative">
              <select
                className={`${inputCls} appearance-none pr-10`}
                value={values.businessType}
                onChange={update("businessType")}
                required
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Restaurant</option>
                <option>Salon</option>
                <option>Hotel</option>
                <option>Spa</option>
                <option>Other</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#475569]">
                ▾
              </span>
            </div>
          </Field>

          <Field label="City and state" error={errors.cityState}>
            <input
              className={inputCls}
              type="text"
              autoComplete="address-level2"
              placeholder="Atlanta, GA"
              value={values.cityState}
              onChange={update("cityState")}
              required
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone" error={errors.phone}>
              <input
                className={inputCls}
                type="tel"
                autoComplete="tel"
                placeholder="(919) 903-4170"
                value={values.phone}
                onChange={update("phone")}
                required
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className={inputCls}
                type="email"
                autoComplete="email"
                placeholder="you@business.com"
                value={values.email}
                onChange={update("email")}
                required
              />
            </Field>
          </div>

          <Field label="Anything else we should know? (optional)" error={errors.notes}>
            <textarea
              className={`${inputCls} min-h-[120px] resize-y`}
              value={values.notes}
              onChange={update("notes")}
              maxLength={2000}
            />
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F97316] px-7 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(249,115,22,0.6)] transition-all hover:bg-[#FB8533] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
          >
            {submitting ? "Sending…" : "Submit and book a call"}
          </button>

          <p className="text-center text-xs text-[#475569]">
            By submitting, you agree to receive a follow-up from PageCraft within 24 hours.
          </p>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-[#dc2626]">{error}</span>}
    </label>
  );
}
