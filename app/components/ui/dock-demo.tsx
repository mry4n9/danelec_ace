"use client";

import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  CloudSync,
  Filter,
  GoogleDocs,
  HomeSimpleDoor,
  MessageText,
  NumberedListLeft,
  OpenSelectHandGesture,
  ViewGrid,
} from "iconoir-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeSimpleDoor, label: "Home" },
    { href: "/wizard", icon: NumberedListLeft, label: "Wizard-setup" },
  ],
  navbar2: [
    {
      href: "/wizard/solution",
      icon: OpenSelectHandGesture,
      label: "Select solution",
    },
    { href: "/wizard/funnel-stage", icon: Filter, label: "Funnel stage" },
    {
      href: "/wizard/messaging-matrix",
      icon: ViewGrid,
      label: "Messaging matrix",
    },
    {
      href: "/wizard/additional-context",
      icon: MessageText,
      label: "Additional context",
    },
  ],
  navbar3: [
    {
      href: "/progressbar",
      icon: CloudSync,
      label: "Progress bar",
    },
    { href: "/editor", icon: GoogleDocs, label: "Edit-page" },
  ],
};

export function DockDemo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          {DATA.navbar2.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          {DATA.navbar3.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
