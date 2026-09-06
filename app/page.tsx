import EnquiryBar from "@/app/components/EnquiryBar";
import EnquiryForm from "@/app/components/EnquiryForm";
import ProductConfigurator from "@/app/components/ProductConfigurator";
import Certifications from "@/app/components/Certifications";
import ShippingInfo from "@/app/components/ShippingInfo";

export default function Home() {
  return <>
    <EnquiryBar />
    <header className="border-b border-steel/15 bg-mill"><nav aria-label="Primary navigation" className="site-shell flex h-20 items-center justify-between"><a href="#top" className="font-display text-lg font-semibold tracking-[-0.05em] text-steel">BHANSALI <span className="text-accent">FLANGES</span></a><a href="#enquiry" className="hidden border-b border-accent pb-1 font-body text-sm font-semibold text-steel sm:block">Request a quotation</a></nav></header>
    <main id="top">
      <section className="border-b border-steel/15 bg-mill py-14 md:py-20"><div className="site-shell"><p className="mb-5 font-body text-sm font-medium text-steel/60">Stainless steel export supply · Saudi Arabia · UAE · Middle East</p><div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end"><div><h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-steel sm:text-6xl md:text-7xl">Stainless steel<br />flanges.</h1><p className="mt-7 max-w-xl font-body text-lg leading-7 text-steel/70">Export-ready ASTM and ASME flanges with traceable material documentation, supplied for process, water and energy projects across the Gulf.</p></div><aside aria-label="Key product specifications" className="border-l-2 border-accent bg-steel px-6 py-6 text-mill sm:px-7"><p className="font-body text-xs font-semibold tracking-[0.12em] text-mill/55">AT A GLANCE</p><dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 font-body"><div><dt className="text-xs text-mill/55">Sizes</dt><dd className="mt-1 text-sm font-semibold">½″ – 24″</dd></div><div><dt className="text-xs text-mill/55">Pressure class</dt><dd className="mt-1 text-sm font-semibold">150 – 2500</dd></div><div><dt className="text-xs text-mill/55">Standards</dt><dd className="mt-1 text-sm font-semibold">ASME B16.5</dd></div><div><dt className="text-xs text-mill/55">Mill test report</dt><dd className="mt-1 text-sm font-semibold">EN 10204 3.1</dd></div></dl></aside></div></div></section>
      <ProductConfigurator />
      <Certifications />
      <ShippingInfo />
      <section id="enquiry" aria-labelledby="enquiry-heading" className="border-t border-steel/15 bg-steel py-14 md:py-20"><div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><div><p className="font-body text-sm font-medium text-mill/55">Project or stock requirement</p><h2 id="enquiry-heading" className="mt-4 max-w-md font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-mill md:text-5xl">Tell us what your project needs.</h2><p className="mt-6 max-w-md font-body leading-7 text-mill/70">Include your flange type, size, grade and quantity. Our export desk will respond with availability and a commercial quotation.</p></div><EnquiryForm /></div></section>
    </main>
    <footer className="bg-steel pb-24 text-mill sm:pb-7"><div className="site-shell border-t border-mill/15 pt-6 font-body text-sm text-mill/55 sm:flex sm:items-center sm:justify-between"><p>Bhansali Flanges · Stainless steel export supply</p><p className="mt-2 sm:mt-0">Saudi Arabia · UAE · Middle East</p></div></footer>
  </>;
}
