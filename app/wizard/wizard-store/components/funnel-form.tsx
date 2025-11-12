import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <div className="">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Field>
          <Card className="w-full max-w-md px-5">
            <FieldLabel>Funnel</FieldLabel>
            <Controller
              name="funnel"
              control={form.control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a funnel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brand-awareness placefifoef">
                      Brand Awareness
                    </SelectItem>
                    <SelectItem value="demand-generation fwe ewfaf">
                      Demand Generation
                    </SelectItem>
                    <SelectItem value="demand-capturef.  efef ea">
                      Demand Capture
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            <FieldDescription>Select your funnel to proceed.</FieldDescription>
          </Card>
        </Field>

        <div className="flex gap-5 justify-center pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/wizard/solution3")}
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
