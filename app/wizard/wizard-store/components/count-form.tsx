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
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const wizardCountSchema = wizardSchema.pick({
  count: true,
});

type WizardCountSchema = z.infer<typeof wizardCountSchema>;

export function WizardCountForm() {
  const router = useRouter();

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
  const count = useWizardStore((state) => state.count);

  const form = useForm<WizardCountSchema>({
    resolver: zodResolver(wizardCountSchema),
    defaultValues: {
      count: "",
    },
  });

  const onSubmit = (data: WizardCountSchema) => {
    console.log({
      ...data,
      solution,
      subSolution,
      funnel,
      customInstruction1,
      customInstruction2,
      customInstruction3,
      customInstruction4,
    });
  };

 

  return (
    <div className="">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full sm:max-w-lg px-5">
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
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}


 {/*useEffect(() => {
    if (!useWizardStore.persist.hasHydrated) return;

    if (
      !solution ||
      !subSolution ||
      !funnel ||
      !customInstruction1 ||
      !customInstruction2 ||
      !customInstruction3 ||
      !customInstruction4
    )
      router.push("/wizard/solution");
  }, [
    useWizardStore.persist.hasHydrated,
    solution,
    subSolution,
    funnel,
    customInstruction1,
    customInstruction2,
    customInstruction3,
    customInstruction4,
    router,
  ]); */}