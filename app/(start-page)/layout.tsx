type Props = {
  children?: React.ReactNode;
};

export default function StartLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col gap-6 min-h-screen items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:p-24">
        {children}
      </div>
    </>
  );
}
