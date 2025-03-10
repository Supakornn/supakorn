"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";

export function Navigation() {
    const pathname = usePathname();

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
                <div className="flex gap-8">
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
            </div>
        </nav>
    );
}
