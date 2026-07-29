import Link from "next/link";
import { ArrowRight, Eye, LockKeyhole, Mail, ReceiptIndianRupee } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[#07111f] text-white lg:grid-cols-[0.95fr_1.05fr]">
      <section className="school-sky hidden items-center justify-center p-10 lg:flex">
        <div className="glass max-w-lg rounded-2xl p-8">
          <ReceiptIndianRupee className="text-cyan-200" size={34} />
          <h1 className="mt-6 text-5xl font-semibold tracking-tight">Role based access for every stakeholder.</h1>
          <p className="mt-5 leading-8 text-slate-300">Admins, accountants, teachers, parents, and students get focused workspaces backed by JWT auth and secure API routes.</p>
        </div>
      </section>
      <section className="flex items-center justify-center px-5 py-12">
        <form className="glass w-full max-w-md rounded-2xl p-6">
          <Link href="/" className="flex items-center gap-3 text-xl font-semibold">
            <span className="rounded-2xl bg-cyan-300 p-3 text-slate-950"><ReceiptIndianRupee size={22} /></span>
            PaperBuddy
          </Link>
          <h2 className="mt-8 text-3xl font-semibold">Welcome back</h2>
          <p className="mt-2 text-sm text-slate-300">Demo credentials: admin@paperbuddy.app / password123</p>
          <label className="mt-7 block text-sm font-medium">Email</label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
            <Mail size={18} className="text-cyan-200" />
            <input className="w-full bg-transparent outline-none" defaultValue="admin@paperbuddy.app" />
          </div>
          <label className="mt-5 block text-sm font-medium">Password</label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
            <LockKeyhole size={18} className="text-cyan-200" />
            <input className="w-full bg-transparent outline-none" defaultValue="password123" type="password" />
            <Eye size={18} className="text-slate-300" />
          </div>
          <div className="mt-5 flex items-center justify-between text-sm">
            <select className="rounded-full border border-white/10 bg-slate-950 px-3 py-2 text-white">
              <option>Admin</option>
              <option>Accountant</option>
              <option>Teacher</option>
              <option>Parent</option>
              <option>Student</option>
            </select>
            <Link href="/forgot-password" className="text-cyan-200">Forgot password?</Link>
          </div>
          <Link href="/dashboard" className="mt-7 flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950">
            Sign in <ArrowRight size={18} />
          </Link>
          <p className="mt-5 text-center text-sm text-slate-300">
            New school? <Link href="/register" className="text-cyan-200">Create workspace</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
