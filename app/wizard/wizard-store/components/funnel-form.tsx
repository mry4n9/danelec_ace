import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { wizardSchema } from "../wizardSchema";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { useWizardStore } from "../store";

const wizardFunnelSchema = wizardSchema.pick({
  funnel: true,
});

type WizardFunnelSchema = z.infer<typeof wizardFunnelSchema>;

const funnels = [
  {
    id: "brand awareness",
    title: "Brand Awareness",
    description: "Build brand recognition and reach",
  },
  {
    id: "demand generation",
    title: "Demand Generation",
    description: "Generate interest and leads",
  },
  {
    id: "demand capture",
    title: "Demand Capture",
    description: "Convert existing demand into sales",
  },
] as const;

export default function WizardFunnelForm() {
  const router = useRouter();
  const setData = useWizardStore((state) => state.setData);

  const form = useForm<WizardFunnelSchema>({
    resolver: zodResolver(wizardFunnelSchema),
    defaultValues: {
      funnel: "",
    },
  });

  const onSubmit = (data: WizardFunnelSchema) => {
    setData(data);
    router.push("/wizard/matrix");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-md px-5">
          <Controller
            name="funnel"
            control={form.control}
            render={({ field, fieldState }) => (
              <FieldSet data-invalid={fieldState.invalid}>
                <FieldTitle>Funnel</FieldTitle>
                <FieldDescription>
                  Select your funnel to proceed.
                </FieldDescription>
                <RadioGroup
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                >
                  {funnels.map((funnel) => (
                    <FieldLabel key={funnel.id} htmlFor={`funnel-${funnel.id}`}>
                      <Field
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldContent>
                          <FieldTitle>{funnel.title}</FieldTitle>
                          <FieldDescription>
                            {funnel.description}
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem
                          value={funnel.id}
                          id={`funnel-${funnel.id}`}
                          aria-invalid={fieldState.invalid}
                          className=""
                        />
                      </Field>
                    </FieldLabel>
                  ))}
                </RadioGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldSet>
            )}
          />
        </Card>

        <div className="flex gap-5 justify-center pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/wizard/solution")}
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
