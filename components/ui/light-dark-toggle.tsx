"use client";

import { HalfMoon, SunLight } from "iconoir-react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { useTheme } from "next-themes";

export function LightDarkToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={className}
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          <Button variant="outline" className={className}>
            <HalfMoon className="hidden dark:block" />
            <SunLight className="block dark:hidden" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="hidden dark:inline">Enable Light Mode</span>
          <span className="inline dark:hidden">Enable Dark Mode </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
