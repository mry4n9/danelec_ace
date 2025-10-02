import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageSearch, Upload } from "iconoir-react";

export default function AdditionalContextPage() {
  return (
    <div className="mt-20">
      <h2>Add Additional Context</h2>
      <p className="text-lg mb-30 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
        Optional step to add additional context to have more creative control
        over the final copy. + Add additional instructions on how to use this step.
      </p>

      <div className="grid w-full max-w-sm items-center gap-3 mb-10">
        <Label htmlFor="email">Custom Instruction</Label>
        <Input
          type="string"
          id="email"
          placeholder="Custom Instructions will be prioritized"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3 mb-10">
        <Label htmlFor="email">Scrape Website</Label>
        <Input type="string" id="email" placeholder="www.danelec.com" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3 mb-10">
        <Label htmlFor="email">Scrape PDF</Label>
        <Button>
          <PageSearch />
          Upload File
        </Button>
      </div>
      <div className="grid w-full max-w-sm items-center gap-3 mb-10 mt-35">
        <Label htmlFor="email">Last Step</Label>
        <Button className="bg-[#FF4E2A] hover:bg-[#e6451f] font-bold ">Generate</Button>
      </div>
    </div>
  );
}
