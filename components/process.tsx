import { Upload, Cpu, FileEdit, Download } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload your interview",
      description:
        "Drop in your video or audio file. Zoom recordings, phone calls, in-person interviews—whatever you've got.",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-100 dark:border-blue-900/50",
    },
    {
      number: "02",
      icon: Cpu,
      title: "AI extracts the story",
      description:
        "Our AI transcribes, analyzes, and structures your conversation into Challenge, Solution, and Results sections.",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-950/30",
      border: "border-purple-100 dark:border-purple-900/50",
    },
    {
      number: "03",
      icon: FileEdit,
      title: "Review and refine",
      description:
        "Edit the draft if needed, add images, or tweak the tone. Or just approve it as-is if it's already perfect.",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-100 dark:border-green-900/50",
    },
    {
      number: "04",
      icon: Download,
      title: "Export and publish",
      description:
        "Download as Markdown, PDF, or HTML. Post to your blog, send to your client, or share on social—done.",
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-950/30",
      border: "border-orange-100 dark:border-orange-900/50",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl tracking-tight">
            From interview to case study in 4 steps
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            No manual writing. No endless revisions. Just upload and let AI do
            the heavy lifting.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map(
            (
              { number, icon: Icon, title, description, color, bg, border },
              idx
            ) => (
              <div key={idx} className="relative group">
                {/* Connector line (hidden on mobile, shown on desktop) */}
                {idx < steps.length - 1 && idx % 2 === 0 && (
                  <div className="hidden md:block absolute top-20 left-[calc(100%+1.5rem)] w-12 h-px bg-border" />
                )}

                <div className="relative space-y-4">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-xl ${bg} border ${border}`}
                    >
                      <Icon className={`w-7 h-7 ${color}`} strokeWidth={1.5} />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20">
                      {number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
