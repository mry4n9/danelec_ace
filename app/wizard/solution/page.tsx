import WizardSolutionForm from "../wizard-store/components/solution-form";

export default function WizardSolutionPage() {
  return (
    <div>
      <h3 className="">Select Solution</h3>
      <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-6 sm:mb-8">
        Choose a Danelec solution to campaign.
      </p>
      <WizardSolutionForm />
    </div>
  );
}
