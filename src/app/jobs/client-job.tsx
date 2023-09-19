"use client";

import { JobListing } from "@prisma/client";
import { ChangeEvent, useState } from "react";
import InputWithLabel from "./input-job";
import { DropDown } from "@/components/navbar/DropDown";

 type ClientJob = {
  jobs: JobListing[];
};
const initialState = {
  title: "",
  location: "",
  salary: "",
};
const jobType = [
  {
    value: "Full-Time",
    label: "Full-Time",
  },
  {
    value: "Part-Time",
    label: "Part-Time",
  },
];
const ClientJob = () => {
  const [state, setState] = useState(initialState);
  const [value, setValue] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event?.target?.name]: event?.target?.value });
  };
  return (
    <div>
      <div className="grid grid-cols-3 py-12 container">
        <InputWithLabel
          type="text"
          label="Title"
          id="Title"
          placeholder="title..."
          name="title"
          onChange={onChange}
        />
        <InputWithLabel
          type="text"
          label="Location"
          id="Location"
          placeholder="Location..."
          name="location"
          onChange={onChange}
        />
        <InputWithLabel
          type="number"
          label="Salary"
          id="Salary"
          placeholder="minimum salary..."
          value={state.salary}
          name="salary"
          onChange={onChange}
        />
        <div>
          <DropDown value={value} setValue={setValue} jobType={jobType} />
        </div>
      </div>
    </div>
  );
};

export default ClientJob;
