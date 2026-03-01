import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-[#f3f8ff] to-[#eaf2fb]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
            Why VajraTech
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Partner You Can Trust to Deliver
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            We don't just write code — we engineer solutions that move your
            business forward, backed by rigorous processes and deep technical expertise.
          </p>

          <div className="space-y-8">

            {[
              {
                title: "Proven Track Record",
                desc: "200+ successful projects delivered across fintech, healthcare, logistics, and SaaS industries.",
              },
              {
                title: "Agile & Transparent",
                desc: "Sprint-based delivery with full visibility — weekly demos, shared dashboards, and open communication.",
              },
              {
                title: "Certified Engineers",
                desc: "Teams certified across AWS, Google Cloud, Microsoft, and leading security frameworks.",
              },
              {
                title: "24/7 Support & SLA",
                desc: "Enterprise-grade support with 99.9% uptime guarantees and dedicated account managers.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT STATS BOX */}
        <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white rounded-3xl p-12 shadow-2xl">

          <div className="text-center mb-12">
            <h3 className="text-6xl font-bold text-cyan-400">15+</h3>
            <p className="text-blue-200 mt-2">Years of Excellence</p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h4 className="text-2xl font-semibold">500+</h4>
              <p className="text-blue-200 text-sm">Engineers</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h4 className="text-2xl font-semibold">30+</h4>
              <p className="text-blue-200 text-sm">Countries</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h4 className="text-2xl font-semibold">98%</h4>
              <p className="text-blue-200 text-sm">Retention</p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center">
              <h4 className="text-2xl font-semibold">4.9★</h4>
              <p className="text-blue-200 text-sm">Client Rating</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}