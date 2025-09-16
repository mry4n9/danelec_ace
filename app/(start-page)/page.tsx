import { Button } from "@/components/ui/button";
import { Atom, NavArrowRight } from "iconoir-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="font-mono">Welcome to Danelec ACE</h1>

      <p>
        Create ready-to-post campaigns in minutes. Danelec AI Content Engine
        (ACE) streamlines the entire process with a guided, step-by-step
        workflow - brining everything into a single app so you can focus on
        strategy, not copy-pasting.
      </p>

      <Button asChild className="inline-flex items-center gap-2 font-mono">
        <Link href="/wizard">
          <Atom className="size-6 text-teal-300 dark:text-teal-500" />
          Get Started
          <NavArrowRight />
        </Link>
      </Button>
    </>
  );
}
