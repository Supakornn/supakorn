'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants';

const NavLink = ({
  href,
  children,
  isMobile = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={` ${isMobile ? 'block' : 'relative'} text-sm font-medium transition-colors ${
        isActive
          ? 'text-primary-foreground after:w-full'
          : 'text-muted-foreground after:w-0 hover:text-primary-foreground hover:after:w-full'
      } ${
        !isMobile &&
        'after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-primary-foreground after:transition-all after:duration-300 after:content-[""]'
      } `}
    >
      {children}
    </Link>
  );
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-medium transition-colors hover:text-yellow-500">
          {SITE_CONFIG.name}
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
          <svg
            className="h-6 w-6"
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

        <div className="hidden gap-8 md:flex">
          {NAVIGATION_ITEMS.map(item => (
            <NavLink key={item.href} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-border/40 bg-background md:hidden">
            <div className="space-y-4 px-6 py-4">
              {NAVIGATION_ITEMS.map(item => (
                <NavLink key={item.href} href={item.href} isMobile onClick={() => setIsOpen(false)}>
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
