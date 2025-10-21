import { TextShimmer } from "@/components/ui/text-shimmer";
import { ProgressDemo } from "../components/ui/progress";
import GeminiDemo from "../components/gemini_components/GeminiDemo";

export default function ProgressBar() {
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center">
      <GeminiDemo />



      
      <h5 className="p-7">
        <TextShimmer duration={1.6}>
          Generating content ...
        </TextShimmer>
      </h5>
      <ProgressDemo />
    </div>
  );
}
