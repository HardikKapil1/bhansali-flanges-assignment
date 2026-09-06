import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stainless Steel Flanges | Export Supply for Saudi Arabia & UAE",
  description: "ASTM and ASME stainless steel flanges for export to Saudi Arabia, UAE and the Middle East. Request a project quotation.",
  openGraph: { title: "Stainless Steel Flanges | Bhansali Flanges", description: "Traceable stainless steel flange supply for Gulf projects.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><head>{/* Google Tag Manager placeholder: replace GTM-XXXXXXX before going live. */}<script dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode&&f.parentNode.insertBefore(j,f)})(window,document,'script','dataLayer','GTM-XXXXXXX');" }} /></head><body>{children}</body></html>;
}
