"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";

export function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        gsap.from(".nav-item", {
            opacity: 0,
            y: -20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    href="/"
                    className={`text-base font-medium transition-colors hover:text-yellow-500 ${
                        pathname === "/"
                            ? "text-primary-foreground"
                            : "text-muted-foreground hover:text-primary-foreground"
                    }`}
                >
                    Supakornn
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className="hidden md:flex gap-8">
                    {[
                        ["About", "/about"],
                        ["Projects", "/projects"],
                        ["Certificates", "/certificates"],
                        ["Writing", "/writing"]
                    ].map(([title, url]) => (
                        <Link
                            key={url}
                            href={url}
                            className={`relative text-sm font-medium transition-colors ${
                                pathname === url
                                    ? "text-primary-foreground after:w-full"
                                    : "text-muted-foreground hover:text-primary-foreground after:w-0 hover:after:w-full"
                            } after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:bg-primary-foreground after:transition-all after:duration-300`}
                        >
                            {title}
                        </Link>
                    ))}
                </div>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border-b border-border/40 md:hidden">
                        <div className="px-6 py-4 space-y-4">
                            {[
                                ["About", "/about"],
                                ["Projects", "/projects"],
                                ["Certificates", "/certificates"],
                                ["Writing", "/writing"]
                            ].map(([title, url]) => (
                                <Link
                                    key={url}
                                    href={url}
                                    className={`block text-sm font-medium transition-colors ${
                                        pathname === url
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-primary-foreground"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
