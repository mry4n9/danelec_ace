"use client";

import { Button } from "@/components/ui/button";
import { FloppyDisk } from "iconoir-react";
import { useWizardStore } from "@/app/wizard/wizard-store/store";
import ExcelJS from "exceljs";

export default function DownloadXlsx() {
  const ads = useWizardStore((state) => state.ads);
  const starredAds = useWizardStore((state) => state.starredAds || []);

  const handleDownload = async () => {
    if (!ads || ads.length === 0) {
      alert("No ads to export. Please generate ads first.");
      return;
    }

    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("LinkedIn Ads");

    // Define columns
    worksheet.columns = [
      { header: "Ad #", key: "adNumber", width: 10 },
      { header: "Introductory Text", key: "introductoryText", width: 50 },
      { header: "Image Text", key: "imageText", width: 30 },
      { header: "Headline", key: "headline", width: 30 },
    ];

    // Style the header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE0E0E0" },
    };

    // Add data rows
    ads.forEach((ad, index) => {
      const row = worksheet.addRow({
        adNumber: index + 1,
        introductoryText: ad.introductoryText,
        imageText: ad.imageText,
        headline: ad.headline,
      });

      // Apply yellow background to starred rows
      if (starredAds.includes(index)) {
        row.eachCell((cell) => {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFFFFF00" }, // Yellow
          };
        });
      }
    });

    // Generate Excel file and trigger download
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "danelec-linkedin-ads.xlsx";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button
      className="hover:bg-[#FF4E2A] hover:text-white"
      onClick={handleDownload}
      disabled={!ads || ads.length === 0}
    >
      <FloppyDisk className="size-5" /> Export
    </Button>
  );
}

