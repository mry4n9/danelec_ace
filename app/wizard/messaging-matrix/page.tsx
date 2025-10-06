"use client";

import { B1, B2, B3, B4 } from "@/app/editor/components/matrix-badges";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

export default function MatrixSelector() {
  return (
    <div className="mt-20">
      <h2>Matrix Ad Variants</h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        Choose which ads to create based on the messaging matrix. Upload or
        toggle to activate quadrants. Select how many ads for each quadrants.
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Card className="min-h-[400px] w-80 flex flex-col">
          <CardHeader>
            <B1 />
            <B3 />
          </CardHeader>
          <CardContent className="flex-grow flex items-center">
            <blockquote className="text-sm ">
              <span className="italic text-[#FF4E2A] ">&quot; </span>Plan and
              perform the most profitable voyages to minimize fuel consumption.
              <span className=" italic text-[#FF4E2A]">&quot;</span>
            </blockquote>
          </CardContent>
          <CardFooter className="mt-auto flex-col gap-3">
            <Separator className="mb-3" />
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-green-400 has-[[aria-checked=true]]:bg-green-50 dark:has-[[aria-checked=true]]:border-green-600 dark:has-[[aria-checked=true]]:bg-green-900">
              <Checkbox
                id="toggle-3"
                defaultChecked
                className="data-[state=checked]:border-green-400 data-[state=checked]:bg-green-400 data-[state=checked]:text-white dark:data-[state=checked]:border-green-600 dark:data-[state=checked]:bg-green-600"
              />
              <div className="grid gap-1 font-normal">
                <p className="text-xs leading-none font-medium">
                  Enable this ad quadrant
                </p>
                <p className="text-muted-foreground text-xs">
                  Choose number of ads to generate
                </p>
                <div className="flex items-center gap-3 w-full">
                  <Slider
                    defaultValue={[2]}
                    max={5}
                    step={1}
                    onValueChange={(val) => {
                      const el = document.getElementById("ads-indicator");
                      if (el) el.textContent = String(val[0]);
                    }}
                  />
                  <span
                    id="ads-indicator"
                    className="text-xs font-medium w-6 text-center"
                  >
                    2
                  </span>
                </div>
              </div>
            </Label>
          </CardFooter>
        </Card>

        <Card className="min-h-[400px] w-80 flex flex-col">
          <CardHeader>
            <B2 />
            <B3 />
          </CardHeader>
          <CardContent className="flex-grow flex items-center">
            <p className="text-sm">
              <span className="italic text-[#FF4E2A]">&quot; </span>Manage when
              to optimally take vessels out of their schedule for inspecting and
              cleaning.<span className="italic text-[#FF4E2A]">&quot; </span>
            </p>
          </CardContent>
          <CardFooter className="mt-auto flex-col gap-3">
            <Separator className="mb-3" />
            <Label className="hover:bg-[#F4CEC5] flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-[#FF4E2A] has-[[aria-checked=true]]:bg-[#F2DED9] dark:hover:bg-[#992F19] dark:has-[[aria-checked=true]]:border-[#FF4E2A] dark:has-[[aria-checked=true]]:bg-[#992F19]">
              <Checkbox
                id="toggle-3"
                defaultChecked
                className="data-[state=checked]:border-[#FF4E2A] data-[state=checked]:bg-[#FF4E2A] data-[state=checked]:text-white dark:data-[state=checked]:border-[#FF4E2A] dark:data-[state=checked]:bg-[#FF4E2A]"
              />
              <div className="grid gap-1 font-normal">
                <p className="text-xs leading-none font-medium">
                  Enable this ad quadrant
                </p>
                <p className="text-muted-foreground text-xs">
                  Choose number of ads to generate
                </p>
                <div className="flex items-center gap-3 w-full">
                  <Slider
                    defaultValue={[2]}
                    max={5}
                    step={1}
                    onValueChange={(val) => {
                      const el = document.getElementById("ads-indicator");
                      if (el) el.textContent = String(val[0]);
                    }}
                  />
                  <span
                    id="ads-indicator"
                    className="text-xs font-medium w-6 text-center"
                  >
                    2
                  </span>
                </div>
              </div>
            </Label>
          </CardFooter>
        </Card>

        <Card className="min-h-[400px] w-80 flex flex-col">
          <CardHeader>
            <B1 />
            <B4 />
          </CardHeader>
          <CardContent className="flex-grow flex items-center">
            <blockquote className="border-l-2 border-[#FF4E2A] pl-4 text-sm ">
              Assess and improve operational performance backed with actionable
              insights and with seamless collaboration among vessel, shore and
              commercial partners.
            </blockquote>
          </CardContent>
          <CardFooter className="mt-auto flex-col gap-3">
            <Separator className="mb-3" />
            <Label className="hover:bg-[#F4CEC5] flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-[#FF4E2A] has-[[aria-checked=true]]:bg-[#F2DED9] dark:hover:bg-[#992F19] dark:has-[[aria-checked=true]]:border-[#FF4E2A] dark:has-[[aria-checked=true]]:bg-[#992F19]">
              <Checkbox
                id="toggle-3"
                defaultChecked
                className="data-[state=checked]:border-[#FF4E2A] data-[state=checked]:bg-[#FF4E2A] data-[state=checked]:text-white dark:data-[state=checked]:border-[#FF4E2A] dark:data-[state=checked]:bg-[#FF4E2A]"
              />
              <div className="grid gap-1 font-normal">
                <p className="text-xs leading-none font-medium">
                  Enable this ad quadrant
                </p>
                <p className="text-muted-foreground text-xs">
                  Choose number of ads to generate
                </p>
                <div className="flex items-center gap-3 w-full">
                  <Slider
                    defaultValue={[2]}
                    max={5}
                    step={1}
                    onValueChange={(val) => {
                      const el = document.getElementById("ads-indicator");
                      if (el) el.textContent = String(val[0]);
                    }}
                  />
                  <span
                    id="ads-indicator"
                    className="text-xs font-medium w-6 text-center"
                  >
                    2
                  </span>
                </div>
              </div>
            </Label>
          </CardFooter>
        </Card>

        <Card className="min-h-[400px] w-80 flex flex-col">
          <CardHeader>
            <B2 />
            <B4 />
          </CardHeader>
          <CardContent className="flex-grow flex items-center">
            <p className="text-sm">
              Simplify reporting processes by streamlining your monitoring and
              documentation, making it more organized and accessible.
            </p>
          </CardContent>
          <CardFooter className="mt-auto flex-col gap-3">
            <Separator className="mb-3" />
            <Label className=" flex items-start gap-3 rounded-lg border p-2  dark:hover:bg-[#992F19] dark:has-[[aria-checked=true]]:border-[#FF4E2A] dark:has-[[aria-checked=true]]:bg-[#992F19]">
              <Checkbox
                id="toggle-3"
                defaultChecked
                className="data-[state=checked]:border-[#FF4E2A] data-[state=checked]:bg-[#FF4E2A] data-[state=checked]:text-white dark:data-[state=checked]:border-[#FF4E2A] dark:data-[state=checked]:bg-[#FF4E2A]"
              />
              <div className="grid gap-1 font-normal">
                <p className="text-xs leading-none font-medium">
                  Enable this ad quadrant
                </p>
                <p className="text-muted-foreground text-xs">
                  Choose number of ads to generate
                </p>
                <div className="flex items-center gap-3 w-full">
                  <Slider
                  className="cursor-pointer" //add cursor pointer
                    defaultValue={[2]}
                    max={5}
                    step={1}
                    onValueChange={(val) => {
                      const el = document.getElementById("ads-indicator");
                      if (el) el.textContent = String(val[0]);
                    }}
                  />
                  <span
                    id="ads-indicator"
                    className="text-xs font-medium w-6 text-center"
                  >
                    2
                  </span>
                </div>
              </div>
            </Label>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
{
  /* This slider is made with AI help */
}
