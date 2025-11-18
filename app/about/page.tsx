export default function AboutPage() {
  return (
    <div className="py-25 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="font-mono mb-4">About</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Learn more about Danelec ACE and how it streamlines campaign creation.
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-semibold">What is Danelec ACE?</h2>
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">Danelec ACE</span> (AI Content Engine) is
              Danelec&apos;s in-house campaign copy tool designed to simplify and
              accelerate the creation of ready-to-post marketing campaigns. Built with
              modern web technologies and powered by AI, ACE consolidates the entire
              campaign creation process into a single, intuitive application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-semibold">Key Features</h2>
            <ul className="space-y-2 ml-6">
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">Guided Workflow:</span> Step-by-step
                wizard that walks you through campaign creation from solution selection
                to final content generation
              </li>
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">AI-Powered Generation:</span> Leverages
                Google&apos;s Gemini AI to create compelling ad copy tailored to your
                specific needs
              </li>
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">Content Management:</span> Review, edit,
                and organize generated ads with an intuitive interface
              </li>
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">Export Functionality:</span> Download
                your campaigns as Excel files for easy integration into your marketing
                workflows
              </li>
              <li className="text-foreground leading-relaxed list-disc">
                <span className="font-semibold">Favorites System:</span> Star and save
                your preferred ad variations for quick access
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-2xl font-semibold">How It Works</h2>
            <p className="text-foreground leading-relaxed">
              ACE guides you through a structured process: select your solution category,
              choose funnel stage, configure messaging matrix, specify campaign count,
              and let AI generate multiple ad variations. You can then review, refine,
              and export your campaigns—all within one streamlined application.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

