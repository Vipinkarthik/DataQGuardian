import { AlertTriangle, CheckCircle, TrendingDown, FileSearch } from "lucide-react";

function GreenwashingInsights() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Greenwashing Insights</h1>
        <p className="text-slate-400 max-w-3xl">
          AI-powered detection of misleading sustainability claims using
          numeric anomaly detection, text analysis, and cross-source validation.
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <SummaryCard title="Risk Level" value="High" color="red" />
        <SummaryCard title="Suspicious Claims" value="6" color="yellow" />
        <SummaryCard title="Numeric Mismatches" value="3" color="orange" />
        <SummaryCard title="Verified Claims" value="9" color="green" />
      </div>

      {/* NUMERIC GREENWASHING */}
      <Section
        icon={<TrendingDown className="text-red-500" />}
        title="Numeric Greenwashing Signals"
        description="Detects unrealistic ESG improvements without operational evidence."
      >
        <Signal
          severity="high"
          title="Carbon Reduction Spike"
          detail="Reported 42% emission reduction in 1 year without CAPEX or process changes"
        />
        <Signal
          severity="medium"
          title="Water Usage Claim"
          detail="Water efficiency improved by 31% while production volume increased"
        />
        <Signal
          severity="medium"
          title="Energy Efficiency"
          detail="Efficiency score exceeds sector maximum by 12%"
        />
      </Section>

      {/* TEXTUAL GREENWASHING */}
      <Section
        icon={<FileSearch className="text-yellow-500" />}
        title="Textual Greenwashing Signals"
        description="Flags vague, exaggerated, or unverifiable sustainability language."
      >
        <Signal
          severity="medium"
          title="Vague Language"
          detail="Uses phrases like 'eco-friendly', 'planet positive' without metrics"
        />
        <Signal
          severity="high"
          title="Future-Oriented Claims"
          detail="Promises carbon neutrality without timelines or measurable milestones"
        />
      </Section>

      {/* CROSS SOURCE */}
      <Section
        icon={<AlertTriangle className="text-orange-500" />}
        title="Cross-Source Inconsistencies"
        description="Compares public claims with registries, ESG databases, and news signals."
      >
        <Signal
          severity="high"
          title="Registry Mismatch"
          detail="Government registry shows higher emissions than sustainability report"
        />
        <Signal
          severity="medium"
          title="News Contradiction"
          detail="Recent reports indicate regulatory warnings despite green claims"
        />
      </Section>

      {/* VERIFIED CLAIMS */}
      <Section
        icon={<CheckCircle className="text-green-500" />}
        title="Verified Sustainability Claims"
        description="Claims that are consistent across sources and historical trends."
      >
        <Signal
          severity="low"
          title="Renewable Energy Usage"
          detail="70% energy sourced from renewables verified across 3 data providers"
        />
        <Signal
          severity="low"
          title="Waste Recycling"
          detail="Recycling rates match municipal records"
        />
      </Section>

      {/* AI EXPLANATION */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4">How AI Detects Greenwashing</h2>
        <p className="text-slate-300 leading-relaxed max-w-5xl">
          Our system combines rule-based thresholds, sector-aware benchmarks,
          and machine learning models trained on historical ESG patterns.
          Large deviations, vague claims, and cross-source contradictions
          increase greenwashing risk. Each signal is explainable and traceable,
          ensuring transparency for regulators and enterprises.
        </p>
      </div>

    </div>
  );
}

/* REUSABLE COMPONENTS */

function SummaryCard({ title, value, color }) {
  const colors = {
    red: "bg-red-700",
    yellow: "bg-yellow-600",
    orange: "bg-orange-600",
    green: "bg-green-700",
  };

  return (
    <div className={`${colors[color]} rounded-2xl p-6`}>
      <p className="text-sm opacity-80 mb-2">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

function Section({ icon, title, description, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-10">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-slate-400 mb-6 max-w-4xl">{description}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Signal({ severity, title, detail }) {
  const styles = {
    high: "border-red-600 text-red-400",
    medium: "border-yellow-600 text-yellow-400",
    low: "border-green-600 text-green-400",
  };

  return (
    <div className={`border-l-4 ${styles[severity]} bg-slate-800 p-4 rounded-lg`}>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-slate-300 text-sm">{detail}</p>
    </div>
  );
}

export default GreenwashingInsights;
