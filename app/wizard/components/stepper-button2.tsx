// app/wizard/components/stepper-button.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { steps } from "./steps";

export default function StepperButton() {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = Math.max(
    0,
    steps.findIndex((s) => pathname?.endsWith(`/wizard/${s.slug}`))
  );
  const currentStep = steps[currentIndex]?.step ?? 1;

  const goPrev = () =>
    currentIndex > 0 && router.push(`/wizard/${steps[currentIndex - 1].slug}`);
  const goNext = () =>
    currentIndex < steps.length - 1 &&
    router.push(`/wizard/${steps[currentIndex + 1].slug}`);

  return (
    <div className="space-y-8 text-left">
      <Stepper value={currentStep} orientation="vertical">
        {steps.map(({ step, slug, title, description }, i) => (
          <StepperItem
            key={slug}
            step={step}
            className="relative items-start not-last:flex-1"
          >
            <StepperTrigger
              asChild
              className="items-start rounded pb-12 last:pb-0"
            >
              <Link href={`/wizard/${slug}`} className="flex items-start">
                <StepperIndicator />
                <div className="mt-0.5 space-y-0.5 px-2">
                  <StepperTitle>{title}</StepperTitle>
                  <StepperDescription>{description}</StepperDescription>
                </div>
              </Link>
            </StepperTrigger>
            {i < steps.length - 1 && (
              <StepperSeparator className="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
            )}
          </StepperItem>
        ))}
      </Stepper>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          className="w-32"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32"
          onClick={goNext}
          disabled={currentIndex === steps.length - 1}
        >
          Next step
        </Button>
      </div>

      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Step {currentIndex + 1} of {steps.length}
      </p>
    </div>
  );
}
