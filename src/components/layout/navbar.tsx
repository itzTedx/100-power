"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/assets/logo";
import { NAV_LINKS } from "@/data/constants";

import { Button } from "../ui/button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-3 left-1/2 z-9999 mx-auto flex w-full max-w-5xl -translate-x-1/2 items-center justify-between rounded-md bg-white p-2">
      <Link href="/" className="px-2" aria-label="Home">
        <Logo aria-label="100 Power Home" />
      </Link>
      <nav aria-label="Main navigation" className="flex items-center">
        {/* Hamburger menu button for mobile */}
        <button
          className="p-2 focus:outline-none md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Desktop nav links */}
        <ul className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className="font-aloevera hover:text-primary p-4 font-medium italic underline-offset-2 transition-colors hover:underline"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile nav dropdown */}
        {menuOpen && (
          <ul className="animate-fade-in absolute top-16 left-0 z-50 flex w-full flex-col items-center gap-2 bg-white shadow-md md:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="w-full text-center">
                <Link
                  href={link.href}
                  className="font-aloevera hover:text-primary block p-4 font-medium italic underline-offset-2 transition-colors hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <Button asChild className="hidden md:inline-flex">
        <Link href="/contact" aria-label="Contact">
          Contact <ArrowUpRight />
        </Link>
      </Button>
      {/* Mobile contact button */}
      <Button asChild className="ml-2 md:hidden">
        <Link href="/contact" aria-label="Contact">
          <ArrowUpRight />
        </Link>
      </Button>
    </header>
  );
}
