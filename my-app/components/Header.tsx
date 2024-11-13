import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-transparent">
      
      {/* Logo */}
      <Link href="#">
        <span className="text-4xl text-white font-semibold relative">
          Ahmed.
          <span className="absolute inset-0 bg-transparent"></span>
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-10 bg-[var(--bg-color)] py-2">
        <Link href="#HomeSection">
          <span className="text-white text-lg font-medium transition-colors duration-300 hover:text-[#00abf0]">
            Home
          </span>
        </Link>
        <Link href="#AboutSection">
          <span className="text-white text-lg font-medium transition-colors duration-300 hover:text-[#00abf0]">
            About
          </span>
        </Link>
        <Link href="#EducationSection">
          <span className="text-white text-lg font-medium transition-colors duration-300 hover:text-[#00abf0]">
            Education
          </span>
        </Link>
        <Link href="#SkillsSection">
          <span className="text-white text-lg font-medium transition-colors duration-300 hover:text-[#00abf0]">
            Skills
          </span>
        </Link>
        <Link href="#ContactSection">
          <span className="text-white text-lg font-medium transition-colors duration-300 hover:text-[#00abf0]">
            Contact
          </span>
        </Link>
      </nav>

      {/* Mobile Toggle */}
      <div className="flex md:hidden">
        <button
          type="button"
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
