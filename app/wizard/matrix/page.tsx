import WizardMatrixForm from "../wizard-store/components/matrix-form";

export default function WizardCountPage() {
  return (
    <div>
      <h3 className="">Messaging Matrix Ad Variants</h3>
      <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-6 sm:mb-8">
        Final step! Here you can upload white papers in PDF format to give the
        model additional context. Additionally, you can give the model a custom
        instruction to control the model output.
      </p>
      <WizardMatrixForm />
    </div>
  );
}
