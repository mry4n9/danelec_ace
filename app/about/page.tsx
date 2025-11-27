export default function AboutPage() {
  return (
    <div className="py-25 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-mono mb-4">About</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Brief description of Danelec ACE and how it works.
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-semibold">What is Danelec ACE?</h2>
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">Danelec ACE</span> (AI Content Engine) is
              Danelec&apos;s in-house campaign copy tool designed to simplify and
              accelerate the creation of ready-to-post marketing campaigns. Danelec ACE is meant to
              consolidates the entire campaign creation process under a single application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-semibold">Key Features</h2>
            <ul className="space-y-2 ml-6">
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">Guided Workflow:</span> Step-by-step
                wizard that walks you through the campaign creation from solution selection
                to final content generation
              </li>
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">AI and Human-in-the-loop:</span> Leverages
                Google&apos;s Gemini API to create the components in a campaign but designed with HITL (Human-in-the-loop) functionality
                to leverage the speed of AI but the quality of human input
              </li>
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">Content Management:</span> Review and edit
                generated ads with an intuitive interface
              </li>
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">Export Functionality:</span> Download
                 campaigns as an Excel file
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-semibold">How It Works</h2>
            <p className="text-foreground leading-relaxed">
              Danelec ACE guides you through a structured process: select your solution category,
              choose funnel stage, configure messaging matrix with optional custom intructions, specify campaign count,
              and let Danelec ACE generate the specified ad variations. You can then review, refine,
              and export your campaigns on the Edit page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

