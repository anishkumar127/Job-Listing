import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const job = await prisma?.jobListing?.findUnique({
    where: {
      id: params?.id,
    },
  });
  return (
    <div>
      <div className="container p-12 space-y-7">
        <h1 className="text-[4rem]">{job?.title}</h1>
        <div className="flex gap-4 items-center">
          <p className="text-[1.2rem]">{job?.companyName}</p>
          <p className="text-neutral-500">{job?.location}</p>
          <p className="text-neutral-500">{job?.type}</p>
          <p className="bg-white text-black inline p-3  px-5 rounded-full">
            {job?.salary}
          </p>
        </div>
      <div>
        <p className="font-bold">
          Please apply using apply button and if you want to go listings, use
          the back button
        </p>
        <div className="flex items-center gap-4 py-4">
          <Link href="/jobs" className="py-2 px-5 bg-neutral-600 rounded-full ">
            Back
          </Link>
          <Link
            href="https://www.google.com"
            target="_blank"
            className="py-2 px-5 bg-neutral-200 text-zinc-800  rounded-full"
          >
            Apply
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
