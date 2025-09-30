import { TextShimmer } from "@/components/ui/text-shimmer";
import { ProgressDemo } from "../components/ui/progress";

export default function ProgressBar() {
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <h5 className="p-7">
        <TextShimmer duration={1.6}>
          Generating content ...
        </TextShimmer>
      </h5>
      <ProgressDemo />
    </div>
  );
}
