import { changelogData } from "@/lib/changelog";

export default function Footer() {
  // Get the latest version from changelog (first entry is newest)
  const latestVersion = changelogData[0]?.version || "0.0.0";

  return (
    <footer className="pb-5 pt-10 px-10 flex flex-col md:flex-row justify-between text-muted-foreground">
      <p>{new Date().getFullYear()} Danelec X MAUDE</p>
      <p>Version {latestVersion}</p>
    </footer>
  );
}
