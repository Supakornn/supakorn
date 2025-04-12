"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { fetchProjects } from "@/lib/fetch-projects";

export default function Projects() {
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
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold fade-in">Projects</h1>
        <p className="text-lg text-muted-foreground fade-in">
          A collection of personal and professional projects that I&apos;ve worked on.
        </p>
      </section>

      <div className="grid gap-8">
        {projects.map((project) => (
          <article key={project.title} className="group fade-in">
            <Link
              href={project.link}
              target="_blank"
              className="block space-y-4 p-6 -mx-6 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-medium group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h2>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">{project.description}</p>
              {project.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
