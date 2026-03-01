import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center relative overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="px-8 md:px-20 relative z-10">
        
        <div className="inline-block bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded-full text-sm mb-6">
          Trusted by 200+ Global Enterprises
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Engineering the{" "}
          <span className="text-cyan-400">Digital Future</span> of Your Business
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          We deliver end-to-end IT solutions that accelerate growth,
          streamline operations, and transform enterprises for the modern era.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-cyan-500 text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-400 transition">
            Start Your Project →
          </button>

          <button className="bg-gray-700/50 px-6 py-3 rounded-full text-gray-300 hover:bg-gray-600 transition">
            ▶ Watch Demo
          </button>
        </div>

        <div className="flex gap-16 mt-16 text-gray-300">
          <div>
            <h2 className="text-3xl font-bold text-white">200+</h2>
            <p className="text-sm text-gray-400">Clients</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">15+</h2>
            <p className="text-sm text-gray-400">Years</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">99.9%</h2>
            <p className="text-sm text-gray-400">Uptime</p>
          </div>
        </div>

      </div>
    </section>
  );
}