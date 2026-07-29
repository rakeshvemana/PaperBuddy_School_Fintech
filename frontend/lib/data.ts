import {
  BadgeIndianRupee,
  Banknote,
  BellRing,
  BookOpen,
  BrainCircuit,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  CreditCard,
  FileDown,
  GraduationCap,
  Landmark,
  MailCheck,
  QrCode,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export const currency = new Intl.NumberFormat("en-IN", {
  currency: "INR",
  maximumFractionDigits: 0,
  style: "currency",
});

export const stats = [
  { label: "Monthly collection tracked", value: "₹84.7L" },
  { label: "Receipts issued", value: "18.2K" },
  { label: "Payment success", value: "99.2%" },
  { label: "Reminder recovery", value: "31%" },
];

export const features = [
  {
    icon: UsersRound,
    title: "Student 360",
    text: "Admission numbers, guardians, documents, class sections, fee plans, and communication history in one profile.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Dynamic fee engine",
    text: "Tuition, transport, hostel, scholarships, waivers, discounts, late fees, installments, and recurring fees.",
  },
  {
    icon: CreditCard,
    title: "All payment modes",
    text: "UPI QR, gateway, cash, cheque, bank transfer, partial payments, refunds, receipts, and transaction trails.",
  },
  {
    icon: BellRing,
    title: "Smart reminders",
    text: "Defaulter detection, notices, email, SMS mock, WhatsApp mock, in-app alerts, and escalation queues.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Finance analytics",
    text: "Revenue forecast, collection trends, class-wise recovery, payment method mix, and heatmap views.",
  },
  {
    icon: BrainCircuit,
    title: "AI predictions",
    text: "Demo models flag likely defaulters, predict revenue, and recommend the next best collection action.",
  },
];

export const paymentMethods = [
  { name: "UPI", value: 44, color: "#2dd4bf" },
  { name: "Cash", value: 22, color: "#38bdf8" },
  { name: "Cheque", value: 13, color: "#a78bfa" },
  { name: "Gateway", value: 21, color: "#34d399" },
];

export const collectionTrend = [
  { month: "Apr", revenue: 52, pending: 18, forecast: 56 },
  { month: "May", revenue: 59, pending: 16, forecast: 61 },
  { month: "Jun", revenue: 64, pending: 15, forecast: 67 },
  { month: "Jul", revenue: 71, pending: 13, forecast: 74 },
  { month: "Aug", revenue: 77, pending: 11, forecast: 80 },
  { month: "Sep", revenue: 85, pending: 9, forecast: 88 },
];

export const classCollections = [
  { className: "VI", collected: 8.8, due: 1.4 },
  { className: "VII", collected: 9.7, due: 1.1 },
  { className: "VIII", collected: 10.6, due: 1.7 },
  { className: "IX", collected: 12.4, due: 2.6 },
  { className: "X", collected: 14.2, due: 1.9 },
  { className: "XI", collected: 13.6, due: 3.2 },
  { className: "XII", collected: 15.4, due: 2.1 },
];

export const students = [
  {
    id: "STU-1048",
    name: "Ananya Rao",
    className: "X",
    section: "A",
    guardian: "Meera Rao",
    phone: "+91 98765 11048",
    due: 0,
    status: "Cleared",
    method: "UPI",
  },
  {
    id: "STU-1186",
    name: "Kabir Menon",
    className: "VIII",
    section: "C",
    guardian: "Rohan Menon",
    phone: "+91 98765 11186",
    due: 18400,
    status: "Reminder sent",
    method: "Cheque",
  },
  {
    id: "STU-1224",
    name: "Sara Khan",
    className: "XI",
    section: "B",
    guardian: "Aamir Khan",
    phone: "+91 98765 11224",
    due: 6200,
    status: "Partial",
    method: "Cash",
  },
  {
    id: "STU-1302",
    name: "Vihaan Iyer",
    className: "VII",
    section: "A",
    guardian: "Lakshmi Iyer",
    phone: "+91 98765 11302",
    due: 27400,
    status: "High priority",
    method: "Gateway",
  },
];

export const recentPayments = [
  { receipt: "RCPT-9081", name: "Ananya Rao", amount: 42000, mode: "UPI", time: "2 min ago" },
  { receipt: "RCPT-9080", name: "Sara Khan", amount: 15000, mode: "Cash", time: "14 min ago" },
  { receipt: "RCPT-9079", name: "Ryan D'Souza", amount: 32000, mode: "Gateway", time: "31 min ago" },
  { receipt: "RCPT-9078", name: "Kabir Menon", amount: 8000, mode: "Cheque", time: "1 hr ago" },
];

export const activity = [
  "AI marked 18 students as likely late for Term 2.",
  "WhatsApp reminder mock queued for Class XI-B.",
  "Receipt PDFs exported for July collection.",
  "Scholarship waiver approved for 12 students.",
];

export const quickActions = [
  { label: "Collect fee", icon: QrCode },
  { label: "Issue receipt", icon: ReceiptText },
  { label: "Send reminders", icon: MailCheck },
  { label: "Export report", icon: FileDown },
];

export const modules = [
  { title: "Admin Dashboard", icon: Building2 },
  { title: "Parent Portal", icon: BookOpen },
  { title: "Scholarships", icon: GraduationCap },
  { title: "Compliance Reports", icon: Landmark },
  { title: "Academic Calendar", icon: CalendarClock },
  { title: "Secure Roles", icon: ShieldCheck },
  { title: "Payment QR", icon: QrCode },
  { title: "Live Notifications", icon: Sparkles },
  { title: "Cash Desk", icon: Banknote },
];
