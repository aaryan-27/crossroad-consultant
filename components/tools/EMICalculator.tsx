"use client";

import { useMemo, useState } from "react";
import { Calculator, IndianRupee } from "lucide-react";
import { formatINR } from "@/lib/utils";

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-ink/70">{label}</label>
        <span className="rounded-lg bg-navy px-3 py-1 text-sm font-semibold text-white">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:shadow-md"
        style={{ background: `linear-gradient(to right, #CDA45E ${pct}%, #E5E7EB ${pct}%)` }}
      />
    </div>
  );
}

export function EMICalculator() {
  const [amount, setAmount] = useState(30_000_000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const emi = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    return { emi, totalInterest: totalPayment - amount, totalPayment };
  }, [amount, rate, years]);

  const principalPct = (amount / totalPayment) * 100;

  return (
    <div className="grid gap-8 rounded-3xl border border-navy/5 bg-white p-6 shadow-card md:grid-cols-2 md:p-8">
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold">
            <Calculator className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-xl text-navy">Home Loan EMI Calculator</h3>
            <p className="text-xs text-ink/55">Estimate your monthly instalment</p>
          </div>
        </div>
        <div className="space-y-7">
          <Slider label="Loan Amount" value={amount} min={2_000_000} max={200_000_000} step={500_000} format={formatINR} onChange={setAmount} />
          <Slider label="Interest Rate (p.a.)" value={rate} min={6} max={12} step={0.05} format={(v) => `${v.toFixed(2)}%`} onChange={setRate} />
          <Slider label="Loan Tenure" value={years} min={1} max={30} step={1} format={(v) => `${v} yrs`} onChange={setYears} />
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-navy p-8 text-white">
        <p className="text-sm text-white/60">Your Monthly EMI</p>
        <p className="mt-1 flex items-center font-display text-4xl font-bold text-gold">
          <IndianRupee className="h-7 w-7" />
          {Math.round(emi).toLocaleString("en-IN")}
        </p>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-gold-gradient" style={{ width: `${principalPct}%` }} />
        </div>
        <div className="mt-3 flex justify-between text-xs text-white/60">
          <span>Principal {principalPct.toFixed(0)}%</span>
          <span>Interest {(100 - principalPct).toFixed(0)}%</span>
        </div>

        <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
          <div className="flex justify-between">
            <dt className="text-white/60">Principal Amount</dt>
            <dd className="font-semibold">{formatINR(amount)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/60">Total Interest</dt>
            <dd className="font-semibold text-gold-200">{formatINR(Math.round(totalInterest))}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/60">Total Payable</dt>
            <dd className="font-semibold">{formatINR(Math.round(totalPayment))}</dd>
          </div>
        </dl>
        <p className="mt-5 text-[11px] text-white/40">
          *Indicative only. Actual EMI depends on lender terms &amp; eligibility.
        </p>
      </div>
    </div>
  );
}
