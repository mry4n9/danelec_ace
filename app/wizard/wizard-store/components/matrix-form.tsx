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
import { useState } from "react";
import { CheckCircle } from "iconoir-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const wizardMatrixSchema = wizardSchema.pick({
  customInstruction1: true,
  customInstruction2: true,
  customInstruction3: true,
  customInstruction4: true,
  whitePaper1: true,
  whitePaper2: true,
  whitePaper3: true,
  whitePaper4: true,
});

type WizardMatrixSchema = z.infer<typeof wizardMatrixSchema>;

export default function WizardMatrixForm() {
  const router = useRouter();

  const setData = useWizardStore((state) => state.setData);

  const [uploadingStates, setUploadingStates] = useState({
    whitePaper1: false,
    whitePaper2: false,
    whitePaper3: false,
    whitePaper4: false,
  });

  const form = useForm<WizardMatrixSchema>({
    resolver: zodResolver(wizardMatrixSchema),
    defaultValues: {
      customInstruction1: "",
      customInstruction2: "",
      customInstruction3: "",
      customInstruction4: "",
      whitePaper1: "",
      whitePaper2: "",
      whitePaper3: "",
      whitePaper4: "",
    },
  });

  // Watch form values to track completed summaries
  const whitePaper1Value = form.watch("whitePaper1");
  const whitePaper2Value = form.watch("whitePaper2");
  const whitePaper3Value = form.watch("whitePaper3");
  const whitePaper4Value = form.watch("whitePaper4");

  const handleFileUpload = async (
    file: File,
    fieldName: "whitePaper1" | "whitePaper2" | "whitePaper3" | "whitePaper4"
  ) => {
    if (!file || file.type !== "application/pdf") {
      alert("Please upload a PDF file");
      return;
    }

    setUploadingStates((prev) => ({ ...prev, [fieldName]: true }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/gemini/summarize-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to summarize PDF");
      }

      const { summary } = await response.json();
      form.setValue(fieldName, summary);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to summarize PDF. Please try again.");
    } finally {
      setUploadingStates((prev) => ({ ...prev, [fieldName]: false }));
    }
  };

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
                <Label
                  htmlFor="whitePaper1"
                  className={`flex items-center gap-2 ${
                    whitePaper1Value && !uploadingStates.whitePaper1
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {whitePaper1Value && !uploadingStates.whitePaper1 ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 cursor-help">
                          <CheckCircle className="size-4 text-green-600" />
                          <span>White Paper Uploaded and Summarized</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        className="max-w-lg p-4 text-sm bg-popover text-popover-foreground border shadow-lg"
                        
                      >
                        <p className="font-semibold mb-2 text-foreground">Summary:</p>
                        <p className="whitespace-pre-wrap text-foreground leading-relaxed">{whitePaper1Value}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    "Upload White Paper"
                  )}
                </Label>
                <Input
                  id="whitePaper1"
                  type="file"
                  accept="application/pdf"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                  disabled={uploadingStates.whitePaper1}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileUpload(file, "whitePaper1");
                    }
                  }}
                />
                {uploadingStates.whitePaper1 && (
                  <p className="text-sm text-muted-foreground">
                    Summarizing PDF...
                  </p>
                )}
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
                <Label
                  htmlFor="whitePaper2"
                  className={`flex items-center gap-2 ${
                    whitePaper2Value && !uploadingStates.whitePaper2
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {whitePaper2Value && !uploadingStates.whitePaper2 ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 cursor-help">
                          <CheckCircle className="size-4 text-green-600" />
                          <span>White Paper Uploaded and Summarized</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        className="max-w-lg p-4 text-sm bg-popover text-popover-foreground border shadow-lg"
                        side="right"
                      >
                        <p className="font-semibold mb-2 text-foreground">Summary:</p>
                        <p className="whitespace-pre-wrap text-foreground leading-relaxed">{whitePaper2Value}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    "Upload White Paper"
                  )}
                </Label>
                <Input
                  id="whitePaper2"
                  type="file"
                  accept="application/pdf"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                  disabled={uploadingStates.whitePaper2}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileUpload(file, "whitePaper2");
                    }
                  }}
                />
                {uploadingStates.whitePaper2 && (
                  <p className="text-sm text-muted-foreground">
                    Summarizing PDF...
                  </p>
                )}
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
                <Label
                  htmlFor="whitePaper3"
                  className={`flex items-center gap-2 ${
                    whitePaper3Value && !uploadingStates.whitePaper3
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {whitePaper3Value && !uploadingStates.whitePaper3 ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 cursor-help">
                          <CheckCircle className="size-4 text-green-600" />
                          <span>White Paper Uploaded and Summarized</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        className="max-w-lg p-4 text-sm bg-popover text-popover-foreground border shadow-lg"
                        side="right"
                      >
                        <p className="font-semibold mb-2 text-foreground">Summary:</p>
                        <p className="whitespace-pre-wrap text-foreground leading-relaxed">{whitePaper3Value}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    "Upload White Paper"
                  )}
                </Label>
                <Input
                  id="whitePaper3"
                  type="file"
                  accept="application/pdf"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                  disabled={uploadingStates.whitePaper3}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileUpload(file, "whitePaper3");
                    }
                  }}
                />
                {uploadingStates.whitePaper3 && (
                  <p className="text-sm text-muted-foreground">
                    Summarizing PDF...
                  </p>
                )}
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
                <Label
                  htmlFor="whitePaper4"
                  className={`flex items-center gap-2 ${
                    whitePaper4Value && !uploadingStates.whitePaper4
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {whitePaper4Value && !uploadingStates.whitePaper4 ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 cursor-help">
                          <CheckCircle className="size-4 text-green-600" />
                          <span>White Paper Uploaded and Summarized</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        className="max-w-lg p-4 text-sm bg-popover text-popover-foreground border shadow-lg"
                        side="right"
                      >
                        <p className="font-semibold mb-2 text-foreground">Summary:</p>
                        <p className="whitespace-pre-wrap text-foreground leading-relaxed">{whitePaper4Value}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    "Upload White Paper"
                  )}
                </Label>
                <Input
                  id="whitePaper4"
                  type="file"
                  accept="application/pdf"
                  className="hover:bg-gray-400 bg-gray-300 cursor-pointer"
                  disabled={uploadingStates.whitePaper4}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleFileUpload(file, "whitePaper4");
                    }
                  }}
                />
                {uploadingStates.whitePaper4 && (
                  <p className="text-sm text-muted-foreground">
                    Summarizing PDF...
                  </p>
                )}
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
