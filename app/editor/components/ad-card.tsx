"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { AdobeIllustrator, DesignNibSolid, Star } from "iconoir-react";
import Image from "next/image";
// Removed useMemo as it is not needed for simple array access
import { useWizardStore } from "@/app/wizard/wizard-store/store";
import { Ad } from "@/types/ad";

const unsplashImages = [
  "https://images.unsplash.com/photo-1483709898067-9fd28d4da0c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1885",
  "https://images.unsplash.com/photo-1755184635226-8d3ad612e38a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1527",
  "https://images.unsplash.com/photo-1503942142281-94af0aded523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335",
  "https://images.unsplash.com/photo-1597498450987-e4437f7d56a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1887",
  "https://images.unsplash.com/photo-1511458206431-afcf3cebe562?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1887",
  "https://images.unsplash.com/photo-1626186032295-5c0d509bbad8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1887",
  "https://images.unsplash.com/photo-1622222754849-f56e440a18ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935",
];

type AdCardProps = {
  introductoryText: string;
  imageText: string;
  headline: string;
  index: number;
};

const QUICK_ACTIONS = [
  "Make shorter",
  "Make longer",
  "Simplify language",
  "More technical",
  "More conversational",
  "Add urgency",
  "Focus on ROI",
  "Emphasize benefits",
];

// Helper function to get CTA button text based on funnel
const getCTAText = (funnel: string | undefined): string => {
  if (!funnel) return "Request Demo"; // Default fallback
  
  switch (funnel) {
    case "brand awareness":
      return "Learn More";
    case "demand generation":
      return "Download";
    case "demand capture":
      return "Request Demo";
    default:
      return "Request Demo";
  }
};

export default function AdCard({
  introductoryText,
  imageText,
  headline,
  index,
}: AdCardProps) {
  const isStarred = useWizardStore((state) => state.isStarred(index));
  const toggleStarred = useWizardStore((state) => state.toggleStarred);
  const updateAd = useWizardStore((state) => state.updateAd);
  const solution = useWizardStore((state) => state.solution);
  const subSolution = useWizardStore((state) => state.subSolution);
  const funnel = useWizardStore((state) => state.funnel);
  
  const ctaText = getCTAText(funnel);
  
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [editIntroductoryText, setEditIntroductoryText] = useState(introductoryText);
  const [editImageText, setEditImageText] = useState(imageText);
  const [editHeadline, setEditHeadline] = useState(headline);

  // AI Edit states
  const [isAIEditOpen, setIsAIEditOpen] = useState(false);
  const [fieldsToEdit, setFieldsToEdit] = useState({
    introductoryText: true,
    imageText: true,
    headline: true,
  });
  const [selectedQuickActions, setSelectedQuickActions] = useState<string[]>([]);
  const [customInstruction, setCustomInstruction] = useState("");
  const [previewAd, setPreviewAd] = useState<Ad | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Reset form values when popover opens to ensure they match current ad values
  useEffect(() => {
    if (isPopoverOpen) {
      setEditIntroductoryText(introductoryText);
      setEditImageText(imageText);
      setEditHeadline(headline);
    }
  }, [isPopoverOpen, introductoryText, imageText, headline]);

  // Reset AI edit state when popover opens
  useEffect(() => {
    if (isAIEditOpen && !previewAd) {
      setFieldsToEdit({
        introductoryText: true,
        imageText: true,
        headline: true,
      });
      setSelectedQuickActions([]);
      setCustomInstruction("");
      setPreviewAd(null);
    }
  }, [isAIEditOpen]);

  const handleStarClick = () => {
    toggleStarred(index);
  };

  const handleCancel = () => {
    // Reset form values to original
    setEditIntroductoryText(introductoryText);
    setEditImageText(imageText);
    setEditHeadline(headline);
    setIsPopoverOpen(false);
  };

  const handleConfirm = () => {
    updateAd(index, {
      introductoryText: editIntroductoryText,
      imageText: editImageText,
      headline: editHeadline,
    });
    setIsPopoverOpen(false);
  };

  const handleAIEdit = async () => {
    if (!solution || !subSolution || !funnel) {
      alert("Missing context. Please ensure wizard data is available.");
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch("/api/gemini/edit-ad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentAd: {
            introductoryText,
            imageText,
            headline,
          },
          solution,
          subSolution,
          funnel,
          fieldsToEdit,
          quickActions: selectedQuickActions,
          customInstruction,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate edited ad");
      }

      const { editedAd } = await response.json();
      setPreviewAd(editedAd);
      setIsAIEditOpen(false); // Close popover when preview is ready
    } catch (error) {
      console.error("Error generating edited ad:", error);
      alert("Failed to generate edited ad. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegenerate = () => {
    setPreviewAd(null);
    setIsAIEditOpen(true);
  };

  const handleAccept = () => {
    if (previewAd) {
      updateAd(index, previewAd);
      setPreviewAd(null);
      setSelectedQuickActions([]);
      setCustomInstruction("");
      setIsAIEditOpen(false);
    }
  };

  const handleAICancel = () => {
    setIsAIEditOpen(false);
    setPreviewAd(null);
    setSelectedQuickActions([]);
    setCustomInstruction("");
    setFieldsToEdit({
      introductoryText: true,
      imageText: true,
      headline: true,
    });
  };

  const toggleQuickAction = (action: string) => {
    setSelectedQuickActions((prev) =>
      prev.includes(action)
        ? prev.filter((a) => a !== action)
        : [...prev, action]
    );
  };

  // LOGIC CHANGED HERE
  // We use the remainder (%) operator.
  // This ensures we cycle through the images 0-6, then loop back to 0.
  const image = unsplashImages[index % unsplashImages.length];

  return (
    <>
      {(isPopoverOpen || isAIEditOpen || previewAd) && (
        <div
          className="fixed inset-0 z-40 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          onClick={() => {
            if (isPopoverOpen) setIsPopoverOpen(false);
            if (isAIEditOpen) handleAICancel();
            if (previewAd) handleAICancel();
          }}
          aria-hidden="true"
        />
      )}
      {previewAd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto max-w-6xl w-full px-14">
              <div className="flex flex-col items-center gap-6">
                {/* Preview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-full">
                  {/* Original Ad */}
                  <div className="relative flex flex-col items-center">
                    <Badge
                      variant="default"
                      className="mb-2 px-4 py-2 text-sm font-medium"
                    >
                      Original
                    </Badge>
                  <Card className="w-full sm:w-110 bg-[#fcfcfc] dark:bg-neutral-900 h-full flex flex-col">
                    <CardHeader className="flex items-center gap-2">
                      <Image
                        src="/danelec_pp.jpeg"
                        alt="Danelec profile picture"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle className="font-medium">Danelec</CardTitle>
                        <CardDescription className="text-muted-foreground text-xs">
                          Promoted
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm">{introductoryText}</p>
                    </CardContent>
                    <CardContent className="p-0 flex-shrink-0">
                      <div className="relative h-95">
                        <Image
                          src={image}
                          alt="Ad background"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-5 flex items-center justify-center">
                          <p className="text-white text-xl font-medium">{imageText}</p>
                        </div>
                        <div className="absolute bottom-6 left-6">
                          <Image
                            src="/Danelec_Logo_Orange-White.svg"
                            alt="Danelec brand"
                            width={100}
                            height={40}
                          />
                        </div>
                      </div>
                      <div className="bg-[#eff6ff] dark:bg-[#334155] px-3 py-2 flex flex-row gap-3 items-center justify-between">
                        <p className="font-sans font-medium text-sm text-center text-left">
                          {headline}
                        </p>
                        <Button className="font-sans font-medium rounded-full bg-[#eff6ff] dark:bg-[#334155] text-[#3b82f6] dark:text-[#93c5fd] border-1 border-[#3b82f6] dark:border-[#93c5fd]">
                          {ctaText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* New Ad */}
                <div className="relative flex flex-col items-center">
                  <Badge
                    variant="default"
                    className="mb-2 px-4 py-2 text-sm font-medium"
                  >
                    New
                  </Badge>
                  <Card className="w-full sm:w-110 bg-[#fcfcfc] dark:bg-neutral-900 h-full flex flex-col">
                    <CardHeader className="flex items-center gap-2">
                      <Image
                        src="/danelec_pp.jpeg"
                        alt="Danelec profile picture"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle className="font-medium">Danelec</CardTitle>
                        <CardDescription className="text-muted-foreground text-xs">
                          Promoted
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm">{previewAd.introductoryText}</p>
                    </CardContent>
                    <CardContent className="p-0 flex-shrink-0">
                      <div className="relative h-95">
                        <Image
                          src={image}
                          alt="Ad background"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-5 flex items-center justify-center">
                          <p className="text-white text-xl font-medium">
                            {previewAd.imageText}
                          </p>
                        </div>
                        <div className="absolute bottom-6 left-6">
                          <Image
                            src="/Danelec_Logo_Orange-White.svg"
                            alt="Danelec brand"
                            width={100}
                            height={40}
                          />
                        </div>
                      </div>
                      <div className="bg-[#eff6ff] dark:bg-[#334155] px-3 py-2 flex flex-row gap-3 items-center justify-between">
                        <p className="font-sans font-medium text-sm text-center text-left">
                          {previewAd.headline}
                        </p>
                        <Button className="font-sans font-medium rounded-full bg-[#eff6ff] dark:bg-[#334155] text-[#3b82f6] dark:text-[#93c5fd] border-1 border-[#3b82f6] dark:border-[#93c5fd]">
                          {ctaText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-2">
                <Button 
                  variant="destructive" 
                  onClick={handleAICancel}
                  className="bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive dark:text-white"
                >
                  Cancel
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleRegenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? "Regenerating..." : "Regenerate"}
                </Button>
                <Button onClick={handleAccept}>Accept</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAIEditOpen && !previewAd && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none overflow-y-auto py-8">
          <div className="pointer-events-auto flex flex-col items-center gap-6 max-w-6xl w-full px-4">
            {/* Ad Card Display */}
            <Card className="w-full sm:w-110 bg-[#fcfcfc] dark:bg-neutral-900 flex flex-col">
              <CardHeader className="flex items-center gap-2">
                <Image
                  src="/danelec_pp.jpeg"
                  alt="Danelec profile picture"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <CardTitle className="font-medium">Danelec</CardTitle>
                  <CardDescription className="text-muted-foreground text-xs">
                    Promoted
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{introductoryText}</p>
              </CardContent>
              <CardContent className="p-0 flex-shrink-0">
                <div className="relative h-95">
                  <Image
                    src={image}
                    alt="Ad background"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-5 flex items-center justify-center">
                    <p className="text-white text-xl font-medium">{imageText}</p>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <Image
                      src="/Danelec_Logo_Orange-White.svg"
                      alt="Danelec brand"
                      width={100}
                      height={40}
                    />
                  </div>
                </div>
                <div className="bg-[#eff6ff] dark:bg-[#334155] px-3 py-2 flex flex-row gap-3 items-center justify-between">
                  <p className="font-sans font-medium text-sm text-center text-left">
                    {headline}
                  </p>
                  <Button className="font-sans font-medium rounded-full bg-[#eff6ff] dark:bg-[#334155] text-[#3b82f6] dark:text-[#93c5fd] border-1 border-[#3b82f6] dark:border-[#93c5fd]">
                  {ctaText}
                  </Button>
                </div>
              </CardContent>
            </Card>
            {/* Popover content positioned below the card */}
            {isAIEditOpen && (
              <div className="w-full sm:w-110 bg-popover text-popover-foreground rounded-md border p-4 shadow-md">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <h4 className="leading-none text-lg">Edit with AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Select fields to edit, choose quick actions, or provide custom instructions
                    </p>
                  </div>

                  {/* Field Selection */}
                  <div className="grid gap-4">
                    <Label className="h1">Fields to Edit</Label>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="edit-intro"
                          checked={fieldsToEdit.introductoryText}
                          onCheckedChange={(checked) =>
                            setFieldsToEdit((prev) => ({
                              ...prev,
                              introductoryText: checked === true,
                            }))
                          }
                        />
                        <Label htmlFor="edit-intro" className="cursor-pointer">
                          Introductory Text
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="edit-image"
                          checked={fieldsToEdit.imageText}
                          onCheckedChange={(checked) =>
                            setFieldsToEdit((prev) => ({
                              ...prev,
                              imageText: checked === true,
                            }))
                          }
                        />
                        <Label htmlFor="edit-image" className="cursor-pointer">
                          Image Text
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="edit-headline"
                          checked={fieldsToEdit.headline}
                          onCheckedChange={(checked) =>
                            setFieldsToEdit((prev) => ({
                              ...prev,
                              headline: checked === true,
                            }))
                          }
                        />
                        <Label htmlFor="edit-headline" className="cursor-pointer">
                          Headline
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid gap-4">
                    <Label className="text-base font-medium">Quick Actions</Label>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_ACTIONS.map((action) => (
                        <Badge
                          key={action}
                          variant={
                            selectedQuickActions.includes(action)
                              ? "default"
                              : "outline"
                          }
                          className="cursor-pointer px-3 py-1.5"
                          onClick={() => toggleQuickAction(action)}
                        >
                          {action}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Custom Instruction */}
                  <div className="grid gap-2">
                    <Label htmlFor="custom-instruction" className="text-base font-medium">
                      Custom Instructions (Optional)
                    </Label>
                    <Textarea
                      id="custom-instruction"
                      placeholder="e.g., Make it more data-driven, Add a question hook..."
                      value={customInstruction}
                      onChange={(e) => setCustomInstruction(e.target.value)}
                      className="min-h-20"
                    />
                  </div>

                  {/* Generate Button */}
                  <div className="flex justify-center gap-3">
                    <Button
                      variant="destructive"
                      onClick={handleAICancel}
                      disabled={isGenerating}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAIEdit}
                      disabled={
                        isGenerating ||
                        (!fieldsToEdit.introductoryText &&
                          !fieldsToEdit.imageText &&
                          !fieldsToEdit.headline)
                      }
                      className="min-w-32"
                    >
                      {isGenerating ? "Generating..." : "Generate Preview"}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Card className="w-full sm:w-110 bg-[#fcfcfc] dark:bg-neutral-900 h-full flex flex-col">
      <CardHeader className="flex items-center gap-2">
        <Image
          src="/danelec_pp.jpeg"
          alt="Danelec profile picture"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <CardTitle className="font-medium">Danelec</CardTitle>
          <CardDescription className="text-muted-foreground text-xs">
            Promoted
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm">{introductoryText}</p>
      </CardContent>

      <CardContent className="p-0 flex-shrink-0">
        <div className="relative h-95">
          <Image
            src={image} 
            alt="Ad background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-5 flex items-center justify-center">
            <p className="text-white text-xl font-medium">{imageText}</p>
          </div>
          <div className="absolute bottom-6 left-6">
            <Image
              src="/Danelec_Logo_Orange-White.svg"
              alt="Danelec brand"
              width={100}
              height={40}
            />
          </div>
        </div>

        <div className="bg-[#eff6ff] dark:bg-[#334155] px-3 py-2 flex flex-row gap-3 items-center justify-between">
          <p className="font-sans font-medium text-sm text-center text-left">
            {headline}
          </p>
          <Button className="font-sans font-medium rounded-full bg-[#eff6ff] dark:bg-[#334155] text-[#3b82f6] dark:text-[#93c5fd] border-1 border-[#3b82f6] dark:border-[#93c5fd]">
            {ctaText}
          </Button>
        </div>

        <div className="mt-5 flex h-2 items-center justify-evenly text-muted-foreground ">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-[#FF4E2A]"
                onClick={() => setIsAIEditOpen(true)}
              >
                <AdobeIllustrator className="size-7" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Edit with AI</TooltipContent>
          </Tooltip>
          <Separator
            orientation="vertical"
            className="bg-foreground/18"
            style={{ height: "28px", width: "2px" }}
          />
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#FF4E2A]"
                  >
                    <DesignNibSolid className="size-7.5" />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>Edit ad</TooltipContent>
            </Tooltip>
            <PopoverContent className="w-full sm:w-106">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Edit this ad</h4>
                  <p className="text-sm text-muted-foreground">text</p>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="introductoryText">Introductory Text</Label>
                    <Textarea
                      id="introductoryText"
                      value={editIntroductoryText}
                      onChange={(e) => setEditIntroductoryText(e.target.value)}
                      className="min-h-20"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="imageText">Image Text</Label>
                    <Input
                      id="imageText"
                      value={editImageText}
                      onChange={(e) => setEditImageText(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="headline">Headline</Label>
                    <Input
                      id="headline"
                      value={editHeadline}
                      onChange={(e) => setEditHeadline(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="destructive" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button onClick={handleConfirm}>Confirm</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Separator
            orientation="vertical"
            className="bg-foreground/18"
            style={{ height: "28px", width: "2px" }}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`group ${
                  isStarred
                    ? "bg-transparent border-0 shadow-none hover:bg-transparent"
                    : "hover:bg-transparent"
                }`}
                onClick={handleStarClick}
              >
                <Star
                  className={`size-7 ${isStarred ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground group-hover:text-[#FF4E2A]"}`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Starred ads will be highlighted in Excel
            </TooltipContent>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
    </>
  );
}