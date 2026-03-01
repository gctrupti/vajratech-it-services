export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#f3f8ff] to-[#eaf2fb]">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Accelerate Your{" "}
          <span className="text-blue-600">Digital Transformation?</span>
        </h2>

        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Let’s discuss how VajraTech can help you build, scale, and secure
          your technology infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* Primary Button */}
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
            Schedule a Consultation →
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-4 rounded-full border border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition duration-300">
            Contact Sales
          </button>

        </div>

      </div>
    </section>
  );
}