"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fetchProjects } from "@/lib/fetch-projects";

export default function Home() {
  const [projects, setProjects] = useState<
    Array<{
      title: string;
      description: string;
      tags: string[];
      link: string;
    }>
  >([]);

  useEffect(() => {
    const loadProjects = async () => {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
    };
    loadProjects();
  }, []);

  useEffect(() => {
    const elements = gsap.utils.toArray(".fade-in");
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, [projects]);

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold fade-in">
          Hello, I&apos;m <span className="text-yellow-500">[</span>Supakornn
          <span className="text-yellow-500">]</span>
        </h1>
        <p className="text-xl text-muted-foreground fade-in">
          I&apos;m a <span className="underline decoration-yellow-500">developer</span> based in
          Bangkok, Thailand. I interest in software developments and hacking.
        </p>
        <section className="space-y-4 fade-in">
          <h2 className="text-2xl font-semibold">My Works</h2>
          <div className="space-y-4">
            {projects.slice(0, 3).map((proj) => (
              <article key={proj.title} className="group">
                <Link
                  href={`${proj.link}`}
                  className="block space-y-2 p-4 -mx-4 rounded-lg hover:bg-secondary hover:text-yellow-500 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{proj.title}</h3>
                      <p className="text-sm text-muted-foreground">{proj.description}</p>
                    </div>
                    {proj.tags.length > 0 && (
                      <div className="flex gap-2">
                        {proj.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs  bg-muted text-muted-foreground  rounded px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <div className="fade-in">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-foreground hover:text-primary transition-colors"
          >
            View all my works <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
