"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AdobeIllustrator, DesignNibSolid, Star } from "iconoir-react";
import Image from "next/image";
import { useMemo } from "react";
import { useWizardStore } from "@/app/wizard/wizard-store/store";

const unsplashImages = [
  "https://images.unsplash.com/photo-1503942142281-94af0aded523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
  "https://images.unsplash.com/photo-1511458206431-afcf3cebe562?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1887",
  "https://images.unsplash.com/photo-1483709898067-9fd28d4da0c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1885",
  "https://images.unsplash.com/photo-1626186032295-5c0d509bbad8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1887",
  "https://images.unsplash.com/photo-1755184635226-8d3ad612e38a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1527",
  "https://images.unsplash.com/photo-1622222754849-f56e440a18ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935",
  "https://images.unsplash.com/photo-1597498450987-e4437f7d56a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1887",
];

// This is new 21 Oct
type AdCardProps = {
  introductoryText: string;
  imageText: string;
  headline: string;
  index: number;
};

export default function AdCard({
  introductoryText,
  imageText,
  headline,
  index,
}: AdCardProps) {
  const isStarred = useWizardStore((state) => state.isStarred(index));
  const toggleStarred = useWizardStore((state) => state.toggleStarred);

  const handleStarClick = () => {
    toggleStarred(index);
  };
  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * unsplashImages.length);
    return unsplashImages[index];
  }, []);
  return (
    <Card className="w-full sm:w-120 bg-[#fcfcfc] dark:bg-neutral-900 h-full flex flex-col">
      <CardHeader className="flex items-center gap-2">
        <Image
          src="/danelec_pp.jpeg"
          alt="Danelec profile picture"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <CardTitle className="font-bold">Danelec</CardTitle>
          <CardDescription className="text-muted-foreground text-xs">
            Promoted
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm">{introductoryText}</p>
      </CardContent>

      <CardContent className="p-0 flex-shrink-0">
        <div className="relative h-95">
          <Image
            src={randomImage}
            alt="random images"
            fill
            className="object-cover"
          />
          <div className="absolute inset-5 flex items-center justify-center">
            <p className="text-white text-xl font-medium">{imageText}</p>
          </div>
          <div className="absolute bottom-6 left-6">
            <Image
              src="/Danelec_Logo_Orange-White.svg"
              alt="Danelec brand"
              width={100}
              height={40}
            />
          </div>
        </div>

        <div className="bg-[#eff6ff] dark:bg-[#334155] px-3 py-2 flex flex-row gap-3 items-center justify-between">
          <p className="font-semibold text-sm text-center text-left">
            {headline}
          </p>
          <Button className="font-medium rounded-full bg-[#eff6ff] dark:bg-[#334155] text-[#3b82f6] dark:text-[#93c5fd] border-1 border-[#3b82f6] dark:border-[#93c5fd]">
            Demo Request
          </Button>
        </div>

        <div className="mt-5 flex h-2 items-center justify-evenly text-muted-foreground ">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#FF4E2A]"
              >
                <AdobeIllustrator className="size-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Recreate with AI</TooltipContent>
          </Tooltip>
          <Separator
            orientation="vertical"
            className="bg-foreground/18"
            style={{ height: "28px", width: "2px" }}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#FF4E2A]"
              >
                <DesignNibSolid className="size-7.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit ad</TooltipContent>
          </Tooltip>
          <Separator
            orientation="vertical"
            className="bg-foreground/18"
            style={{ height: "28px", width: "2px" }}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`group ${
                  isStarred
                    ? "bg-transparent border-0 shadow-none hover:bg-transparent"
                    : "hover:bg-transparent"
                }`}
                onClick={handleStarClick}
              >
                <Star
                  className={`size-7 ${isStarred ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground group-hover:text-[#FF4E2A]"}`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Starred ads will be highlighted in Excel
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
}
