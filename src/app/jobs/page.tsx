import React from "react";
import ClientJob from "./client-job";
import { prisma } from "@/lib/prisma";
async function page() {
  // const jobs = await getAllJobs();
  const jobs = await prisma.jobListing.findMany({});
  return (
    <div>
      <h1 className="text-[3rem] container py-4">Job Listing</h1>
      <div>
        <ClientJob jobs={jobs} />
      </div>
    </div>
  );
}

export default page;
