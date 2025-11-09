import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-md">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Fyron
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900 transition">Services</a>
          <a href="#work" className="hover:text-gray-900 transition">Work</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 font-medium hover:bg-gray-800 transition shadow-sm"
          >
            Get a quote
          </a>
        </nav>
      </div>
    </header>
  );
}
