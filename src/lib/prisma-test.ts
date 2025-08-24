import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function getEntries() {
  const entries = await prisma.entries.findMany();
  console.log(entries);

  return entries;
}
