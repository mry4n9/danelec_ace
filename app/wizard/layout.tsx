export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <h1 className="py-8 sm:py-15 sm:text-center text-5xl sm:text-6xl">Campaign Settings</h1>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

{
  /*
export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[320px_1fr] min-h-screen">
      <div className="relative flex flex-col px-4 py-4">
        <h1 className="pb-10 text-center">Campaign Setup (Wizard)</h1>

        <div className=" flex flex-col items-center">
          <div className="mx-auto flex flex-col ">{children}</div>
        </div>
      </div>
    </div>
  );
}
  */
}

{
  /* Working version with removed stepper
export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[320px_1fr] min-h-screen">
      <div className="relative flex flex-col px-4 py-4">
        <h1 className="pb-10 text-center">Campaign Setup (Wizard)</h1>

        <div className=" flex flex-col items-center">
          <div className="mx-auto flex flex-col ">{children}</div>
        </div>
      </div>
    </div>
  );
}
  */
}
