"use client";

import { motion, useReducedMotion } from "framer-motion";

export type Grade = "304" | "316" | "316L";

const specs: Record<Grade, [string, string][]> = {
  "304": [["Material designation", "ASTM A182 F304 · UNS S30400"], ["Flange types", "Weld neck, slip-on, blind, threaded, lap joint"], ["Nominal pipe size", "½″ to 24″ (DN15 to DN600)"], ["Pressure ratings", "ASME Class 150, 300, 600, 900, 1500, 2500"], ["Dimensions", "ASME B16.5; B16.47 Series A/B on request"], ["Facing", "Raised face, flat face, ring type joint"], ["Temperature range", "–196°C to 870°C, service dependent"], ["Documentation", "EN 10204 3.1 MTC; PMI / NACE on request"]],
  "316": [["Material designation", "ASTM A182 F316 · UNS S31600"], ["Flange types", "Weld neck, slip-on, blind, threaded, lap joint"], ["Nominal pipe size", "½″ to 24″ (DN15 to DN600)"], ["Pressure ratings", "ASME Class 150, 300, 600, 900, 1500, 2500"], ["Dimensions", "ASME B16.5; B16.47 Series A/B on request"], ["Facing", "Raised face, flat face, ring type joint"], ["Corrosion resistance", "Suitable for moderate chloride service environments"], ["Documentation", "EN 10204 3.1 MTC; PMI / NACE on request"]],
  "316L": [["Material designation", "ASTM A182 F316L · UNS S31603"], ["Flange types", "Weld neck, slip-on, blind, threaded, lap joint"], ["Nominal pipe size", "½″ to 24″ (DN15 to DN600)"], ["Pressure ratings", "ASME Class 150, 300, 600, 900, 1500, 2500"], ["Dimensions", "ASME B16.5; B16.47 Series A/B on request"], ["Facing", "Raised face, flat face, ring type joint"], ["Weld suitability", "Low-carbon chemistry for welded process systems"], ["Documentation", "EN 10204 3.1 MTC; PMI / NACE on request"]],
};

export default function SpecsTable({ grade }: { grade: Grade }) {
  const reduceMotion = useReducedMotion();
  return <table className="w-full min-w-175 border-collapse text-left font-body"><caption className="sr-only">Technical specifications for stainless steel flange grade {grade}</caption><thead><tr className="border-y border-steel bg-steel text-mill"><th scope="col" className="w-[34%] px-5 py-4 text-xs font-semibold tracking-[0.08em]">SPECIFICATION</th><th scope="col" className="px-5 py-4 text-xs font-semibold tracking-[0.08em]">GRADE {grade} DETAIL</th></tr></thead><tbody>{specs[grade].map(([label, value], index) => <motion.tr key={`${grade}-${label}`} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.045 }} className="border-b border-steel/15 bg-mill even:bg-accent-grey/10"><th scope="row" className="px-5 py-4 text-sm font-semibold text-steel">{label}</th><td className="px-5 py-4 text-sm leading-6 text-steel/70">{value}</td></motion.tr>)}</tbody></table>;
}
