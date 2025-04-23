'use client';

import { ExternalLink, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  link: string;
}

interface WritingListProps {
  posts: BlogPost[];
}

export default function WritingList({ posts }: WritingListProps) {
  useEffect(() => {
    const elements = gsap.utils.toArray('.fade-in');
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold fade-in">Writings</h1>
        <p className="text-lg text-primary-foreground fade-in">
          Collection of technical articles and blog posts that I&apos;ve written.
        </p>
      </section>

      <div className="grid gap-4">
        {posts.map(post => (
          <article key={post.title} className="group fade-in">
            <Link key={post.slug} href={`/writings/${post.slug}`} className="group block fade-in">
              <div className="transform rounded-lg border border-transparent bg-secondary/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-200 hover:bg-secondary dark:hover:border-yellow-900/30">
                <div className="flex justify-between">
                  <div className="mb-2">
                    <h3 className="text-lg font-medium text-primary-foreground transition-colors group-hover:text-yellow-500">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                </div>

                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
