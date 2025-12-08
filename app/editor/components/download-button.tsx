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

    // ===== METADATA ROWS (A1-A4) =====
    // Row 1: Campaign Title
    const row1 = worksheet.getRow(1);
    row1.getCell(1).value = "Danelec LinkedIn Campaign";
    row1.getCell(1).font = { size: 12, color: { argb: "FF331714" } };
    row1.getCell(1).alignment = { vertical: "middle", wrapText: false };
    row1.height = 15;

    // Row 2: Total Ads Exported
    const row2 = worksheet.getRow(2);
    row2.getCell(1).value = `Total Ads Exported: ${ads.length}`;
    row2.getCell(1).font = { size: 12, color: { argb: "FF331714" } };
    row2.getCell(1).alignment = { vertical: "middle", wrapText: false };
    row2.height = 15;

    // Row 3: Export Timestamp
    const row3 = worksheet.getRow(3);
    const timestamp = new Date().toLocaleString();
    row3.getCell(1).value = `Export Date: ${timestamp}`;
    row3.getCell(1).font = { size: 12, color: { argb: "FF331714" } };
    row3.getCell(1).alignment = { vertical: "middle", wrapText: false };
    row3.height = 15;

    // Row 4: Empty row
    const row4 = worksheet.getRow(4);
    row4.height = 15;

    // Define columns (without header property to avoid auto-creating header row)
    worksheet.columns = [
      { key: "adNumber", width: 8 },
      { key: "introductoryText", width: 60 },
      { key: "imageText", width: 50 },
      { key: "headline", width: 50 },
    ];

    // ===== HEADER STYLING (A–D) =====
const headerRow = worksheet.getRow(5);
headerRow.values = ["Ad #", "Introductory Text", "Image Text", "Headline"];

headerRow.eachCell((cell, colNumber) => {
  if (colNumber >= 1 && colNumber <= 4) {

    cell.font = {
      bold: true,
      size: 20,
      color: { argb: "FFFFFFFF" }, // white text
    };

    cell.alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF4E2A" }, // #FF4E2A
    };

    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  }
});

headerRow.height = 32;


// ===== DATA ROWS =====
ads.forEach((ad, index) => {
  const row = worksheet.addRow({
    adNumber: index + 1,
    introductoryText: ad.introductoryText,
    imageText: ad.imageText,
    headline: ad.headline,
  });

  row.height = 150;

  // Base styling for ALL data cells (A–D)
  row.eachCell((cell, colNumber) => {
    cell.font = {
      size: 14,
      color: { argb: "FF331714" }, // #331714
    };

    cell.alignment = {
      vertical: "middle",

      horizontal: colNumber === 2 ? "left" : "center", // <-- Ad # included!
      wrapText: true,
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFF1EEEC" }, // #F1EEEC
    };

    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  });

  // If starred → override fill color ONLY
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