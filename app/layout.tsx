import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stainless Steel Flanges | Export Supply for Saudi Arabia & UAE",
  description: "ASTM and ASME stainless steel flanges for export to Saudi Arabia, UAE and the Middle East. Request a project quotation.",
  openGraph: { title: "Stainless Steel Flanges | Bhansali Flanges", description: "Traceable stainless steel flange supply for Gulf projects.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
