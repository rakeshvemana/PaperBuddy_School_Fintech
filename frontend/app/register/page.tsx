import Link from "next/link";
import { ArrowRight, Building2, Mail, Phone, ReceiptIndianRupee, UserRound } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-5 py-12 text-white">
      <form className="glass w-full max-w-3xl rounded-2xl p-6">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold">
          <span className="rounded-2xl bg-cyan-300 p-3 text-slate-950"><ReceiptIndianRupee size={22} /></span>
          PaperBuddy
        </Link>
        <h1 className="mt-8 text-3xl font-semibold">Create school workspace</h1>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            ["School name", "Greenfield International School", Building2],
            ["Admin name", "Rakesh Vemana", UserRound],
            ["Email", "admin@paperbuddy.app", Mail],
            ["Phone", "+91 98765 43210", Phone],
          ].map(([label, value, Icon]) => (
            <label key={label as string} className="block text-sm font-medium">
              {label as string}
              <span className="mt-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <Icon size={18} className="text-cyan-200" />
                <input className="w-full bg-transparent outline-none" defaultValue={value as string} />
              </span>
            </label>
          ))}
        </div>
        <Link href="/otp" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950">
          Continue to OTP <ArrowRight size={18} />
        </Link>
      </form>
    </main>
  );
}
