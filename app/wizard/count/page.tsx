import { WizardCountForm } from "../wizard-store/components/count-form";


export default function WizardCountPage() {
  return (
    <div className="">
      <h3 className="">Final Step</h3>
      <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-6 sm:mb-8">
        Select the number of ads to generate for each quadrant. Give the model time to generate when more ads are selected.
      </p>
      <WizardCountForm />
    </div>
  );
}
