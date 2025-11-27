"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { wizardSchema } from "../wizardSchema";
import { useWizardStore } from "../store";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";

const wizardCountSchema = wizardSchema.pick({
  count: true,
});

type WizardCountSchema = z.infer<typeof wizardCountSchema>;

export function WizardCountForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const solution = useWizardStore((state) => state.solution);
  const subSolution = useWizardStore((state) => state.subSolution);
  const funnel = useWizardStore((state) => state.funnel);
  const customInstruction1 = useWizardStore(
    (state) => state.customInstruction1
  );
  const customInstruction2 = useWizardStore(
    (state) => state.customInstruction2
  );
  const customInstruction3 = useWizardStore(
    (state) => state.customInstruction3
  );
  const customInstruction4 = useWizardStore(
    (state) => state.customInstruction4
  );
  const whitePaper1 = useWizardStore((state) => state.whitePaper1);
  const whitePaper2 = useWizardStore((state) => state.whitePaper2);
  const whitePaper3 = useWizardStore((state) => state.whitePaper3);
  const whitePaper4 = useWizardStore((state) => state.whitePaper4);

  const form = useForm<WizardCountSchema>({
    resolver: zodResolver(wizardCountSchema),
    defaultValues: {
      count: "",
    },
  });

  const onSubmit = async (data: WizardCountSchema) => {
    setIsSubmitting(true);
    const setData = useWizardStore.getState().setData;
    const setAds = useWizardStore.getState().setAds;

    // Save count to store
    setData({ count: data.count });

    // Prepare API request payload
    const payload = {
      solution,
      subSolution,
      funnel,
      customInstruction1: customInstruction1 || "",
      customInstruction2: customInstruction2 || "",
      customInstruction3: customInstruction3 || "",
      customInstruction4: customInstruction4 || "",
      whitePaper1: whitePaper1 || "",
      whitePaper2: whitePaper2 || "",
      whitePaper3: whitePaper3 || "",
      whitePaper4: whitePaper4 || "",
      count: data.count,
    };

    try {
      // Call Gemini API
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to generate ads");
      }

      const { results, prompt } = await response.json();
      
      // Save ads and prompt to store
      setAds(results);
      if (prompt) {
        const setPrompt = useWizardStore.getState().setPrompt;
        setPrompt(prompt);
      }

      // Route to editor page
      router.push("/editor");
    } catch (error) {
      console.error("Error generating ads:", error);
      // Still route to editor even if there's an error
      router.push("/editor");
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <div className="flex justify-center">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full sm:w-100 px-5">
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <div>
                  <Field>
                    <FieldLabel>Select number of ads</FieldLabel>
                    <FieldDescription>
                      Each messaging matrix will be generated. placeholder
                      text....
                    </FieldDescription>
                    <Controller
                      name="count"
                      control={form.control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger id="checkout-exp-month-ts6">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">01</SelectItem>
                            <SelectItem value="2">02</SelectItem>
                            <SelectItem value="3">03</SelectItem>
                            <SelectItem value="4">04</SelectItem>
                            <SelectItem value="5">05</SelectItem>
                            <SelectItem value="6">06</SelectItem>
                            <SelectItem value="7">07</SelectItem>
                            <SelectItem value="8">08</SelectItem>
                            <SelectItem value="9">09</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </Card>

        <div className="flex gap-5 justify-center pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/wizard/matrix")}
          >
            Back
          </Button>

          <Button
            type="submit"
            className="hover:bg-[#FF4E2A] hover:dark:bg-[#FF4E2A]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Generating..." : "Generate"}
          </Button>
        </div>
      </form>
    </div>
  );
}


