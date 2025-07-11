import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/assets/logo";
import { NAV_LINKS } from "@/data/constants";

import { Button } from "../ui/button";

export function Navbar() {
  return (
    <header className="fixed top-3 left-1/2 z-9999 mx-auto flex w-full max-w-5xl -translate-x-1/2 items-center justify-between rounded-md bg-white p-2">
      <Link href="/" className="px-2">
        <Logo />
      </Link>
      <nav>
        <ul className="flex items-center gap-2">
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
      </nav>
      <Button asChild>
        <Link href="/contact">
          Contact <ArrowUpRight />
        </Link>
      </Button>
    </header>
  );
}
