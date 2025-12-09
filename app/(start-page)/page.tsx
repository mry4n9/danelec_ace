import { Button } from "@/components/ui/button";
import { Atom, NavArrowRight } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="mb-1 sm:mb-8 text-balance">
        Welcome to Danelec
        <span className="italic text-[#FF4E2A]">ACE</span>
      </h1>

      {/*<p className="text-lg  mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground">*/}

      <p className="text-base sm:text-lg md:tx_lg max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-6 sm:mb-8)">
        Danelec&apos;s in-house campaign copy tool allows you to create
        ready-to-post campaigns all within a single app.
        <span className="text-foreground"> Danelec</span>
        <span className="italic text-foreground">ACE</span>{" "}
        <span className="text-foreground">(AI Content Engine)</span> streamlines
        the entire process with a{" "}
        <span className="text-foreground">guided, step-by-step workflow</span> -
        to consolidate the whole campaign creation.
      </p>

      <Image
        src="https://images.unsplash.com/photo-1505063885677-21ba33183857?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
        alt="landing image"
        width={670}
        height={100}
        quality={100}
        unoptimized={true}
        className="rounded-3xl shadow-xl object-cover mb-7 h-auto"
        sizes="(max-width: 30px) 100vw, (max-width: 24px) 85vw, 400px"
      />

      <Button
        asChild
        className="group inline-flex items-center gap-2 font-mono text-white border border-transparent dark:bg-neutral-800 hover:bg-[#FF4E2A] hover:dark:bg-[#FF4E2A]"
      >
        <Link href="/wizard/solution">
          <Atom className="size-6 text-[#FF4E2A] group-hover:text-[#ebeff0]" />
          Get Started
          <NavArrowRight />
        </Link>
      </Button>
    </>
  );
}
