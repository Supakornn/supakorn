"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { posts } from "./data";

export default function Writing() {
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
                <h1 className="text-3xl font-bold fade-in">Writing</h1>
                <p className="text-lg text-muted-foreground fade-in">
                    A collection of articles and blog posts that I&apos;ve written.
                </p>
            </section>

            <div className="grid gap-8">
                {posts.map((post) => (
                    <article key={post.title} className="group fade-in">
                        <Link
                            href={post.link}
                            target="_blank"
                            className="block space-y-4 p-6 -mx-6 rounded-lg hover:bg-secondary hover:text-yellow-500 transition-colors"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-xl font-medium group-hover:text-yellow-500 transition-colors">
                                        {post.title}
                                    </h2>
                                    <time className="text-sm text-muted-foreground">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long"
                                        })}
                                    </time>
                                </div>
                                <ExternalLink className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {post.tags.map((tag) => (
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
