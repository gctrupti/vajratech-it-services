import React, { useState } from "react";

export default function QuerySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,   // IMPORTANT: spread previous state
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all details");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-[#f3f8ff] to-[#eaf2fb]">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let’s Discuss Your Project
        </h2>

        <p className="text-gray-600 mb-12">
          Let’s discuss how VajraTech can help transform your ideas into scalable solutions.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-10 text-left">

          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold text-green-600">
                Thank you! We will get back to you soon.
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white font-semibold hover:scale-105 transition"
              >
                Submit Inquiry
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}