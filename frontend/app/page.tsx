"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  LockKeyhole,
  PlayCircle,
  ReceiptIndianRupee,
} from "lucide-react";
import { SchoolIllustration } from "@/components/SchoolIllustration";
import { features, modules, stats } from "@/lib/data";

const pricing = [
  { plan: "Starter", price: "₹2,999", note: "for small schools", items: ["500 students", "UPI + cash desk", "PDF receipts"] },
  { plan: "Growth", price: "₹7,999", note: "for multi-branch teams", items: ["5,000 students", "AI defaulter prediction", "WhatsApp mock flows"] },
  { plan: "Enterprise", price: "Custom", note: "for institutions", items: ["Custom workflows", "Advanced compliance", "Priority onboarding"] },
];

const faqs = [
  ["Can PaperBuddy handle offline payments?", "Yes. Cash, cheque, bank transfer, and online payments share one receipt and audit trail."],
  ["Is this production ready?", "The repo includes a production-shaped architecture, Prisma schema, typed API, Docker, docs, and demo-ready UI."],
  ["Does it support parents?", "Parents can view dues, pay, download receipts, and track fee history from a dedicated portal."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden school-sky">
      <div className="animated-grid pointer-events-none fixed inset-0 opacity-70" />
      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-900/30">
            <ReceiptIndianRupee size={23} />
          </span>
          <span className="text-xl font-semibold tracking-tight">PaperBuddy</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <Link
          href="/login"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/18"
        >
          Login
        </Link>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl items-center gap-8 px-5 pb-16 pt-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm text-cyan-100">
            <BadgeCheck size={16} />
            Hackathon-ready school fintech SaaS
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
            PaperBuddy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            A premium fee management platform for student records, dynamic fees, UPI payments, receipts,
            reminders, parent self-service, and finance analytics.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-cyan-200"
            >
              Open live dashboard <ArrowRight size={18} />
            </Link>
            <Link
              href="/parent"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/18"
            >
              Parent portal <PlayCircle size={18} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="min-h-[420px]"
        >
          <SchoolIllustration />
        </motion.div>
      </section>

      <section id="features" className="relative z-10 mx-auto w-full max-w-7xl px-5 py-18">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Product modules</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Built for the fee office, parents, and leadership.</h2>
          </div>
          <Link href="/dashboard" className="inline-flex items-center gap-1 text-cyan-100">
            Explore dashboard <ChevronRight size={18} />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.article
              whileHover={{ y: -6 }}
              key={feature.title}
              className="glass rounded-2xl p-6"
            >
              <feature.icon className="text-cyan-200" size={26} />
              <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{feature.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-9">
          {modules.map((module) => (
            <div key={module.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center">
              <module.icon className="mx-auto text-emerald-200" size={21} />
              <p className="mt-3 text-xs text-slate-200">{module.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="relative z-10 mx-auto grid w-full max-w-7xl gap-5 px-5 py-18 md:grid-cols-3">
        {pricing.map((tier) => (
          <div key={tier.plan} className="glass rounded-2xl p-6">
            <p className="text-sm text-cyan-200">{tier.plan}</p>
            <p className="mt-3 text-4xl font-semibold">{tier.price}</p>
            <p className="mt-2 text-sm text-slate-300">{tier.note}</p>
            <div className="mt-6 space-y-3">
              {tier.items.map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm text-slate-200">
                  <LockKeyhole size={15} className="text-emerald-200" /> {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="faq" className="relative z-10 mx-auto w-full max-w-4xl px-5 py-18">
        <h2 className="text-center text-3xl font-semibold md:text-5xl">Questions judges usually ask</h2>
        <div className="mt-8 space-y-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="glass rounded-2xl p-5">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-3 leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-300">
        PaperBuddy, modern school fee management for every payment desk and parent.
      </footer>
    </main>
  );
}
