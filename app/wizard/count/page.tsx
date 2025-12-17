import { WizardCountForm } from "../wizard-store/components/count-form";


export default function WizardCountPage() {
  return (
    <div className="">
      <h3 className="">Select Number of Ads</h3>
      <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-6 sm:mb-8">
        Select how many ads to generate for each message quadrant.
      </p>
      <WizardCountForm />
    </div>
  );
}
