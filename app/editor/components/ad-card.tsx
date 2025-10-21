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


// This is new 21 Oct
type AdCardProps = {
  introductoryText: string;
  imageText: string;
  headline: string;
};

export default function AdCard({
  introductoryText,
  imageText,
  headline,
}: AdCardProps) {

  return (
    <Card className="w-90 bg-[#FAF9F9] dark:bg-neutral-900">
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

      <CardContent>
        <p className="text-sm">
          {introductoryText}
        </p>
      </CardContent>

      <CardContent className="w-full p-0">
        <div className="px-9 py-15 bg-foreground dark:bg-neutral-300">
          <p className="text-background text-3xl font-bold">
            {imageText}
          </p>
        </div>

        <div className="bg-[#E9E6E3] dark:bg-[#888888] px-3 py-2 flex flex-row gap-3 items-center justify-between">
          <p className="font-semibold text-sm text-center text-left">
            {headline}
          </p>
          <Button className="font-medium rounded-full bg-[#998B8A] dark:bg-[#333333] text-white">Demo Request</Button>
        </div>

        <div className="mt-5 flex h-5 items-center justify-evenly text-muted-foreground ">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-[#FF4E2A]">
                <AdobeIllustrator className="size-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Recreate with AI</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="bg-foreground/30" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-[#FF4E2A]">
                <DesignNibSolid className="size-7.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit ad</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="bg-foreground/30" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-[#FF4E2A]">
                <Star className="size-7" />
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
