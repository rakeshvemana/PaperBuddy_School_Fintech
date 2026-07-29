import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function OtpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-5 py-12 text-white">
      <form className="glass w-full max-w-md rounded-2xl p-6 text-center">
        <ShieldCheck className="mx-auto text-emerald-200" size={42} />
        <h1 className="mt-5 text-3xl font-semibold">Verify OTP</h1>
        <p className="mt-2 text-sm leading-6 text-slate-300">Use demo code 246810 to complete verification.</p>
        <div className="mt-7 grid grid-cols-6 gap-2">
          {"246810".split("").map((digit, index) => (
            <input key={index} className="h-14 rounded-2xl border border-white/10 bg-white/10 text-center text-xl font-semibold outline-none" defaultValue={digit} />
          ))}
        </div>
        <Link href="/dashboard" className="mt-7 block rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950">Verify and continue</Link>
      </form>
    </main>
  );
}
