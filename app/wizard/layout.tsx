import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import StepperButton from "./components/stepper-button";

export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[320px_1fr] min-h-screen">
      <div className="flex items-center justify-center">
        <StepperButton />
      </div>

      <div>{children}</div>
      <LightDarkToggle className="fixed top-4 right-4" />
    </div>
  );
}
