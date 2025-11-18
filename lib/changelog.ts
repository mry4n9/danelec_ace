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

export type ChangelogCategory = "Added" | "Changed" | "Fixed" | "Removed" | "Security";

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
    version: "1.0.3",
    date: "2024-01-15",
    changes: [
      {
        category: "Added",
        items: [
          "Initial release of Danelec ACE",
          "Campaign creation wizard with step-by-step workflow",
          "AI-powered ad content generation using Gemini",
          "Edit page for reviewing and managing generated ads",
          "Export functionality to download ads as Excel file",
          "Star/favorite system for marking preferred ads",
          "Navigation menu with Home and Edit Page links",
          "Reset functionality to clear all campaign data",
        ],
      },
      {
        category: "Changed",
        items: [
          "Improved user interface with clean, minimal design",
        ],
      },
      {
        category: "Fixed",
        items: [
          "Fixed issue with reset button not clearing all campaign data",
        ],
      },
    ],
  },
  // Add new updates below this line, ordered from newest to oldest
];

