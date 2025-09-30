import AdCard from "./components/ad-card";

import DownloadXlsx from "./components/download-button";
import { ProgressDemo } from "../components/ui/progress";

export default function EditorPage() {
  return (
    <div className="mt-10 min-h-screen flex flex-col items-center justify-center gap-8">
      <h1>Edit Page</h1>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        On the edit page, users can review the AI-generated ad content and see
        the final look, similar to how it will be shown online. Adjust the
        introductory, image, and headline copy if needed, or use AI to regenerate a piece of content.
      </p>
      <p className="text-muted-foreground">Generating content ...</p>
      <ProgressDemo />

      <div className="w-full max-w-[1400px] px-4">
        <div className="flex justify-end mb-6">
          <DownloadXlsx />
        </div>
        <div className="grid grid-cols-4 gap-6">
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
          <AdCard />
        </div>
      </div>
    </div>
  );
}
