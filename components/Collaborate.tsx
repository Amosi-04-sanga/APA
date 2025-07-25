"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

const step1Schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
});

const step2Schema = z.object({
  address: z.string().min(1, "Address is required"),
  otherInfo: z.string().optional(),
});

const step3Schema = z.object({
  organization: z.string().optional(),
  position: z.string().optional(),
  reason: z.string().min(1, "Reason for collaboration is required"),
});

const step4Schema = z.object({
  message: z.string().optional(),
});

const allStepsSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);


type AllStepsType = z.infer<typeof allStepsSchema>;

const steps = [
  {
    label: "Personal Info",
    fields: ["fullName", "email", "phone"],
    schema: step1Schema,
  },
  {
    label: "Collaborator Address & Other Info",
    fields: ["address", "otherInfo"],
    schema: step2Schema,
  },
  {
    label: "Collaboration Info",
    fields: ["organization", "position", "reason"],
    schema: step3Schema,
  },
  {
    label: "Additional Information",
    fields: ["message"],
    schema: step4Schema,
  },
];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const methods = useForm<AllStepsType>({
    resolver: zodResolver(allStepsSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      otherInfo: "",
      organization: "",
      position: "",
      reason: "",
      message: "",
    },
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = methods;

  const onNext = async () => {
    const currentStepFields = steps[step].fields;
    const valid = await trigger(currentStepFields as any);
    if (valid) setStep((s) => s + 1);
  };

  const onBack = () => setStep((s) => s - 1);

  const onSubmit = (data: AllStepsType) => {
    setSubmitted(true);
    console.log("Collaboration Request Submitted:", data);
  };

  // Progress bar logic for 4 steps
  const progressPercents = [0, 33, 66, 100];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-2 flex items-center justify-center text-left">
      <div className="w-full max-w-md mx-auto">
        <div className="mb-8 px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#10284A] mb-2">
            We welcome collaboration!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Please fill out this form to connect with the APO organization.
          </p>
        </div>
        {/* Animated Progress Bar */}
        {!submitted && (
          <div className="mb-6">
            <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
              <div
                className="h-2 bg-orange-300 rounded-full transition-all duration-500"
                style={{ width: `${progressPercents[step]}%` }}
              ></div>
            </div>
          </div>
        )}
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 text-[#10284A] text-center">
              Thank you for your passion with us!
            </h2>
            <p className="bg-orange-300 rounded-md p-4 text-center">
              We’ll be in touch shortly to discuss your collaboration request.
            </p>

            {/*
            
            <button onClick={() => setSubmitted(false)} className="text-center cursor-pointer px-2 rounded-md border-[1px] border-[#10284A] mt-4 text-[#10284A]">back</button>
            */}
          </div>
        ) : (
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-6 text-sm text-[#10284A] font-semibold text-center">
                Step {step + 1} of 4: {steps[step].label}
              </div>
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <label className="block font-medium mb-1">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.fullName ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.fullName.message as string}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.email ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message as string}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.phone ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message as string}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block font-medium mb-1">
                      Collaborator Address
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("address")}
                      className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.address ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address.message as string}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Other Useful Information
                    </label>
                    <input
                      type="text"
                      {...register("otherInfo")}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block font-medium mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      {...register("organization")}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Position/Role
                    </label>
                    <input
                      type="text"
                      {...register("position")}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">
                      Reason for Collaboration
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("reason")}
                      className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        errors.reason ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                    {errors.reason && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.reason.message as string}
                      </p>
                    )}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <label className="block font-medium mb-1">
                      Message or Details
                    </label>
                    <textarea
                      {...register("message")}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-8">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={onBack}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition duration-200"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={onNext}
                    className="px-4 py-2 rounded-lg bg-[#4a5b74] text-white font-semibold hover:bg-[#10284A] transition duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        )}
      </div>
    </main>
  );
}
