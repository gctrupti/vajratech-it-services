import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "VajraTech transformed our legacy infrastructure into a modern cloud-native platform. Deployment speed improved by 10x.",
    name: "Sarah Mitchell",
    role: "CTO, FinCore Solutions",
    initials: "SM",
  },
  {
    text: "Their cybersecurity team identified critical vulnerabilities we missed for years. Professional, thorough, and highly responsive.",
    name: "James Rodriguez",
    role: "VP Engineering, HealthFirst",
    initials: "JR",
  },
  {
    text: "From AI-powered optimization to real-time analytics — VajraTech delivered beyond expectations on time and within budget.",
    name: "Priya Sharma",
    role: "Director of Digital, LogiFlow",
    initials: "PS",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      
      className="relative py-24 px-8 bg-gradient-to-b from-[#0a0f1c] to-[#0f172a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          Client Stories
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Trusted by Industry Leaders
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 text-left transition duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Stars */}
              <div className="flex mb-4 text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{item.text}"
              </p>

              <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-semibold">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}