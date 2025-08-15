import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-[#3d2a1a] py-8 bg-[#f5ecd7] border-t border-[#3d2a1a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xl md:text-2xl flex items-center gap-3 font-semibold">
          Copyright © 2025 IEDC CUSAT.
        </p>
        <div className="flex gap-6 text-3xl md:text-4xl">
          <a
            href="https://www.instagram.com/iedc.cusat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/iedc-cusat/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
  </div>
      </div>
    </footer>
  );
}
