import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent } from "react";
type InputWithLabelType = {
  label: string;
  type: any; // string | number
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  name?: string;
};
const InputWithLabel = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  defaultValue,
  name,
}: InputWithLabelType) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputWithLabel;
