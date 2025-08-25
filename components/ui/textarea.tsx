import * as React from "react";

import { cn } from "../../lib/utils";

function Textarea({
  className,
  value,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      value={value ?? ""}
      className={cn(
        "border-[#B6B7BB] placeholder:text-muted-foreground focus-visible:border-[#373745] aria-invalid:border-[#CE2B2B] dark:aria-invalid:ring-destructive/40  dark:bg-input/30 flex field-sizing-content min-h-16 w-full border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
