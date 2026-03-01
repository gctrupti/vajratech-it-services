export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold shadow-md">
            VT
          </div>
          <span className="text-xl font-semibold text-gray-900">
            VajraTech
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Why Us</a>
          <a href="#" className="hover:text-blue-600 transition">Technologies</a>
          <a href="#" className="hover:text-blue-600 transition">Testimonials</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Sign In
          </a>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-medium shadow-md hover:scale-105 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}