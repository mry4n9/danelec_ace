import { Button } from "@/components/ui/button";
import { FloppyDisk } from "iconoir-react";

export default function DownloadXlsx() {
  return (
    <Button>
      <FloppyDisk className="size-5" /> Export
    </Button>
  );
}

