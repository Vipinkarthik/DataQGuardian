import { useState } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle,
  AlertTriangle,
  Link2
} from "lucide-react";

function DataUpload() {
  const [file, setFile] = useState(null);
  const [apiUrl, setApiUrl] = useState("");
  const [status, setStatus] = useState("idle");

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    setStatus("uploaded");
  };

  const handleApiSubmit = (e) => {
    e.preventDefault();
    if (apiUrl.trim()) {
      setStatus("api-connected");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Data Ingestion</h1>
        <p className="text-slate-400 max-w-4xl">
          Upload or connect company datasets to validate accuracy, trust,
          and greenwashing risk across multiple sources.
        </p>
      </div>

      {/* UPLOAD OPTIONS */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">

        {/* FILE UPLOAD */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6 text-blue-400">
            <UploadCloud />
            <h2 className="text-xl font-semibold">Upload File</h2>
          </div>

          <label className="border-2 border-dashed border-slate-700 rounded-xl p-10 text-center cursor-pointer block hover:border-blue-500 transition">
            <input
              type="file"
              accept=".csv,.xlsx,.json"
              onChange={handleFileUpload}
              className="hidden"
            />
            <p className="text-slate-300 mb-2">
              Drag & drop or click to upload
            </p>
            <p className="text-sm text-slate-500">
              Supported: CSV, Excel, JSON
            </p>
          </label>

          {file && (
            <div className="mt-6 flex items-center gap-3 text-green-400">
              <CheckCircle />
              <span>{file.name} uploaded</span>
            </div>
          )}
        </div>

        {/* API INGESTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6 text-purple-400">
            <Link2 />
            <h2 className="text-xl font-semibold">Connect API</h2>
          </div>

          <form onSubmit={handleApiSubmit}>
            <input
              type="url"
              placeholder="https://api.companydata.com/v1/companies"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white mb-4"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              required
            />
            <button className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg font-semibold">
              Connect API
            </button>
          </form>

          {status === "api-connected" && (
            <div className="mt-6 flex items-center gap-3 text-green-400">
              <CheckCircle />
              <span>API connected successfully</span>
            </div>
          )}
        </div>
      </div>

      {/* PREVIEW & VALIDATION */}
      {status !== "idle" && (
        <div className="grid md:grid-cols-2 gap-8">

          {/* SCHEMA PREVIEW */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6 text-blue-400">
              <FileText />
              <h2 className="text-xl font-semibold">Schema Preview</h2>
            </div>

            <ul className="space-y-3 text-slate-300 text-sm">
              <li>• Company Name</li>
              <li>• Industry Sector</li>
              <li>• Revenue</li>
              <li>• Employee Count</li>
              <li>• Carbon Emissions</li>
              <li>• ESG Claims</li>
            </ul>
          </div>

          {/* VALIDATION STATUS */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6 text-yellow-400">
              <AlertTriangle />
              <h2 className="text-xl font-semibold">Initial Validation</h2>
            </div>

            <ul className="space-y-4 text-slate-300">
              <li>
                ✔ Required fields present
              </li>
              <li>
                ⚠ Carbon emission values exceed sector average
              </li>
              <li>
                ✔ Revenue & employee count consistent
              </li>
              <li>
                ⚠ ESG claims require cross-source verification
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* ACTION */}
      {status !== "idle" && (
        <div className="mt-12 text-right">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold">
            Run Full Trust Analysis →
          </button>
        </div>
      )}

    </div>
  );
}

export default DataUpload;
