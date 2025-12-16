import { motion } from "framer-motion";
import { ShieldCheck, Database, BarChart3, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* SECTION 1 – HERO */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI-Powered Data Quality & Greenwashing Guardian
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            Verify B2B company data, detect greenwashing risks, and build trust across
            sales, CRM, and sustainability pipelines.
          </p>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-blue-600 text-lg font-semibold">
              Request Demo
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white text-lg">
              View Architecture
            </button>

            {/* LOGIN BUTTON */}
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-4 rounded-2xl bg-white text-black text-lg font-semibold"
            >
              Login
            </button>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 – PROBLEM */}
      <section className="py-28 px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-semibold mb-6">The Problem</h2>

            <p className="text-slate-300 text-lg mb-6">
              B2B platforms rely on massive volumes of company data — often self-reported,
              outdated, inconsistent, or misleading.
            </p>

            <ul className="space-y-4 text-slate-400">
              <li>• Inaccurate ESG and sustainability claims</li>
              <li>• Greenwashing hidden in numerical values</li>
              <li>• CRM decisions based on unverified data</li>
              <li>• No explainability behind trust</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Database />, text: "Fragmented Data Sources" },
              { icon: <BarChart3 />, text: "Unrealistic Metrics" },
              { icon: <ShieldCheck />, text: "Low Trust Scores" },
              { icon: <Sparkles />, text: "No Explainability" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 3 – SOLUTION */}
      <section className="py-28 px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold text-center mb-16"
          >
            Our Solution
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            <SolutionCard
              icon={<ShieldCheck />}
              title="Trust Scoring Engine"
              desc="Sector-aware validation with explainable risk scores."
            />
            <SolutionCard
              icon={<Database />}
              title="Multi-Source Validation"
              desc="Cross-checks data across disclosures and registries."
            />
            <SolutionCard
              icon={<BarChart3 />}
              title="Greenwashing Detection"
              desc="Detects unrealistic value drops and inflated claims."
            />
          </div>

        </div>
      </section>

      {/* SECTION 4 – TARGET */}
      <section className="py-28 px-8 bg-black">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold mb-8"
          >
            Built for Modern B2B Teams
          </motion.h2>

          <p className="text-slate-300 text-lg mb-12">
            Data providers • CRM teams • ESG & Compliance • Procurement
          </p>

          <button
            onClick={() => navigate("/login")}
            className="px-12 py-5 rounded-2xl bg-blue-600 text-lg font-semibold"
          >
            Start Validating Data
          </button>

        </div>
      </section>

    </div>
  );
}

function SolutionCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
}

export default Landingpage;
