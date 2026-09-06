const certificates = [
  ["ASTM", "Material compliance", "A182 / A240"],
  ["ASME", "Dimensional standard", "B16.5 / B16.47"],
  ["ISO", "Quality management", "9001:2015"],
  ["EN", "Inspection document", "10204 3.1"],
];

export default function Certifications() {
  return <section aria-labelledby="certifications-heading" className="border-b border-steel/15 bg-mill py-14 md:py-20"><div className="site-shell grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-16"><div><h2 id="certifications-heading" className="font-display text-3xl font-semibold tracking-[-0.055em] text-steel md:text-4xl">Documentation that moves with your cargo.</h2><p className="mt-5 font-body leading-7 text-steel/70">Certificates and traceability records are prepared against your purchase order requirements.</p></div><ul className="grid grid-cols-2 border-l border-t border-certification/25 sm:grid-cols-4" aria-label="Certifications and standards">{certificates.map(([mark, title, detail]) => <li key={mark} className="min-h-36 border-b border-r border-certification/25 p-4 sm:p-5"><span className="inline-flex h-9 items-center border-b-2 border-certification font-display text-lg font-semibold tracking-[-0.05em] text-certification">{mark}</span><p className="mt-5 font-body text-sm font-semibold text-steel">{title}</p><p className="mt-1 font-body text-xs text-steel/60">{detail}</p></li>)}</ul></div></section>;
}
