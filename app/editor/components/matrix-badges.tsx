import { Badge } from "@/components/ui/badge";
import { Droplet, Flash, Puzzle, Wrench } from "iconoir-react";

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
