"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { achievements } from "./data";

export default function Achievements() {
    useEffect(() => {
        const elements = gsap.utils.toArray(".fade-in");
        gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h1 className="text-3xl font-bold fade-in">Achievements</h1>
                <p className="text-lg text-muted-foreground fade-in">
                    Here are the achievements I&apos;ve accomplished over the years.
                </p>
            </section>

            <div className="grid gap-8">
                {achievements.map((ar) => (
                    <article key={ar.title} className="group fade-in">
                        <Link
                            href={ar.link}
                            target="_blank"
                            className="block space-y-4 p-4 -mx-2 rounded-lg hover:bg-secondary transition-colors"
                        >
                            <div className="flex items-start justify-between">
                                <h2 className="text-base font-medium group-hover:text-yellow-500 transition-colors">
                                    {ar.title}
                                </h2>
                                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
