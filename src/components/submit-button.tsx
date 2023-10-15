import React from "react";
import { Button } from "./ui/button";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" variant="outline">
      Create
    </Button>
  );
}
