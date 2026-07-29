import Link from "next/link";
import { CalendarClock, Download, QrCode, ReceiptText, WalletCards } from "lucide-react";
import { currency, recentPayments } from "@/lib/data";

export default function ParentPortalPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-5 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <Link href="/" className="text-sm text-cyan-200">PaperBuddy</Link>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">Parent portal</h1>
            <p className="mt-2 text-slate-300">Fees, dues, receipts, due dates, and notifications for Ananya Rao.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950">
            <QrCode size={18} /> Pay with UPI
          </button>
        </header>
        <section className="mt-7 grid gap-4 md:grid-cols-3">
          <div className="glass rounded-2xl p-5">
            <WalletCards className="text-cyan-200" />
            <p className="mt-5 text-sm text-slate-300">Current due</p>
            <p className="mt-2 text-4xl font-semibold">₹0</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <CalendarClock className="text-emerald-200" />
            <p className="mt-5 text-sm text-slate-300">Next due date</p>
            <p className="mt-2 text-4xl font-semibold">Aug 10</p>
          </div>
          <div className="glass rounded-2xl p-5">
            <ReceiptText className="text-sky-200" />
            <p className="mt-5 text-sm text-slate-300">Receipts</p>
            <p className="mt-2 text-4xl font-semibold">14</p>
          </div>
        </section>
        <section className="glass mt-6 rounded-2xl p-5">
          <h2 className="text-xl font-semibold">Payment history</h2>
          <div className="mt-4 space-y-3">
            {recentPayments.slice(0, 3).map((payment) => (
              <div key={payment.receipt} className="flex flex-col justify-between gap-3 rounded-2xl bg-white/8 p-4 md:flex-row md:items-center">
                <div>
                  <p className="font-semibold">{payment.receipt}</p>
                  <p className="text-sm text-slate-300">{payment.mode} • {payment.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold">{currency.format(payment.amount)}</p>
                  <button className="rounded-full border border-white/10 p-3"><Download size={17} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
