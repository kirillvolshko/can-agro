"use client";
import z from "zod";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./ui/InputField";
import { Button } from "./ui/button";
import validator from "validator";
import TextareaField from "./ui/TextAreaField";
import { toast } from "sonner";
import { cn } from "../lib/utils";
import { forwardRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

const ContactUsSchema = z.object({
  name: z.string("Invalid"),
  subject: z.string("Invalid"),
  phone: z.string("Invalid phone").refine(validator.isMobilePhone),
  email: z.email("Invalid email"),
  message: z.string(),
});

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type FormValues = z.infer<typeof ContactUsSchema>;
const ContactUs = forwardRef<HTMLElement>((props, ref) => {
  const [check, setCheck] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(ContactUsSchema),
  });

  const handleOnSubmit = async (data: FormValues) => {
    if (!recaptchaToken) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      console.log(result);

      if (!result.success) {
        toast(result.error || "Server error");
        return;
      }
      if (result.success) {
        toast(result.message || "Message sent successfully.");
        form.reset();
        setCheck(false);
        recaptchaRef.current?.reset();
        setCaptchaVerified(false);
        setRecaptchaToken(null);
      } else {
        toast(!result.success || "Error sending message.");
      }
    } catch (error) {
      toast("Network error or server is unreachable.");
    }
  };

  return (
    <section
      ref={ref}
      id="target-block"
      className="pb-[100px] md:pb-[120px] px-5 md:px-[150px] "
    >
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <p className="font-play font-bold text-[44px] text-[#373745] md:max-w-[755px]">
          Please <span className="text-[#618C85]">send</span> us a message and
          we’ll get in touch soon
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleOnSubmit)}
            className="max-w-[624px] md:min-w-[624px]"
          >
            <div className="flex flex-col gap-6 w-full">
              <InputField
                control={form.control}
                name="name"
                placeholder="Name"
                classNameInput="w-full"
              />
              <InputField
                control={form.control}
                name="phone"
                placeholder="Phone"
              />
              <InputField
                control={form.control}
                name="email"
                placeholder="Email"
              />
              <InputField
                control={form.control}
                name="subject"
                placeholder="Subject"
              />
              <TextareaField
                control={form.control}
                name="message"
                placeholder="Message"
              />
              <div className="flex gap-2.5 items-center">
                <div
                  className={cn(
                    "h-5 w-5 border rounded-[4px] flex items-center justify-center",
                    check ? "bg-[#07695A] border-[#07695A]" : "border-[#373745]"
                  )}
                  onClick={() => setCheck((prev) => !prev)}
                >
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 1L3.5 6L1.5 4"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-rubik font-medium text-[14px]">
                  By clicking the button, I agree to the{" "}
                  <span className="text-[#618C85]">privacy policy</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center  mt-10 md:flex-row md:items-end gap-2">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={(token) => {
                  setCaptchaVerified(!!token);
                  setRecaptchaToken(token);
                }}
              />
              <Button
                type="submit"
                className="w-full mb-0.5 mt-10 md:w-[213px] bg-[#618C85] hover:bg-[linear-gradient(to_top,_#376760,_#618C85)] cursor-pointer rounded-[2px] py-[25px] font-rubik font-bold text-[16px] uppercase items-center"
                disabled={!(captchaVerified && check)}
              >
                Send message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
});

ContactUs.displayName = "ContactUs";
export default ContactUs;
