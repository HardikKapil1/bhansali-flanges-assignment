import { NextResponse } from "next/server";
import { enquirySchema } from "@/app/lib/schema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ success: false, error: "Invalid enquiry details." }, { status: 400 });

  // Simple payload for future CRM / Google Sheet wiring: { name, email, phone, productInterest, timestamp }
  const payload = { ...parsed.data, timestamp: new Date().toISOString() };
  console.log("Flange enquiry received:", payload);
  return NextResponse.json({ success: true });
}
