import { Badge } from "@/components/ui/badge";
import {
  CompassSolid,
  DropletSolid,
  FillColorSolid,
  FlashSolid,
} from "iconoir-react";

export function B1() {
  return (
    <Badge className="bg-[#FF4E2A] text-white">
      <DropletSolid className="text-blue-400" />
      Operate
    </Badge>
  );
}

export function B2() {
  return (
    <Badge className="bg-[#FF4E2A] text-white">
      <FillColorSolid className="text-slate-700"/> Maintain
    </Badge>
  );
}

export function B3() {
  return (
    <Badge variant="default">
      <FlashSolid className="text-yellow-300 dark:text-yellow-400" /> Perf. Optimization
    </Badge>
  );
}

export function B4() {
  return (
    <Badge variant="default">
      <CompassSolid className="size-8 text-[#FF4E2A]" />
      Reduce Complexity
    </Badge>
  );
}
