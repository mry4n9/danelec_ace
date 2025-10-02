import { BadgeCheckIcon } from "lucide-react";
import { Droplet, Flash, Puzzle, Wrench } from "iconoir-react";
import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full flex-wrap gap-2">
        <Badge className="bg-blue-500 text-white dark:bg-blue-600">
          <Droplet />
          Operate
        </Badge>
        <Badge className="bg-blue-500 text-white dark:bg-blue-600">
          <Wrench /> Maintain
        </Badge>
        <Badge variant="default">
          <Flash /> Performance Optimization
        </Badge>
        <Badge variant="default">
          <Puzzle />
          Reduce Complexity
        </Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
          8
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="destructive"
        >
          99
        </Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
          variant="outline"
        >
          20+
        </Badge>
      </div>
    </div>
  );
}

export function B1() {
  return (
    <Badge className="bg-blue-500 text-white dark:bg-blue-600">
      <Droplet />
      Operate
    </Badge>
  );
}

export function B2() {
  return (
    <Badge className="bg-blue-500 text-white dark:bg-blue-600">
      <Wrench /> Maintain
    </Badge>
  );
}

export function B3() {
  return (
    <Badge variant="default">
      <Flash /> Performance Optimization
    </Badge>
  );
}

export function B4() {
  return (
    <Badge variant="default">
      <Puzzle />
      Reduce Complexity
    </Badge>
  );
}
