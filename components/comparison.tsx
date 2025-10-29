import { Check, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComparisonSection() {
  const features = [
    {
      name: "Time to complete",
      manual: "5-10 days",
      tools: "2-3 days",
      casevia: "~10 minutes",
    },
    {
      name: "Cost per case study",
      manual: "$500-2000",
      tools: "$50-200",
      casevia: "$0-15",
    },
    { name: "Requires interviews", manual: true, tools: false, casevia: true },
    {
      name: "Professional structure",
      manual: true,
      tools: false,
      casevia: true,
    },
    { name: "Consistent quality", manual: false, tools: false, casevia: true },
    { name: "Brand voice control", manual: true, tools: false, casevia: true },
    { name: "SEO optimization", manual: false, tools: true, casevia: true },
  ];

  return (
    <section className="py-12 lg:py-24 container">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Why Casevia vs everything else?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Generic AI writing tools create fake case studies. Manual writing
          takes forever. Casevia is purpose-built for real interviews.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4 font-semibold"></th>
              <th className="text-center p-4 font-semibold text-muted-foreground">
                Manual Writing
              </th>
              <th className="text-center p-4 font-semibold text-muted-foreground">
                Generic AI Tools
              </th>
              <th className="text-center p-4 font-semibold">
                <span className="text-primary">Casevia</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-4 font-medium">{feature.name}</td>
                <td className="p-4 text-center text-sm text-muted-foreground">
                  {typeof feature.manual === "boolean" ? (
                    feature.manual ? (
                      <Check className="w-5 h-5 mx-auto text-green-600" />
                    ) : (
                      <Minus className="w-5 h-5 mx-auto text-muted-foreground/30" />
                    )
                  ) : (
                    feature.manual
                  )}
                </td>
                <td className="p-4 text-center text-sm text-muted-foreground">
                  {typeof feature.tools === "boolean" ? (
                    feature.tools ? (
                      <Check className="w-5 h-5 mx-auto text-green-600" />
                    ) : (
                      <Minus className="w-5 h-5 mx-auto text-muted-foreground/30" />
                    )
                  ) : (
                    feature.tools
                  )}
                </td>
                <td className="p-4 text-center text-sm font-medium">
                  {typeof feature.casevia === "boolean" ? (
                    feature.casevia ? (
                      <Check className="w-5 h-5 mx-auto text-primary" />
                    ) : (
                      <Minus className="w-5 h-5 mx-auto text-muted-foreground/30" />
                    )
                  ) : (
                    <span className="text-primary font-semibold">
                      {feature.casevia}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
