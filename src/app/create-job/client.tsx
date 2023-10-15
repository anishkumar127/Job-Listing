"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import InputWithLabel from "../jobs/input-job";
import { DropDown } from "@/components/DropDown";

const initialState = {
  title: "",
  companyName: "",
  location: "",
  salary: "",
  type: "",
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
export default function CreateJobClient() {
  const [value, setValue] = useState("");
  const [state, setState] = useState({ ...initialState, type: "" });

  useEffect(() => {
    setState((prev) => ({ ...prev, type: value }));
  }, [value]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form action="" className="container grid-cols-4 gap-12">
        <InputWithLabel
          type="text"
          label="title"
          id="title"
          placeholder="title..."
          name="title"
          onChange={onChange}
          value={state.title}
        />
        <InputWithLabel
          type="text"
          label="companyName"
          id="companyName"
          placeholder="companyName"
          name="companyName"
          onChange={onChange}
          value={state.companyName}
        />
        <InputWithLabel
          type="text"
          label="location"
          id="location"
          placeholder="location..."
          name="location"
          onChange={onChange}
          value={state.location}
        />
        <InputWithLabel
          type="text"
          label="salary"
          id="salary"
          placeholder="salary"
          value={state.salary}
          name="salary"
          onChange={onChange}
        />
        <input type="hidden" value={value} name="type" onChange={onChange}/>
        <DropDown value={value} setValue={setValue} jobType={jobType} />
      </form>
    </div>
  );
}
