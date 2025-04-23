"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants";

const NavLink = ({
  href,
  children,
  isMobile = false
}: {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
                ${isMobile ? "block" : "relative"} 
                text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-primary-foreground after:w-full"
                    : "text-muted-foreground hover:text-primary-foreground after:w-0 hover:after:w-full"
                }
                ${
                  !isMobile &&
                  'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:bg-primary-foreground after:transition-all after:duration-300'
                }
            `}
    >
      {children}
    </Link>
  );
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium transition-colors hover:text-yellow-500">
          {SITE_CONFIG.name}
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <div className="hidden md:flex gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border/40 md:hidden">
            <div className="px-6 py-4 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href} isMobile>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
