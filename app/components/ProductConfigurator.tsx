"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SpecsTable, { type Grade } from "./SpecsTable";

const grades: { id: Grade; label: string; description: string }[] = [
  { id: "304", label: "304", description: "General corrosion resistance" },
  { id: "316", label: "316", description: "Molybdenum-bearing for chloride exposure" },
  { id: "316L", label: "316L", description: "Low-carbon grade for welded systems" },
];

export default function ProductConfigurator() {
  const [grade, setGrade] = useState<Grade>("304");
  const reduceMotion = useReducedMotion();
  const indicatorTransition = reduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 520, damping: 38 };
  return <section aria-labelledby="specifications-heading" className="bg-mill py-14 md:py-20"><div className="site-shell"><div className="grid gap-8 border-b border-steel/20 pb-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="font-body text-sm font-medium text-steel/60">Material selection</p><h2 id="specifications-heading" className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-steel md:text-5xl">Specification, by grade.</h2></div><div role="tablist" aria-label="Stainless steel material grade" className="flex border-b border-steel/25">{grades.map((item) => <button key={item.id} role="tab" aria-selected={grade === item.id} aria-controls="grade-specification" onClick={() => setGrade(item.id)} className={`relative min-w-20 px-4 py-3 font-body text-sm font-semibold ${grade === item.id ? "text-steel" : "text-steel/50"}`}>{item.label}{grade === item.id && <motion.div layoutId="grade-tab-indicator" transition={indicatorTransition} className="absolute inset-x-0 -bottom-px h-0.5 bg-accent" />}</button>)}</div></div><div className="mt-7 flex flex-col gap-1 font-body sm:flex-row sm:items-baseline sm:gap-3"><p className="text-sm font-semibold text-steel">Grade {grade}</p><p className="text-sm text-steel/60">{grades.find((item) => item.id === grade)?.description}</p></div><div id="grade-specification" role="tabpanel" className="mt-7 overflow-x-auto"><SpecsTable grade={grade} /></div><p className="mt-5 font-body text-xs leading-5 text-steel/55">Dimensions and ratings shown are standard manufacturing ranges. Confirm facing, bore, schedule and testing requirements in your enquiry.</p></div></section>;
}
