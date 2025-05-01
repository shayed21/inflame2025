import { Cpu, Zap, LifeBuoy } from "lucide-react";

// Add this style block to your global CSS (e.g., index.css or globals.css):
/*
@keyframes moveBall {
  0% {
    transform: translate(-50%, -50%) scale(1);
    filter: blur(40px);
  }
  50% {
    transform: translate(-30%, -60%) scale(1.2);
    filter: blur(60px);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    filter: blur(40px);
  }
}
*/

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0a1120]">
      {/* Animated Light Ball */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle at 50% 50%, #00eaffcc 0%, #0a112000 80%)",
          borderRadius: "50%",
          animation: "moveBall 8s ease-in-out infinite",
          boxShadow: "0 0 120px 80px #00eaff55, 0 0 240px 150px #00eaff22",
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Why Choose Our Services
        </h2>
        <p className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Inflame Tech provides the fuel for your development engine, combining cutting-edge AI with deep technical expertise to supercharge your software delivery. Our tools don't just assist - they anticipate, adapt, and accelerate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#12151b] rounded-xl p-8 flex flex-col items-center shadow border border-[#22304a]">
            <Cpu className="w-10 h-10 mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-2 text-center">Precision-Built for You</h3>
            <p className="text-gray-300 text-center">
              No cookie-cutter code here. We engineer solutions tailored to your unique challenges, ensuring scalability, efficiency, and competitive advantage.
            </p>
          </div>
          <div className="bg-[#12151b] rounded-xl p-8 flex flex-col items-center shadow border border-[#22304a]">
            <Zap className="w-10 h-10 mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-2 text-center">Future-Ready Tech Stack </h3>
            <p className="text-gray-300 text-center">
              Leverage the power of AI, cloud-native architectures, and automation—all integrated seamlessly into your workflow to keep you ahead of the curve.
            </p>
          </div>
          <div className="bg-[#11151b] rounded-xl p-8 flex flex-col items-center shadow border border-[#22304a]">
            <LifeBuoy className="w-10 h-10 mb-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-white mb-2 text-center">Partnership Beyond Delivery</h3>
            <p className="text-gray-300 text-center">
              Your success is our priority. From launch to evolution, our team provides continuous support, optimizations, and strategic insights to keep your solution performing at its peak.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
}
