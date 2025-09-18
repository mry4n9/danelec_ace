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
        Danelec&apos;s in-house campaign tool allows you to create ready-to-post
        campaigns in minutes.
        <span className="text-foreground"> Danelec</span>
        <span className="italic text-foreground">ACE</span>{" "}
        <span className="text-foreground">(AI Content Engine)</span> streamlines
        the entire process with a{" "}
        <span className="text-foreground">guided, step-by-step workflow</span> -
        brining everything into a single app so you can focus on{" "}
        <span className="text-foreground">strategy</span>, not copy-pasting.
      </p>

      <Button
        asChild
        className="inline-flex items-center gap-2 font-mono text-white border border-transparent dark:bg-neutral-800 "
      >
        <Link href="/wizard">
          <Atom className="size-6 text-[#FF4E2A]" />
          Get Started
          <NavArrowRight />
        </Link>
      </Button>
    </>
  );
}
