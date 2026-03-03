import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-gray-400 px-8 pt-20 pb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-black">
              VT
            </div>
            <span className="text-white text-xl font-semibold">
              VajraTech
            </span>
          </div>

          <p className="mb-6">
            Engineering intelligent solutions for the enterprises of tomorrow.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-3">
            <li className="hover:text-white transition cursor-pointer">Cloud Solutions</li>
            <li className="hover:text-white transition cursor-pointer">Cybersecurity</li>
            <li className="hover:text-white transition cursor-pointer">Custom Development</li>
            <li className="hover:text-white transition cursor-pointer">Data & Analytics</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm">
        <p>© 2026 VajraTech Solutions. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}