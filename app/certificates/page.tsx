"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { certificates } from "./data";

export default function Certificates() {
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
                <h1 className="text-3xl font-bold fade-in">Certificates</h1>
                <p className="text-lg text-muted-foreground fade-in">
                    Professional certifications and achievements that validate my skills and
                    knowledge.
                </p>
            </section>

            <div className="grid gap-8">
                {certificates.map((cert) => (
                    <article key={cert.title} className="group fade-in">
                        <Link
                            href={cert.link}
                            target="_blank"
                            className="block space-y-4 p-6 -mx-6 rounded-lg hover:bg-secondary transition-colors"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-medium group-hover:text-yellow-500 transition-colors">
                                        {cert.title}
                                    </h2>
                                    <div className="text-sm text-muted-foreground">
                                        <span>{cert.issuer}</span>
                                        <span className="mx-2">•</span>
                                        <time>{cert.date}</time>
                                    </div>
                                </div>
                                <ExternalLink className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {cert.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
