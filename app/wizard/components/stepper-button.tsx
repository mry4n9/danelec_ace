"use client";

import { useState } from "react";
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

const steps = [
  { step: 1, slug: "solution", title: "Step One", description: "Select Solution" },
  { step: 2, slug: "funnel", title: "Step Two", description: "Select Funnel Stage" },
  { step: 3, slug: "messaging-matrix", title: "Step Three", description: "Messaging Matrix" },
  { step: 4, slug: "additional-context", title: "Step Four", description: "Additional Context" },
];

export default function StepperButton() {
  const [currentStep, setCurrentStep] = useState(1); // start on step 2

  const maxStep = steps.length;
  const goPrev = () => setCurrentStep((s) => Math.max(1, s - 1));
  const goNext = () => setCurrentStep((s) => Math.min(maxStep, s + 1));

  return (
    <div className="space-y-8 text-center">
      <Stepper
        value={currentStep} // controlled value
        onValueChange={setCurrentStep} // click on a step updates state
        orientation="vertical"
      >
        {steps.map(({ step, title, description }) => (
          <StepperItem
            key={step}
            step={step}
            className="relative items-start not-last:flex-1"
          >
            <StepperTrigger className="items-start rounded pb-12 last:pb-0 text-left">
              <StepperIndicator />
              <div className="mt-0.5 space-y-0.5 px-2">
                <StepperTitle>{title}</StepperTitle>
                <StepperDescription>{description}</StepperDescription>
              </div>
            </StepperTrigger>

            {step < steps.length && (
              <StepperSeparator className="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
            )}
          </StepperItem>
        ))}
      </Stepper>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          className="w-32"
          onClick={goPrev}
          disabled={currentStep === 1}
        >
          Prev step
        </Button>
        <Button
          variant="outline"
          className="w-32"
          onClick={goNext}
          disabled={currentStep === maxStep}
        >
          Next step
        </Button>
      </div>

      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Step {currentStep} of {maxStep}
      </p>
    </div>
  );
}
