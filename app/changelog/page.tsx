import { changelogData, ChangelogCategory } from "@/lib/changelog";
import { Separator } from "@/components/ui/separator";

const categoryStyles: Record<ChangelogCategory, string> = {
  Added: "font-semibold",
  Changed: "font-semibold",
  Fixed: "font-semibold",
  Removed: "font-semibold",
  Security: "font-semibold",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ChangelogPage() {
  return (
    <div className="py-25 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-mono mb-4">Changelog</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            All notable updates, changes, and fixes to Danelec ACE.
          </p>
        </div>

        <div className="space-y-12">
          {changelogData.map((entry, entryIndex) => (
            <div key={entry.version} className="space-y-6">
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="font-mono text-2xl font-semibold">
                    Version {entry.version}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(entry.date)}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {entry.changes.map((changeGroup, groupIndex) => (
                  <div key={groupIndex} className="space-y-3">
                    <h3 className={`text-lg ${categoryStyles[changeGroup.category]}`}>
                      {changeGroup.category}
                    </h3>
                    <ul className="space-y-2 ml-6">
                      {changeGroup.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-foreground leading-relaxed list-disc"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {entryIndex < changelogData.length - 1 && (
                <Separator className="mt-8" />
              )}
            </div>
          ))}
        </div>

        {changelogData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No changelog entries yet. Updates will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

