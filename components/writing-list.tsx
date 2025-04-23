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
        <p className="text-lg text-muted-foreground fade-in">
          Collection of technical articles and blog posts that I&apos;ve written.
        </p>
      </section>

      <div className="grid gap-2">
        {posts.map(post => (
          <article key={post.title} className="group fade-in">
            <Link
              href={post.link}
              target={post.link.startsWith('http') ? '_blank' : undefined}
              rel={post.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block space-y-2 rounded-lg p-4 transition-colors hover:bg-secondary"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium transition-colors group-hover:text-yellow-500">
                    {post.title}
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <div className="text-sm text-muted-foreground">
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    <Tag className="mr-1 h-3 w-3 text-gray-500 dark:text-gray-400" />
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
