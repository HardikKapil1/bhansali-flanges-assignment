import { NextResponse } from "next/server";
import { enquirySchema } from "@/app/lib/schema";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ success: false, error: "Invalid enquiry details." }, { status: 400 });

  // The webhook receives: { name, email, phone, productInterest, timestamp }.
  const payload = { ...parsed.data, timestamp: new Date().toISOString() };
  console.log("Flange enquiry received:", payload);

  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL is not configured.");
    return NextResponse.json({ success: false, error: "Enquiry service is not configured." }, { status: 500 });
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      console.error("Google Sheets webhook failed:", webhookResponse.status);
      return NextResponse.json({ success: false, error: "Unable to submit enquiry." }, { status: 500 });
    }
  } catch (error) {
    console.error("Google Sheets webhook request failed:", error);
    return NextResponse.json({ success: false, error: "Unable to submit enquiry." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
