export type Ad = {
  headline: string;
  imageText: string;
  introductoryText: string;
  variantBadges?: string[]; // Array of badge identifiers: ["B1", "B3"], ["B2", "B3"], etc.
};
