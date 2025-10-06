import AdCard from "./components/ad-card";

import DownloadXlsx from "./components/download-button";

export default function EditorPage() {
  return (
    <div className="mt-15 min-h-screen flex flex-col items-center justify-center gap-8">
      <h1>Edit Page</h1>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        On the edit page, users can review the AI-generated ad content and see
        the final look, similar to how it will be shown online. Adjust the
        introductory, image, and headline copy if needed, or use AI to
        regenerate a piece of content.
      </p>
      <div className="fixed top-4 right-18">
        <DownloadXlsx />
      </div>
      <div className="w-full max-w-[1600px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-0 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
