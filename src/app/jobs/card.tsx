"use client";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
type Card = {
  id: string;
  title: string;
  companyName: string;
  salary: string;
  location: string;
  type: string;
  desc: string;
};
export default function Card({
  id,
  title,
  companyName,
  salary,
  location,
  type,
  desc,
}: Card) {
  const router = useRouter();
  return (
    <div className="w-[600px] min-h-[240px] shadow-lg shadow-slate-700 flex flex-col p-4 border-4">
      <div>
        <h1 className="text-[2rem]">{title}</h1>
        <div className="flex items-center gap-4 text-neutral-50">
          <span>{companyName}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="my-5 flex items-center gap-5">
        <span className="rounded-2xl  bg-neutral-500 p-2">$ {salary}</span>
        <span className="rounded-2xl bg-neutral-500 p-2 px-4">{type}</span>
      </div>
      <p className="text-lg">{desc}</p>
      <div className="pt-6 ml-auto mr-2 flex gap-4">
        <form action="">
          <input type="hidden" name="jobId" value={id} id="jobId" />
          <SubmitButton />
        </form>
        <Button onClick={() => router.push(`/jobs/${id}`)}>View More</Button>
      </div>
    </div>
  );
}
