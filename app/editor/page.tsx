"use client";

import AdCard from "./components/ad-card";
import DownloadXlsx from "./components/download-button";
import ResetButton from "./components/reset-button";
import { useWizardStore } from "@/app/wizard/wizard-store/store";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoCircle } from "iconoir-react";

export default function EditorPage() {
  const ads = useWizardStore((state) => state.ads);
  const prompt = useWizardStore((state) => state.prompt);

  return (
    <div className="mt-15 min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-2">
        <h1 className="">Edit Page</h1>
        {prompt && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-help">
                <InfoCircle className="size-5 text-muted-foreground hover:text-foreground" />
              </div>
            </TooltipTrigger>
            <TooltipContent
              className="max-w-2xl p-4 text-sm bg-popover text-popover-foreground border shadow-lg [&>svg]:hidden"
              side="bottom"
            >
              <p className="font-semibold mb-2 text-foreground">Full Prompt Sent to Gemini:</p>
              <pre className="whitespace-pre-wrap text-foreground leading-relaxed text-xs overflow-auto max-h-96">
                {prompt}
              </pre>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        On the edit page, users can review the AI-generated ad content and see
        the final look, similar to how it will be shown online.
      </p>
      <div className="fixed top-4 right-18 flex items-center gap-4">
        <ResetButton />
        <DownloadXlsx />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-x-7 gap-y-8 justify-items-center">
        {ads && ads.length > 0 ? (
          ads.map((ad, index) => (
            <AdCard
              key={index}
              introductoryText={ad.introductoryText}
              imageText={ad.imageText}
              headline={ad.headline}
              index={index}
            />
          ))
        ) : (
          <p className="text-muted-foreground">No ads generated yet.</p>
        )}
      </div>
    </div>
  );
}
