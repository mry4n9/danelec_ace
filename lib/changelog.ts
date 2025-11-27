/**
 * Changelog Data
 * 
 * Add new updates here following this structure:
 * - Use semantic versioning (MAJOR.MINOR.PATCH)
 * - Include date in YYYY-MM-DD format
 * - Categorize changes: Added, Changed, Fixed, Removed, Security
 * - Write clear, concise descriptions
 * - Order entries from newest to oldest
 */

export type ChangelogCategory = "Added" | "Changed" | "Fixed" | "Removed" | "Security"| "Info";

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    category: ChangelogCategory;
    items: string[];
  }[];
}

export const changelogData: ChangelogEntry[] = [
  {
    version: "0.1.0",
    date: "2025-11-27",
    changes: [
      {
        category: "Added",
        items: [
          "Initial handover of Danelec ACE",
          "Campaign creation wizard with step-by-step workflow",
          "Using Gemini 2.5 flash",
          "Edit page can review generated content",
          "Star/favorite system for marking preferred ads",
          "Export functionality to download ads as Excel file",
          "Navigation menu with Home and Edit Page links",
          "Reset functionality to clear all campaign data",
        ],
      },
      {
        category: "Info",
        items: [
          "Edit ads functionality is still under development",
          "Edit ads with AI is still under development"
          
        ],
      },
      
    ],
  },
  // Add new updates below this line, ordered from newest to oldest
];

