import React from "react";
import ClientJob from "./client-job";
function page() {
  return (
    <div>
      <h1 className="text-[3rem] container py-4">Job Listing</h1>
      <div>
        <ClientJob />
      </div>
    </div>
  );
}

export default page;
