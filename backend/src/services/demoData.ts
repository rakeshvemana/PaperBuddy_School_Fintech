import { PaymentMethod, PaymentStatus, Role } from "@prisma/client";

export const dashboardMetrics = {
  revenueCollected: 8470000,
  pendingFees: 1290000,
  todaysCollection: 342000,
  totalStudents: 4826,
  reminderRecoveryRate: 31,
};

export const demoStudents = [
  {
    id: "STU-1048",
    admissionNumber: "STU-1048",
    rollNumber: "18",
    name: "Ananya Rao",
    className: "X",
    section: "A",
    guardianName: "Meera Rao",
    guardianPhone: "+91 98765 11048",
    due: 0,
    status: PaymentStatus.PAID,
  },
  {
    id: "STU-1186",
    admissionNumber: "STU-1186",
    rollNumber: "07",
    name: "Kabir Menon",
    className: "VIII",
    section: "C",
    guardianName: "Rohan Menon",
    guardianPhone: "+91 98765 11186",
    due: 18400,
    status: PaymentStatus.PARTIAL,
  },
  {
    id: "STU-1302",
    admissionNumber: "STU-1302",
    rollNumber: "24",
    name: "Vihaan Iyer",
    className: "VII",
    section: "A",
    guardianName: "Lakshmi Iyer",
    guardianPhone: "+91 98765 11302",
    due: 27400,
    status: PaymentStatus.PENDING,
  },
];

export const demoPayments = [
  { receiptNo: "RCPT-9081", studentName: "Ananya Rao", amount: 42000, method: PaymentMethod.UPI, status: PaymentStatus.PAID },
  { receiptNo: "RCPT-9080", studentName: "Sara Khan", amount: 15000, method: PaymentMethod.CASH, status: PaymentStatus.PAID },
  { receiptNo: "RCPT-9079", studentName: "Ryan D'Souza", amount: 32000, method: PaymentMethod.ONLINE_GATEWAY, status: PaymentStatus.PAID },
];

export const demoRoles = Object.values(Role);
