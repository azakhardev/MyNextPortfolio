import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function getLogs() {
  const entries = await prisma.logs.findMany();
  console.log(entries);

  return entries;
}
