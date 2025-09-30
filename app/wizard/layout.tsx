import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import StepperButton from "./components/stepper-button";
import Stepper4 from "./components/stepper-button";
import { DockDemo } from "../components/ui/dock-demo";

export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[320px_1fr] min-h-screen">
      {/* This is the stepper */}
      <div className="flex items-center justify-center overflow-auto">
        <Stepper4 />
      </div>
      <div className="overfow-auto py-2 px-4">
        <h2 className="pb-4">Campaign Wizard</h2>
        {children}
      </div>
      <LightDarkToggle className="fixed top-4 right-4" />
    </div>
  );
}
