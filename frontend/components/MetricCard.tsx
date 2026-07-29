import { LucideIcon } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
};

export function MetricCard({ title, value, trend, icon: Icon }: MetricCardProps) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-300">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
        </div>
        <div className="rounded-2xl bg-cyan-300/15 p-3 text-cyan-200">
          <Icon size={22} />
        </div>
      </div>
      <p className="mt-5 text-sm font-medium text-emerald-200">{trend}</p>
    </div>
  );
}
