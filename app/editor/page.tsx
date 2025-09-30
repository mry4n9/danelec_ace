import AdCard from "./components/ad-card";

import DownloadXlsx from "./components/download-button";
import { ProgressDemo } from "../components/ui/progress";

export default function EditorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1>Edit Page</h1>
      <p className="text-muted-foreground">
        On the edit page, users can review the AI-generated ad content and see
        the final look just like how it will be shown online. Adjusting the
        introductory, image, and headline text or use AI to regenerate.
      </p>
      <DownloadXlsx />
      <AdCard />

      <ProgressDemo />
    </div>
  );
}
