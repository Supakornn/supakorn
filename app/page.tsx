"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts } from "./writing/data";

export default function Home() {
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
        <div className="space-y-16">
            <section className="space-y-6">
                <h1 className="text-4xl font-bold fade-in">
                    Hello, I&apos;m <span className="text-yellow-500">[</span>Supakornn
                    <span className="text-yellow-500">]</span>
                </h1>
                <p className="text-xl text-muted-foreground fade-in">
                    I&apos;m a{" "}
                    <span className="underline decoration-yellow-500">software developer</span>{" "}
                    based in Bangkok, Thailand. I interest in software developments and hacking.
                </p>
                <div className="fade-in">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-primary-foreground hover:text-primary transition-colors"
                    >
                        View my work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section className="space-y-4 fade-in">
                <h2 className="text-2xl font-semibold">Latest Writing</h2>
                <div className="space-y-4">
                    {posts.length > 0 ? (
                        posts.slice(0, 5).map((post) => (
                            <article key={post.title} className="group">
                                <Link
                                    href={`${post.link}`}
                                    className="block space-y-2 p-4 -mx-4 rounded-lg hover:bg-secondary hover:text-yellow-500 transition-colors"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">{post.title}</h3>
                                        <span className="text-sm text-muted-foreground">
                                            {post.date}
                                        </span>
                                    </div>
                                </Link>
                            </article>
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
