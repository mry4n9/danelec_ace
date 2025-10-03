import { Button } from "@/components/ui/button";
import { FloppyDisk } from "iconoir-react";

export default function DownloadXlsx() {
  return (
    <Button className="hover:bg-[#FF4E2A] hover:text-white">
      <FloppyDisk className="size-5" /> Export
    </Button>
  );
}

