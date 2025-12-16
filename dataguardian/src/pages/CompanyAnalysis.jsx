import { ShieldCheck, AlertTriangle, BarChart3, Database } from "lucide-react";

function CompanyAnalysis() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Company Analysis</h1>
        <p className="text-slate-400">
          Deep validation of company data, ESG metrics, and greenwashing risks
        </p>
      </div>

      {/* COMPANY OVERVIEW */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <OverviewCard title="Company Name" value="GreenTech Corp" />
        <OverviewCard title="Sector" value="Renewable Energy" />
        <OverviewCard title="Country" value="Germany" />
        <OverviewCard title="Trust Score" value="82 / 100" highlight />
      </div>

      {/* ESG METRICS */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">ESG Metrics (Self-Reported)</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard
            title="Carbon Emissions"
            value="120 tCO₂"
            status="warning"
            note="Drop of 38% YoY"
          />
          <MetricCard
            title="Water Usage"
            value="9,200 m³"
            status="danger"
            note="Above sector average"
          />
          <MetricCard
            title="Energy Efficiency"
            value="92%"
            status="good"
            note="Consistent improvement"
          />
        </div>
      </div>

      {/* GREENWASHING FLAGS */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Greenwashing Risk Indicators</h2>

        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-500 mt-1" />
            <span>
              Carbon emissions reduced by <b>38%</b> without matching investment or policy data
            </span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="text-red-500 mt-1" />
            <span>
              Water usage exceeds industry benchmark by <b>22%</b>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="text-yellow-500 mt-1" />
            <span>
              ESG values inconsistent across public disclosures and registry data
            </span>
          </li>
        </ul>
      </div>

      {/* MULTI-SOURCE VALIDATION */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Database /> Data Sources Checked
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>✔ Government Business Registry</li>
            <li>✔ ESG Disclosure Reports</li>
            <li>✔ Sustainability Reports</li>
            <li>✔ News & Media Signals</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BarChart3 /> Sector Benchmark Comparison
          </h2>

          <p className="text-slate-300 mb-3">
            Compared against Renewable Energy sector benchmarks:
          </p>

          <ul className="space-y-2 text-slate-400">
            <li>• Carbon Emissions: 18% higher than median</li>
            <li>• Water Usage: 22% above sector average</li>
            <li>• Energy Efficiency: Within normal range</li>
          </ul>
        </div>

      </div>

      {/* EXPLAINABILITY */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <ShieldCheck /> Trust Score Explanation
        </h2>

        <p className="text-slate-300 leading-relaxed max-w-5xl">
          The trust score is calculated using sector-specific thresholds, historical trend
          analysis, and cross-source validation. Large unexplained deviations in numeric
          ESG values increase greenwashing risk and reduce the overall score. This ensures
          transparency and prevents misleading sustainability claims.
        </p>
      </div>

    </div>
  );
}

/* REUSABLE COMPONENTS */

function OverviewCard({ title, value, highlight }) {
  return (
    <div className={`rounded-2xl p-6 border ${
      highlight ? "bg-green-700 border-green-500" : "bg-slate-900 border-slate-800"
    }`}>
      <p className="text-slate-300 mb-2">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

function MetricCard({ title, value, status, note }) {
  const statusColor =
    status === "good"
      ? "bg-green-600"
      : status === "warning"
      ? "bg-yellow-600"
      : "bg-red-600";

  return (
    <div className="bg-slate-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColor}`}>
          {status}
        </span>
      </div>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <p className="text-slate-400 text-sm">{note}</p>
    </div>
  );
}

export default CompanyAnalysis;
