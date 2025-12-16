import { ShieldCheck, AlertTriangle, Database, BarChart3 } from "lucide-react";

function TrustScoreDetails() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Trust Score Breakdown</h1>
        <p className="text-slate-400 max-w-4xl">
          Transparent, explainable trust scoring derived from data quality,
          greenwashing risk, cross-source validation, and historical consistency.
        </p>
      </div>

      {/* FINAL SCORE */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-10 mb-12">
        <p className="text-sm uppercase opacity-80 mb-2">Overall Trust Score</p>
        <h2 className="text-6xl font-bold">72 / 100</h2>
        <p className="text-blue-100 mt-3">
          Moderate trust — recommended with caution
        </p>
      </div>

      {/* SCORE COMPONENTS */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <ScoreCard title="Data Accuracy" score="82" icon={<Database />} />
        <ScoreCard title="Greenwashing Risk" score="58" icon={<AlertTriangle />} />
        <ScoreCard title="Source Reliability" score="76" icon={<ShieldCheck />} />
        <ScoreCard title="Historical Stability" score="71" icon={<BarChart3 />} />
      </div>

      {/* FORMULA */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trust Score Formula</h2>
        <p className="text-slate-300 mb-6">
          The trust score is a weighted aggregation of multiple explainable factors.
          Weights dynamically adapt based on sector and data availability.
        </p>

        <div className="bg-slate-800 rounded-xl p-6 font-mono text-sm text-green-400">
          TrustScore =
          (0.35 × DataAccuracy) +
          (0.25 × SourceReliability) +
          (0.20 × HistoricalStability) -
          (0.20 × GreenwashingRisk)
        </div>
      </div>

      {/* DETAILED EXPLANATION */}
      <Section title="1. Data Accuracy (35%)">
        <Metric
          label="Mandatory Fields Completion"
          value="94%"
          explanation="Required ESG, revenue, employee, and compliance fields present"
        />
        <Metric
          label="Value Range Validation"
          value="88%"
          explanation="Numeric values fall within sector-specific thresholds"
        />
        <Metric
          label="Internal Consistency"
          value="72%"
          explanation="No contradictions between revenue, employee count, and emissions"
        />
      </Section>

      <Section title="2. Source Reliability (25%)">
        <Metric
          label="Government Registry Match"
          value="90%"
          explanation="Verified against official filings and registries"
        />
        <Metric
          label="Trusted ESG Providers"
          value="78%"
          explanation="Aligned with third-party ESG databases"
        />
        <Metric
          label="News & Signals"
          value="65%"
          explanation="Recent media sentiment and regulatory mentions"
        />
      </Section>

      <Section title="3. Historical Stability (20%)">
        <Metric
          label="Year-over-Year Consistency"
          value="70%"
          explanation="No abrupt unexplained metric jumps"
        />
        <Metric
          label="Trend Reliability"
          value="75%"
          explanation="Gradual improvement trends across years"
        />
      </Section>

      <Section title="4. Greenwashing Risk (-20%)">
        <Metric
          label="Numeric Anomalies"
          value="High"
          explanation="Unrealistic ESG improvements detected"
          negative
        />
        <Metric
          label="Vague Language Usage"
          value="Medium"
          explanation="Marketing-heavy sustainability language"
          negative
        />
        <Metric
          label="Cross-Source Conflicts"
          value="Medium"
          explanation="Conflicts between public claims and registries"
          negative
        />
      </Section>

      {/* AI EXPLAINABILITY */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why This Is AI — Not Just Math
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-5xl">
          Thresholds and weights are not fixed. Machine learning models learn
          sector-specific baselines, detect abnormal patterns, and adjust risk
          sensitivity dynamically. AI explains not just the score, but the
          reasoning behind each change.
        </p>
      </div>

    </div>
  );
}

/* COMPONENTS */

function ScoreCard({ title, score, icon }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4 text-blue-400">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-3xl font-bold">{score}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-10">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Metric({ label, value, explanation, negative }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span className={`font-semibold ${negative ? "text-red-400" : "text-green-400"}`}>
          {value}
        </span>
      </div>
      <p className="text-slate-400 text-sm">{explanation}</p>
    </div>
  );
}

export default TrustScoreDetails;
