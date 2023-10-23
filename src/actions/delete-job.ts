"use server";

import { prisma } from "@/lib/prisma";

export default async function deleteJob(data: FormData) {
  const jobId = data.get("jobId") as string;
  await prisma?.jobListing.delete({
    where: {
      id: jobId,
    },
  });
}
