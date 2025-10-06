import { Button } from "@/components/ui/button";
import { Atom, NavArrowRight } from "iconoir-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="font-mono mb-6 text-balance">
        Welcome to Danelec
        <span className="italic text-[#FF4E2A]">ACE</span>
      </h1>

      <p className="text-lg  mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        Danelec&apos;s in-house campaign copy tool allows you to create
        ready-to-post campaigns all within a single app.
        <span className="text-foreground"> Danelec</span>
        <span className="italic text-foreground">ACE</span>{" "}
        <span className="text-foreground">(AI Content Engine)</span> streamlines
        the entire process with a{" "}
        <span className="text-foreground">guided, step-by-step workflow</span> -
        to consolidate the whole campaign creation.
      </p>

      <Button
        asChild
        className="group inline-flex items-center gap-2 font-mono text-white border border-transparent dark:bg-neutral-800 hover:bg-[#FF4E2A] hover:dark:bg-[#FF4E2A]"
      >
        <Link href="/wizard">
          <Atom className="size-6 text-[#FF4E2A] group-hover:text-[#ebeff0]" />
          Get Started
          <NavArrowRight />
        </Link>
      </Button>
      {/* <Button
        asChild
        className="inline-flex items-center gap-2 font-mono text-white hover:text-[#331714] border border-transparent dark:bg-neutral-800 hover:bg-[#F1EEEC] hover:dark:bg-[#FF4E2A]"
      >
        <Link href="/wizard">
          <Atom className="size-6 text-[#FF4E2A]" />
          Get Started
          <NavArrowRight />
        </Link>
      </Button> */}
    </>
  );
}
