"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
type JobType = {
  value: string;
  label: string;
};
type Props = {
  value: string;
  setValue: (value: string) => void;
  jobType: JobType[];
};

export function DropDown({ value, setValue, jobType }: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? (
            jobType.find((framework) => framework.value === value)?.label
          ) : (
            <span className="opacity-50">All type jobs</span>
          )}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {jobType.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(current) => {
                  setValue(current === value ? "" : framework.value);
                  setOpen(false);
                }}
              >
                {framework.label}
                {value === framework.value && (
                  <CheckIcon className="ml-auto h-4 opacity-100" />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
