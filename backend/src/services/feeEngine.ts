type FeeLine = {
  name: string;
  amount: number;
  recurring?: boolean;
};

type FeeAdjustments = {
  scholarship?: number;
  waiver?: number;
  discount?: number;
  lateFee?: number;
  installments?: number;
};

export function calculateInvoice(lines: FeeLine[], adjustments: FeeAdjustments = {}) {
  const subtotal = lines.reduce((sum, line) => sum + line.amount, 0);
  const reductions = (adjustments.scholarship ?? 0) + (adjustments.waiver ?? 0) + (adjustments.discount ?? 0);
  const lateFee = adjustments.lateFee ?? 0;
  const total = Math.max(subtotal - reductions + lateFee, 0);
  const installmentCount = Math.max(adjustments.installments ?? 1, 1);
  const baseInstallment = Math.floor(total / installmentCount);
  const installments = Array.from({ length: installmentCount }, (_, index) => ({
    label: `Installment ${index + 1}`,
    amount: index === installmentCount - 1 ? total - baseInstallment * index : baseInstallment,
  }));

  return { subtotal, reductions, lateFee, total, installments };
}
