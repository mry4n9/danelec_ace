import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import Stepper4 from "./components/stepper-button";

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

      {/* Main content */}
      <div className="relative flex flex-col px-4 py-4">
        <h2 className="pb-10 text-center">Campaign Setup</h2>
      

      {/* Main content */}
      <div className=" flex flex-col items-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col ">
          {children}
        </div>
      </div>

      <LightDarkToggle className="fixed top-4 right-4" />
    </div>
    </div>
  );
}

{
  /*
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";
import Stepper4 from "./components/stepper-button";

export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[320px_1fr] min-h-screen">
      {/* This is the stepper // remember to comment here
      <div className="flex items-center justify-center overflow-auto">
        <Stepper4 />
      </div>
      <div className="flex flex-col items-center overfow-auto px-4 py-4">
        <h2 className="pb-10">Campaign Setup</h2>
        {children}
      </div>
      <LightDarkToggle className="fixed top-4 right-4" />
    </div>
  );

*/
}
