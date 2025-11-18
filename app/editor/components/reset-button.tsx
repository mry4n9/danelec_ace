"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useWizardStore } from "@/app/wizard/wizard-store/store";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ResetButton() {
  const router = useRouter();
  const reset = useWizardStore((state) => state.reset);
  const [open, setOpen] = React.useState(false);

  const handleReset = () => {
    reset();
    setOpen(false);
    router.push("/");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:bg-[#dc2626] hover:text-white hover:border-[#FF4E2A]"
        >
          <RotateCcw className="size-5" /> Reset
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset All Data</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to reset all campaign data? This will
            clear all your selections, starred items, and prompts. This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleReset}
            className="bg-[#FF4E2A] hover:bg-[#FF4E2A]/90"
          >
            Reset
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

