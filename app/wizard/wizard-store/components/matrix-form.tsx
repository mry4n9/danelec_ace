"use client";

import { B1, B2, B3, B4 } from "@/app/editor/components/matrix-badges";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { wizardSchema } from "../wizardSchema";
import { useWizardStore } from "../store";

const wizardMatrixSchema = wizardSchema.pick({
  customInstruction1: true,
  customInstruction2: true,
  customInstruction3: true,
  customInstruction4: true,
});

type WizardMatrixSchema = z.infer<typeof wizardMatrixSchema>;

export default function WizardMatrixForm() {
  const router = useRouter();

  const setData = useWizardStore((state) => state.setData);

  const form = useForm<WizardMatrixSchema>({
    resolver: zodResolver(wizardMatrixSchema),
    defaultValues: {
      customInstruction1: "",
      customInstruction2: "",
      customInstruction3: "",
      customInstruction4: "",
    },
  });

  const onSubmit = (data: WizardMatrixSchema) => {
    setData(data);
    router.push("/wizard/count");
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-fit mx-auto">
          <Card className="w-full min-h-[430px] sm:w-90 flex flex-col">
            <CardHeader>
              <B1 />
              <B3 />
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <div className="grid w-full max-w-sm items-center gap-1">
                <FieldLabel className="text-[#FF4E2A]">
                  This Quadrant is About:
                </FieldLabel>

                <blockquote className="text-sm">
                  Plan and perform the most profitable voyages to minimize fuel
                  consumption.
                </blockquote>
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex-col gap-2">
              <Separator className="mb-3" />
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Upload White Paper</Label>
                <Input
                  id="picture"
                  type="file"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                />
              </div>
              <FieldGroup>
                <Controller
                  name="customInstruction1"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel htmlFor="custom-instruction-3">
                        Custom Instruction
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id="custom-instruction-1"
                        placeholder="Write an optional custom instruction here."
                        className="resize-none"
                      />
                    </Field>
                  )}
                />
              </FieldGroup>
            </CardFooter>
          </Card>

          <Card className="w-full min-h-[430px] sm:w-90 flex flex-col">
            <CardHeader>
              <B2 />
              <B3 />
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <div className="grid w-full max-w-sm items-center gap-1">
                <FieldLabel className="text-[#FF4E2A]">
                  This Quadrant is About:
                </FieldLabel>
                <p className="text-sm">
                  Manage when to optimally take vessels out of their schedule
                  for inspecting and cleaning.
                </p>
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex-col gap-2">
              <Separator className="mb-3" />
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Upload White Paper</Label>
                <Input
                  id="picture"
                  type="file"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                />
              </div>
              <FieldGroup>
                <Controller
                  name="customInstruction2"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel htmlFor="custom-instruction-3">
                        Custom Instruction
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id="custom-instruction-2"
                        placeholder="Write an optional custom instruction here."
                        className="resize-none"
                      />
                    </Field>
                  )}
                />
              </FieldGroup>
            </CardFooter>
          </Card>

          <Card className="w-full min-h-[430px] sm:w-90 flex flex-col">
            <CardHeader>
              <B1 />
              <B4 />
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <blockquote className="border-l-2 border-[#FF4E2A] pl-4 text-sm">
                Assess and improve operational performance backed with
                actionable insights and with seamless collaboration among
                vessel, shore and commercial partners.
              </blockquote>
            </CardContent>
            <CardFooter className="mt-auto flex-col gap-2">
              <Separator className="mb-3" />
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Upload White Paper</Label>
                <Input
                  id="picture"
                  type="file"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                />
              </div>
              <FieldGroup>
                <Controller
                  name="customInstruction3"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel htmlFor="custom-instruction-3">
                        Custom Instruction
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id="custom-instruction-3"
                        placeholder="Write an optional custom instruction here."
                        className="resize-none"
                      />
                    </Field>
                  )}
                />
              </FieldGroup>
            </CardFooter>
          </Card>

          <Card className="w-full min-h-[430px] sm:w-90 flex flex-col">
            <CardHeader>
              <B2 />
              <B4 />
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <div className="grid w-full max-w-sm items-center gap-1">
                <FieldLabel className="text-[#FF4E2A]">
                  This Quadrant is About:
                </FieldLabel>
                <p className="text-sm">
                  Simplify reporting processes by streamlining your monitoring
                  and documentation, making it more organized and accessible.
                </p>
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex-col gap-2">
              <Separator className="mb-3" />
              <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Upload White Paper</Label>
                <Input
                  id="picture"
                  type="file"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                />
              </div>
              <FieldGroup>
                <Controller
                  name="customInstruction4"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel htmlFor="custom-instruction-3">
                        Custom Instruction
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id="custom-instruction-4"
                        placeholder="Write an optional custom instruction here."
                        className="resize-none"
                      />
                    </Field>
                  )}
                />
              </FieldGroup>
            </CardFooter>
          </Card>
        </div>

        <div className="flex gap-5 justify-center pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/wizard/funnel")}
          >
            Back
          </Button>

          <Button
            type="submit"
            className="hover:bg-[#FF4E2A] hover:dark:bg-[#FF4E2A]"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}
