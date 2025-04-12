"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { fetchBlogs } from "@/lib/fetch-blogs";

export default function Blogs() {
  const [posts, setPosts] = useState<
    Array<{
      title: string;
      link: string;
      description: string;
    }>
  >([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const fetchedBlogs = await fetchBlogs();
      setPosts(fetchedBlogs);
    };
    loadBlogs();
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
  }, [posts]);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold fade-in">Blogs</h1>
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
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
