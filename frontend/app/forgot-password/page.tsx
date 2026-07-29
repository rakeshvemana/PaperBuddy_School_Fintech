import Link from "next/link";
import { MailCheck, ReceiptIndianRupee } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-5 py-12 text-white">
      <form className="glass w-full max-w-md rounded-2xl p-6">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold">
          <span className="rounded-2xl bg-cyan-300 p-3 text-slate-950"><ReceiptIndianRupee size={22} /></span>
          PaperBuddy
        </Link>
        <MailCheck className="mt-8 text-cyan-200" size={34} />
        <h1 className="mt-5 text-3xl font-semibold">Reset password</h1>
        <p className="mt-2 text-sm leading-6 text-slate-300">Enter your registered email and PaperBuddy will send a secure OTP.</p>
        <input className="mt-7 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none" defaultValue="admin@paperbuddy.app" />
        <Link href="/otp" className="mt-5 block rounded-full bg-cyan-300 px-5 py-3 text-center font-semibold text-slate-950">Send OTP</Link>
      </form>
    </main>
  );
}
