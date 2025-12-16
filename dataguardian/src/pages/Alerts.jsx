import { useState } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  CheckCircle,
  Clock,
} from "lucide-react";

function Alerts() {
  const [alerts] = useState([
    {
      id: 1,
      company: "GreenTech Solutions",
      type: "Greenwashing Risk",
      severity: "High",
      reason:
        "Reported carbon emissions dropped 48% YoY without corresponding operational changes.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      company: "BlueCore Manufacturing",
      type: "Data Inconsistency",
      severity: "Medium",
      reason:
        "Employee count differs across registry and website disclosures.",
      time: "14 minutes ago",
    },
    {
      id: 3,
      company: "EcoWave Industries",
      type: "Trust Score Improved",
      severity: "Low",
      reason:
        "Cross-source verification confirmed sustainability metrics.",
      time: "1 hour ago",
    },
  ]);

  const severityColor = (level) => {
    if (level === "High") return "border-red-600 bg-red-950 text-red-400";
    if (level === "Medium") return "border-yellow-600 bg-yellow-950 text-yellow-400";
    return "border-green-600 bg-green-950 text-green-400";
  };

  const severityIcon = (level) => {
    if (level === "High") return <ShieldAlert />;
    if (level === "Medium") return <AlertTriangle />;
    return <CheckCircle />;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Alerts & Risk Signals</h1>
        <p className="text-slate-400 max-w-3xl">
          Real-time alerts triggered by data inconsistencies, greenwashing risks,
          and trust score changes across monitored companies.
        </p>
      </div>

      {/* ALERT LIST */}
      <div className="space-y-6">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-6 ${severityColor(
              alert.severity
            )}`}
          >
            <div className="flex gap-4">
              <div className="mt-1">{severityIcon(alert.severity)}</div>

              <div>
                <h2 className="text-xl font-semibold mb-1">
                  {alert.company}
                </h2>

                <p className="font-medium mb-2">
                  {alert.type} — {alert.severity} Severity
                </p>

                <p className="text-sm opacity-90">
                  {alert.reason}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm opacity-80">
              <Clock />
              <span>{alert.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="mt-12 flex flex-wrap gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
          View Company Analysis
        </button>
        <button className="border border-slate-700 hover:border-slate-500 transition px-6 py-3 rounded-xl">
          Export Alert Report
        </button>
      </div>

    </div>
  );
}

export default Alerts;
