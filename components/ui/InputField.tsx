import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { cn } from "../../lib/utils";
import { Input } from "./input";

interface InputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  classNameItem?: string;
  type?: string;
  autoComplete?: string;
  classNameInput?: string;
  min?: number;
  defaultValue?: number | string;
  step?: string;
}

const InputField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  classNameItem,
  classNameInput,

  type = "text",
  min,
  step,
  ...props
}: InputFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={cn("group", classNameItem)}>
          <div className="grid gap-2 w-full">
            {label && (
              <div className="flex md:flex-row gap-4 w-full justify-between items-center">
                <FormLabel className="text-white">{label}</FormLabel>
              </div>
            )}

            <FormControl>
              <div className="w-full">
                <Input
                  min={min}
                  type={type}
                  step={step}
                  value={field.value ?? ""}
                  aria-invalid={fieldState.invalid}
                  placeholder={placeholder}
                  {...field}
                  {...props}
                  className={cn(
                    "placeholder:text-[#B6B7BB] placeholder:font-rubik placeholder:text-[16px] placeholder:font-medium",
                    classNameInput
                  )}
                />
              </div>
            </FormControl>

            <FormMessage className="text-sm font-medium leading-none text-[#CE2B2B]" />
          </div>

          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};

export default InputField;
