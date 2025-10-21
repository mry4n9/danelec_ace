"use client";

import { useState } from "react";
import AdCard from "./components/ad-card";
import DownloadXlsx from "./components/download-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditorPage() {
  const [ads, setAds] = useState<any[]>([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count }),
      });

      const data = await res.json();
      console.log("Gemini output:", data);
      setAds(data.results ?? []);
    } catch (error) {
      console.error("Error:", error);
      setAds([]);
    } finally {
      setLoading(false);
    }
  };

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

      {/* Input controls */}
      <div className="flex flex-row items-end gap-3">
        <div>
          <Label htmlFor="count">Number of ads</Label>
          <Input
            id="count"
            type="number"
            min="1"
            max="10"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            className="w-28"
          />
        </div>

        <Button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Content"}
        </Button>
      </div>

      <div className="w-full max-w-[1600px] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 space-y-9">
          {ads.length > 0 ? (
          ads.map((ad, index) => (
            <AdCard
              key={index}
              introductoryText={ad.introductoryText}
              imageText={ad.imageText}
              headline={ad.headline}
            />
          ))
          ) : (
          <p className="text-muted-foreground text-center col-span-full">No ads generated yet.  </p>
          )}
        </div>
      </div>
    </div>
  );
}
