import { ShieldCheck, Database, BarChart3, AlertTriangle, CheckCircle } from "lucide-react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Data Quality Dashboard</h1>
        <button className="px-6 py-3 rounded-xl bg-blue-600 font-semibold">
          Upload Company Data
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <KpiCard title="Companies Analyzed" value="1,248" icon={<Database />} />
        <KpiCard title="High Trust Score" value="68%" icon={<CheckCircle />} />
        <KpiCard title="Greenwashing Risks" value="14%" icon={<AlertTriangle />} />
        <KpiCard title="Avg Trust Score" value="82 / 100" icon={<ShieldCheck />} />
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* COMPANY LIST */}
        <div className="md:col-span-2 bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <h2 className="text-xl font-semibold mb-6">Company Validation Results</h2>

          <table className="w-full text-left text-slate-300">
            <thead className="text-slate-400 border-b border-slate-700">
              <tr>
                <th className="py-3">Company</th>
                <th>Sector</th>
                <th>Trust Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((c, i) => (
                <tr key={i} className="border-b border-slate-800">
                  <td className="py-4">{c.name}</td>
                  <td>{c.sector}</td>
                  <td>{c.score}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        c.status === "Trusted"
                          ? "bg-green-600"
                          : c.status === "Risk"
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-8">

          {/* GREENWASHING ALERTS */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-xl font-semibold mb-4">Greenwashing Alerts</h2>

            <ul className="space-y-4 text-slate-300">
              <li>⚠️ Carbon reduction dropped 45% without evidence</li>
              <li>⚠️ Water usage claims exceed industry benchmarks</li>
              <li>⚠️ ESG score mismatch across sources</li>
            </ul>
          </div>

          {/* DATA SOURCES */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-xl font-semibold mb-4">Data Sources Used</h2>

            <ul className="space-y-3 text-slate-300">
              <li>✔ Government Registries</li>
              <li>✔ ESG Disclosure Reports</li>
              <li>✔ Public Sustainability Reports</li>
              <li>✔ News & Web Signals</li>
            </ul>
          </div>

        </div>
      </div>

      {/* EXPLAINABILITY SECTION */}
      <div className="mt-12 bg-slate-900 rounded-2xl p-8 border border-slate-800">
        <h2 className="text-2xl font-semibold mb-4">Why a Company Was Flagged?</h2>

        <p className="text-slate-300 max-w-4xl">
          The AI compares self-reported sustainability values against sector benchmarks,
          historical trends, and third-party datasets. Large unexplained deviations reduce
          trust score and increase greenwashing risk.
        </p>
      </div>
    </div>
  );
}

/* KPI CARD */
function KpiCard({ title, value, icon }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-400">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

/* SAMPLE DATA */
const companies = [
  { name: "GreenTech Corp", sector: "Energy", score: "91", status: "Trusted" },
  { name: "EcoBuild Ltd", sector: "Construction", score: "76", status: "Risk" },
  { name: "PureWater Inc", sector: "Utilities", score: "64", status: "High Risk" },
  { name: "SolarNova", sector: "Renewables", score: "88", status: "Trusted" },
];

export default Dashboard;
