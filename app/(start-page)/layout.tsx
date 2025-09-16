import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function StartLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-6 min-h-screen items-center justify-center p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-4 right-4" />
    </>
  );
}
