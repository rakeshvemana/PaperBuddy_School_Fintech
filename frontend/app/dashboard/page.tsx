"use client";

import Link from "next/link";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Bell,
  Download,
  IndianRupee,
  LayoutDashboard,
  ReceiptText,
  Search,
  Send,
  Settings,
  Sun,
  UsersRound,
  WalletCards,
} from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import {
  activity,
  classCollections,
  collectionTrend,
  currency,
  paymentMethods,
  quickActions,
  recentPayments,
  students,
} from "@/lib/data";

const metrics = [
  { title: "Revenue collected", value: "₹84.7L", trend: "+18.4% vs last term", icon: IndianRupee },
  { title: "Pending fees", value: "₹12.9L", trend: "31% recovered by reminders", icon: WalletCards },
  { title: "Today's collection", value: "₹3.42L", trend: "146 receipts issued", icon: ReceiptText },
  { title: "Active students", value: "4,826", trend: "98.1% profile completion", icon: UsersRound },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-50">
      <div className="animated-grid pointer-events-none fixed inset-0 opacity-40" />
      <div className="relative z-10 grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl lg:block">
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold">
            <span className="rounded-2xl bg-cyan-300 p-3 text-slate-950"><ReceiptText size={22} /></span>
            PaperBuddy
          </Link>
          <nav className="mt-9 space-y-2 text-sm text-slate-300">
            {["Dashboard", "Students", "Fees", "Payments", "Defaulters", "Reports", "Notifications", "Settings"].map((item) => (
              <a
                key={item}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white/10 hover:text-white"
                href={`#${item.toLowerCase()}`}
              >
                {item === "Dashboard" ? <LayoutDashboard size={17} /> : <span className="h-2 w-2 rounded-full bg-cyan-200/70" />}
                {item}
              </a>
            ))}
          </nav>
          <div className="glass mt-10 rounded-2xl p-4">
            <p className="text-sm font-semibold">AI fee forecast</p>
            <p className="mt-2 text-3xl font-semibold text-emerald-200">₹91.2L</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Projected next month with 86% confidence from collection velocity.</p>
          </div>
        </aside>

        <section className="px-4 py-5 md:px-7">
          <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-cyan-200">Admin command center</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">Fee collection dashboard</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex min-w-[240px] items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-300">
                <Search size={17} /> Search students, receipts, invoices
              </div>
              <button className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-200"><Bell size={18} /></button>
              <button className="rounded-full border border-white/10 bg-white/10 p-3 text-slate-200"><Sun size={18} /></button>
              <button className="rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950">New payment</button>
            </div>
          </header>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => <MetricCard key={metric.title} {...metric} />)}
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.45fr_0.8fr]">
            <section className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Collection trend</h2>
                  <p className="mt-1 text-sm text-slate-300">Revenue, pending balance, and AI forecast by month.</p>
                </div>
                <button className="rounded-full border border-white/10 p-3 text-slate-200"><Download size={17} /></button>
              </div>
              <div className="mt-5 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={collectionTrend}>
                    <defs>
                      <linearGradient id="revenue" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.7} />
                        <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ffffff12" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #ffffff22", borderRadius: 12 }} />
                    <Area type="monotone" dataKey="revenue" stroke="#2dd4bf" fill="url(#revenue)" strokeWidth={3} />
                    <Line type="monotone" dataKey="forecast" stroke="#38bdf8" strokeWidth={3} />
                    <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="glass rounded-2xl p-5">
              <h2 className="text-xl font-semibold">Payment mix</h2>
              <div className="mt-3 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={paymentMethods} dataKey="value" nameKey="name" innerRadius={54} outerRadius={92} paddingAngle={5}>
                      {paymentMethods.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #ffffff22", borderRadius: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="rounded-xl bg-white/8 p-3">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: method.color }} />{" "}
                    <span className="text-sm text-slate-200">{method.name}</span>
                    <p className="mt-1 text-lg font-semibold">{method.value}%</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_1fr]">
            <section className="glass rounded-2xl p-5">
              <h2 className="text-xl font-semibold">Collection by class</h2>
              <div className="mt-5 h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={classCollections}>
                    <CartesianGrid stroke="#ffffff12" />
                    <XAxis dataKey="className" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #ffffff22", borderRadius: 12 }} />
                    <Bar dataKey="collected" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="due" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Quick actions</h2>
                <Settings size={18} className="text-slate-300" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <button key={action.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-left transition hover:bg-white/15">
                    <action.icon className="text-cyan-200" size={22} />
                    <p className="mt-4 font-semibold">{action.label}</p>
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-emerald-300/12 p-4">
                <p className="font-semibold text-emerald-100">Late-fee automation</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">38 notices generated, 21 reminder emails prepared, SMS and WhatsApp mocked.</p>
              </div>
            </section>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <section className="glass rounded-2xl p-5">
              <h2 className="text-xl font-semibold">Student payment queue</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="text-slate-300">
                    <tr>
                      <th className="pb-3">Student</th>
                      <th className="pb-3">Class</th>
                      <th className="pb-3">Guardian</th>
                      <th className="pb-3">Due</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="py-4">
                          <p className="font-semibold">{student.name}</p>
                          <p className="text-xs text-slate-400">{student.id}</p>
                        </td>
                        <td>{student.className}-{student.section}</td>
                        <td>{student.guardian}</td>
                        <td>{student.due ? currency.format(student.due) : "Cleared"}</td>
                        <td><span className="rounded-full bg-white/10 px-3 py-1 text-xs">{student.status}</span></td>
                        <td>{student.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="space-y-4">
              <div className="glass rounded-2xl p-5">
                <h2 className="text-xl font-semibold">Recent payments</h2>
                <div className="mt-4 space-y-3">
                  {recentPayments.map((payment) => (
                    <div key={payment.receipt} className="flex items-center justify-between rounded-2xl bg-white/8 p-3">
                      <div>
                        <p className="font-medium">{payment.name}</p>
                        <p className="text-xs text-slate-400">{payment.receipt} • {payment.mode}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{currency.format(payment.amount)}</p>
                        <p className="text-xs text-slate-400">{payment.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass rounded-2xl p-5">
                <h2 className="text-xl font-semibold">Activity feed</h2>
                <div className="mt-4 space-y-3">
                  {activity.map((item) => (
                    <p key={item} className="flex gap-3 rounded-2xl bg-white/8 p-3 text-sm text-slate-200">
                      <Send size={16} className="mt-0.5 text-cyan-200" /> {item}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
