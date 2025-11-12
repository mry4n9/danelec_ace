"use client";

import WizardFunnelForm from "../wizard-store/components/funnel-form";

export default function FunnelSelector() {
  return (
    <div>
      <h3 className="">Select Funnel</h3>
      <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-6 sm:mb-8">
        Choose between different funnel stages to create copys for.
      </p>

      <WizardFunnelForm />
    </div>
  );
}

{
  /*
<div>
  <RadioGroup defaultValue="awareness" className="grid grid-cols-1 gap-4">
    {["Brand Awareness", "Demand Generation", "Demand Capture"].map(
      (funnel) => (
        <label key={funnel} className="cursor-pointer">
          <Card className="flex items-center justify-center h-16 w-70 rounded-full data-[state=checked]:bg-[#FF4E2A] bg-foreground dark:bg-neutral-900 hover:bg-[#FF4E2A] dark:hover:bg-[#FF4E2A]">
            <RadioGroupItem
              value={funnel.toLowerCase().replace(" ", "-")}
              className="hidden"
            />
            <span className="text-lg text-white font-medium">{funnel}</span>
          </Card>
        </label>
      )
    )}
  </RadioGroup>
</div>;
*/
}
