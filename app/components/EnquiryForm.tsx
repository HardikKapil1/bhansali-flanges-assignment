"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { enquirySchema, type EnquiryInput } from "@/app/lib/schema";

declare global { interface Window { gtag?: (...args: unknown[]) => void } }

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<EnquiryInput>({ resolver: zodResolver(enquirySchema) });
  const submit = async (values: EnquiryInput) => { try { setStatus("idle"); const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) }); if (!response.ok) throw new Error("Submission failed"); window.gtag?.("event", "form_submit", { form_name: "flange_enquiry" }); reset(); setStatus("success"); } catch { setStatus("error"); } };
  return <form onSubmit={handleSubmit(submit)} className="grid gap-x-5 gap-y-5 sm:grid-cols-2" noValidate><Field label="Full name" error={errors.name?.message}><input {...register("name")} autoComplete="name" className="field" /></Field><Field label="Business email" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" className="field" /></Field><Field label="Phone / WhatsApp" error={errors.phone?.message}><input {...register("phone")} type="tel" autoComplete="tel" className="field" /></Field><Field label="Product interest" error={errors.productInterest?.message}><select {...register("productInterest")} defaultValue="" className="field"><option value="" disabled>Select product</option><option>Stainless steel flanges</option><option>Weld neck flanges</option><option>Blind flanges</option><option>Project / bulk requirement</option></select></Field><button type="submit" disabled={isSubmitting} className="mt-2 w-full bg-accent px-5 py-4 font-body text-sm font-semibold text-mill disabled:opacity-60 sm:col-span-2">{isSubmitting ? "Sending enquiry…" : "Request quotation"}</button>{status === "success" && <p role="status" className="font-body text-sm text-mill sm:col-span-2">Thank you — your enquiry has been received.</p>}{status === "error" && <p role="alert" className="font-body text-sm text-accent-grey sm:col-span-2">We could not send your enquiry. Please try again or contact the export desk.</p>}</form>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) { return <label className="font-body text-sm font-semibold text-mill">{label}<span className="text-accent-grey"> *</span>{children}{error && <span role="alert" className="mt-1 block text-xs text-accent-grey">{error}</span>}</label>; }
