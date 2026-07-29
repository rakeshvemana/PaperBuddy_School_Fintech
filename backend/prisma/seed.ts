import { PrismaClient, Role, PaymentMethod, PaymentStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);
  const school = await prisma.school.upsert({
    where: { id: "demo-school" },
    update: {},
    create: {
      id: "demo-school",
      name: "Greenfield International School",
      academicYear: "2026-27",
      address: "Hyderabad, Telangana",
    },
  });

  await prisma.user.upsert({
    where: { email: "admin@paperbuddy.app" },
    update: {},
    create: {
      schoolId: school.id,
      name: "Rakesh Vemana",
      email: "admin@paperbuddy.app",
      phone: "+91 98765 43210",
      passwordHash,
      role: Role.ADMIN,
    },
  });

  const classX = await prisma.schoolClass.create({
    data: { schoolId: school.id, name: "X", sections: { create: { name: "A" } } },
    include: { sections: true },
  });

  const student = await prisma.student.create({
    data: {
      sectionId: classX.sections[0].id,
      admissionNumber: "STU-1048",
      rollNumber: "18",
      name: "Ananya Rao",
      guardianName: "Meera Rao",
      guardianPhone: "+91 98765 11048",
      email: "parent@paperbuddy.app",
      address: "Banjara Hills, Hyderabad",
    },
  });

  const tuition = await prisma.feeHead.create({ data: { schoolId: school.id, name: "Tuition Fee", amount: 36000 } });
  const transport = await prisma.feeHead.create({ data: { schoolId: school.id, name: "Transport Fee", amount: 6000 } });

  const invoice = await prisma.invoice.create({
    data: {
      studentId: student.id,
      invoiceNo: "INV-2026-0001",
      dueDate: new Date("2026-08-10"),
      status: PaymentStatus.PAID,
      subtotal: 42000,
      total: 42000,
      fees: { create: [{ feeHeadId: tuition.id, amount: 36000 }, { feeHeadId: transport.id, amount: 6000 }] },
    },
  });

  const payment = await prisma.payment.create({
    data: {
      studentId: student.id,
      invoiceId: invoice.id,
      receiptNo: "RCPT-9081",
      amount: 42000,
      method: PaymentMethod.UPI,
      transactionRef: "UPI-DEMO-246810",
    },
  });

  await prisma.receipt.create({ data: { paymentId: payment.id, pdfUrl: "/receipts/RCPT-9081.pdf", emailedAt: new Date() } });
}

main().finally(async () => prisma.$disconnect());
