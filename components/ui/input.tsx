import * as React from "react";

import { cn } from "../../lib/utils";

function Input({
  className,
  type,
  value,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-invalid={props["aria-invalid"]}
      value={value ?? ""}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#B6B7BB] flex h-[52px] w-full min-w-0 border bg-transparent px-4 py-1 text-base  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[#373745]",
        "aria-invalid:border-[#CE2B2B] dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
