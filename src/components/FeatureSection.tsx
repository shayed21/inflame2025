import { Brain, Sparkle, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain size={40} className="text-[#DA7807] bg-[#232323] rounded-full p-2" />,
    title: "AI-Optimized Planning",
    desc: "OUR System and Team analyzes your project data to recommend optimal architectural patterns and roadmap timelines based on industry best practices.",
    link: "AI-powered recommendations",
  },
  {
    icon: <Sparkle size={40} className="text-[#DA7807] bg-[#232323] rounded-full p-2" />,
    title: "Agile Development Process",
    desc: "Using an agile approach, we break your project into manageable phases. This allows for flexibility, rapid iterations, continuous improvements,and frequent feedback. You stay involved throughout the journey as we build high-quality, scalable solutions step by step."

,
    link: "Custom templates in seconds",
  },
];

const predictive = {
  title: " Deployment & Ongoing Support",
  desc: "Once live, we don’t just walk away. Inflame Tech offers full deployment support, monitoring, and continuous optimization. We’re committed to ensuring your project’s long-term success with regular updates and dedicated technical support.",
  risk: {
    icon: <Zap size={28} className="text-[#fff] bg-[#DA7807] rounded-full p-1" />,
    label: "Risk Prediction",
    desc: "Identify project risks before they impact your timeline",
  },
  health: {
    score: 94,
    bars: [
      { label: "Timeline Accuracy", value: 98 },
      { label: "Resource Allocation", value: 87 },
      { label: "Risk Assessment", value: 92 },
    ],
  },
};

export default function FeatureSection() {
  return (
    <section className="bg-[#0a0a0a] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
        How We Develop Your <span className="text-[#DA7807]">Projects</span> at Inflame Tech
        </h2>
        <p className="text-lg text-gray-300 mb-10">
        Precision-driven development powered by AI and industry expertise.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {features.map((f, i) => (
            <div key={i} className="bg-[#181818] rounded-xl p-8 shadow-lg flex flex-col">
              <div>{f.icon}</div>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{f.title}</h3>
              <p className="text-gray-300 mb-4">{f.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#232323]">
                <span className="text-gray-400 text-sm">{f.link}</span>
                <span className="text-[#DA7807] text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">{predictive.title}</h3>
            <p className="text-gray-300 mb-4">{predictive.desc}</p>
            <div className="flex items-center gap-3 mt-4">
              <div className="bg-[#DA7807] rounded-full p-2">{predictive.risk.icon}</div>
              <div>
                <div className="font-semibold text-white">{predictive.risk.label}</div>
                <div className="text-gray-300 text-sm">{predictive.risk.desc}</div>
              </div>
            </div>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 shadow-lg flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white text-lg">Project Health Score</span>
              <span className="text-[#DA7807] text-2xl font-bold">{predictive.health.score}%</span>
            </div>
            {predictive.health.bars.map((bar, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>{bar.label}</span>
                  <span>{bar.value}%</span>
                </div>
                <div className="w-full h-2 bg-[#232323] rounded">
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${bar.value}%`,
                      background: "#DA7807",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}