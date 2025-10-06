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

export default function AdCard() {
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
          When downtime isn&apos;t an option, your data must always be safe and
          compliant. With 20+ years of proven reliability and the
          industry&apos;s highest MTBF, the DM100 VDR G3 ensures safety-critical
          data is always captured — protecting your fleet from detentions,
          fines, and reputational risk.
        </p>
      </CardContent>

      <CardContent className="w-full p-0">
        <div className="px-9 py-15 bg-foreground dark:bg-neutral-300">
          <p className="text-background text-3xl font-bold">
            Reliability you can trust. Compliance you can prove.
          </p>
        </div>

        <div className="bg-[#E9E6E3] dark:bg-[#888888] px-3 py-2 flex flex-row gap-3 items-center justify-between">
          <p className="font-semibold text-sm text-center text-left">
            Request your compliance assessment today
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
