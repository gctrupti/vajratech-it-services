import React from "react";
import { Cloud, Shield, Code, BarChart3, Cpu, Globe } from "lucide-react";

const services = [
  {
    icon: <Cloud size={26} />,
    title: "Cloud Solutions",
    desc: "Migrate, optimize, and manage your cloud infrastructure across AWS, Azure, and GCP with zero downtime.",
  },
  {
    icon: <Shield size={26} />,
    title: "Cybersecurity",
    desc: "Protect digital assets with enterprise-grade security audits, threat detection, and compliance frameworks.",
  },
  {
    icon: <Code size={26} />,
    title: "Custom Development",
    desc: "Build scalable applications with modern architectures — from MVPs to enterprise-scale platforms.",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Data & Analytics",
    desc: "Turn raw data into actionable insights with BI dashboards, ML pipelines, and real-time analytics.",
  },
  {
    icon: <Cpu size={26} />,
    title: "AI & Automation",
    desc: "Leverage artificial intelligence and automation to streamline workflows and reduce operational costs.",
  },
  {
    icon: <Globe size={26} />,
    title: "Digital Transformation",
    desc: "Modernize legacy systems and implement end-to-end digital strategies that drive business agility.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-8 bg-gradient-to-b from-[#f3f8ff] to-[#eaf2fb]"
    >
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-blue-600 uppercase tracking-widest text-sm mb-4 font-semibold">
          What We Do
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Comprehensive IT Services
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          From strategy to execution, VajraTech delivers the full spectrum
          of technology services your business needs to thrive.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white rounded-2xl p-8 text-left transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-blue-100 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}