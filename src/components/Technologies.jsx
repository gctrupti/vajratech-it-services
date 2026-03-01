import React from "react";

const techStack = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "React",
  "Node.js",
  "Python",
  "Terraform",
  "MongoDB",
  "PostgreSQL",
  "Salesforce",
];

export default function Technologies() {
  return (
    <section
      id="tech"
      className="py-24 px-8 bg-gradient-to-b from-[#f3f8ff] to-[#eaf2fb]"
    >
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-blue-600 uppercase tracking-widest text-sm mb-4 font-semibold">
          Our Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Technologies & Partners
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          VajraTech leverages industry-leading platforms and frameworks
          to build resilient, secure, and scalable digital solutions.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white rounded-xl py-6 px-4 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}