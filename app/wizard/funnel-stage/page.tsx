import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FunnelSelector() {
  return (
    <div className="mt-20">
      <h2>Select Funnel</h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        Choose between different funnel stages to create copys for.
      </p>
      <div className="">
      <RadioGroup>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="Brand Awareness" id="r1" />
          <Label htmlFor="r1">Brand Awareness</Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="Demand Generation" id="r2" />
          <Label htmlFor="r2">Demand Generation</Label>
        </div>

        <div className="flex items-center gap-3">
          <RadioGroupItem value="Demand Capture" id="r3" />
          <Label htmlFor="r3">Demand Capture</Label>
        </div>
      </RadioGroup>
      </div>
    </div>
  );
}

{
  /* OpenAI with card component
"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const OPTIONS = [
  {
    id: "awareness",
    value: "awareness",
    label: "Brand Awareness",
    desc: "Top of funnel visibility",
  },
  {
    id: "gen",
    value: "gen",
    label: "Demand Generation",
    desc: "Nurture with content",
  },
  {
    id: "cap",
    value: "cap",
    label: "Demand Capture",
    desc: "Convert existing demand",
  },
]

export default function FunnelSelector() {
  const [value, setValue] = useState("")

  return (
    <RadioGroup
      value={value}
      onValueChange={setValue}
      className="grid gap-4 md:grid-cols-3"
    >
      {OPTIONS.map((opt) => (
        <Label
          key={opt.id}
          htmlFor={opt.id}
          className="cursor-pointer"
        >
          <Card
            className={`h-full transition ${
              value === opt.value
                ? "border-primary ring-2 ring-primary"
                : "hover:border-muted-foreground"
            }`}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  id={opt.id}
                  value={opt.value}
                  className="sr-only"
                />
                <CardTitle>{opt.label}</CardTitle>
              </div>
              <CardDescription>{opt.desc}</CardDescription>
            </CardHeader>
          </Card>
        </Label>
      ))}
    </RadioGroup>
  )
}
*/
}

{
  /* My version, I am trying to use the form example from shadcn
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a funnel.",
  }),
});

export default function FunnelSelector() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You have selected the following funnel", {
      description: (
        <pre className="mt-2 w-[32px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return <RadioGroup></RadioGroup>;
}
  */
}

{
  /*"use client" From shadcn, advanced

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

export function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col"
                >
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-3">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
 */
}

{
  /* From Shadcn
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}
*/
}

{
  /* From OpenAI
    "use client";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FUNNEL_OPTIONS = [
  { id: "awareness", label: "Brand Awareness", desc: "Top of funnel visibility" },
  { id: "demand-gen", label: "Demand Generation", desc: "Nurture with content" },
  { id: "demand-cap", label: "Demand Capture", desc: "Convert existing demand" },
];

export default function FunnelSelector() {
  const [stage, setStage] = useState("");

  return (
    <RadioGroup
      value={stage}
      onValueChange={setStage}
      className="grid gap-4 md:grid-cols-3"
    >
      {FUNNEL_OPTIONS.map((opt) => (
        <div
          key={opt.id}
          className="flex flex-col items-start gap-2 rounded-2xl border p-6 hover:bg-muted"
        >
          <RadioGroupItem id={opt.id} value={opt.id} />
          <Label htmlFor={opt.id} className="text-lg font-semibold">
            {opt.label}
          </Label>
          <p className="text-sm text-muted-foreground">{opt.desc}</p>
        </div>
      ))}
    </RadioGroup>
  );
}
*/
}
