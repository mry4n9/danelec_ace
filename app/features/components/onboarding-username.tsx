"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "../onboarding/schema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const onboardingUsernameSchema = onboardingSchema.pick({
  username: true,
  terms: true,
});

type OnboardingUsernameSchema = z.infer<typeof onboardingUsernameSchema>;

export default function OnboardingUsernameForm() {
  const form = useForm<OnboardingUsernameSchema>({
    resolver: zodResolver(onboardingUsernameSchema),
    defaultValues: {
      username: "",
      terms: false,
    },
  });

  const onSubmit = (data: OnboardingUsernameSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[300px] space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>This is your public username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div>
                <FormLabel>I agree to the terms of service.</FormLabel>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
}
