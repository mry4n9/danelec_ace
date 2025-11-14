"use client";

import AdCard from "./components/ad-card";
import DownloadXlsx from "./components/download-button";

export default function EditorPage() {
  return (
    <div className="mt-15 min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="">Edit Page</h1>
      <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        On the edit page, users can review the AI-generated ad content and see
        the final look, similar to how it will be shown online.
      </p>
      <div className="fixed top-4 right-18">
        <DownloadXlsx />
      </div>
      <AdCard />
    </div>
  );
}
