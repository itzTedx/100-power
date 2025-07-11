import Link from "next/link";

import { Logo } from "@/assets/logo";
import { FOOTER, SOCIALS } from "@/data/constants";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container">
        <div className="grid grid-cols-4 gap-4 py-12">
          <div className="space-y-3">
            <h3 className="font-aloevera text-primary font-bold">100 Power</h3>
            <p>
              Powering industries with advanced lubrication technology to reduce
              friction, extend machinery life, and protect the planet.
            </p>
          </div>

          {FOOTER.map((nav) => (
            <nav className="flex gap-4" key={nav.id}>
              <h3 className="font-aloevera text-primary font-medium tracking-tight">
                {nav.heading}
              </h3>
              <ul className="space-y-4">
                {nav.items.map((link) => (
                  <li key={link.id}>
                    {"href" in link ? (
                      <Link href={link.href}>{link.title}</Link>
                    ) : (
                      link.title
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-muted-foreground/20 flex items-center justify-between border-y py-6">
          <Link href="/">
            <Logo />
          </Link>

          <ul className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <li key={s.id}>
                <Link href={s.href}>
                  <s.icon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between gap-4 py-3 text-sm">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
          <p>©{new Date().getFullYear()} 100 Power LLC, All rights reserved</p>
          <Link
            href="https://www.zironmedia.com"
            className="text-muted-foreground text-xs tracking-tight"
          >
            Designed & Developed by Ziron Media
          </Link>
        </div>
      </div>
    </footer>
  );
}
