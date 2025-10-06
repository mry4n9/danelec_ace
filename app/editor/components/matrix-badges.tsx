import { Badge } from "@/components/ui/badge";
import {
  CompassSolid,
  DropletSolid,
  FillColorSolid,
  FlashSolid,
} from "iconoir-react";

export function B1() {
  return (
    <Badge className="bg-[#F1EEEC] dark:bg-[#BDB6B0] text-[#331714]">
      <DropletSolid className="text-[#FF4E2A]" />
      Operate
    </Badge>
  );
}

export function B2() {
  return (
    <Badge className="bg-[#F1EEEC] dark:bg-[#BDB6B0] text-[#331714]">
      <FillColorSolid className="text-[#333333]" /> Maintain
    </Badge>
  );
}

export function B3() {
  return (
    <Badge className="bg-[#331714] text-[#FFFFFF]">
      <FlashSolid className="text-yellow-300 dark:text-yellow-400" /> Perf.
      Optimization
    </Badge>
  );
}

export function B4() {
  return (
    <Badge className="bg-neutral-950 text-[#FFFFFF]">
      <CompassSolid className="size-8 text-[#FF4E2A]" />
      Reduce Complexity
    </Badge>
  );
}
