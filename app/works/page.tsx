"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ExternalLink, Tag } from "lucide-react";
import Link from "next/link";
import { works } from "./data";

export default function Works() {
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
        <h1 className="text-2xl font-bold fade-in">Works</h1>
        <p className="text-lg text-muted-foreground fade-in">
          Collection of personal and professional works that I&apos;ve worked on.
        </p>
      </section>

      <div className="grid gap-2">
        {works.map((work) => (
          <article key={work.title} className="group fade-in">
            <Link
              href={work.link}
              target="_blank"
              className="block space-y-2 p-4 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium group-hover:text-yellow-500 transition-colors">
                  {work.title}
                </h2>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">{work.description}</p>
              <div className="flex gap-2 flex-wrap">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    <Tag className="w-3 h-3 mr-1 text-gray-500 dark:text-gray-400" />
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
