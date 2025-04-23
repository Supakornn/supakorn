'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useEffect } from 'react';
import gsap from 'gsap';

type PostContentProps = {
  post: {
    slug: string;
    frontMatter: {
      title: string;
      date: string;
      tags: string[];
    };
    content: React.ReactNode;
  };
};

export default function PostContent({ post }: PostContentProps) {
  const { frontMatter, content } = post;

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
    <div className="py-8">
      <Link
        href="/writings"
        className="group mb-10 inline-flex items-center text-sm text-muted-foreground transition-colors fade-in hover:text-foreground hover:text-yellow-500"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to all posts
      </Link>

      <article className="mdx-wrapper">
        <header className="mb-10 fade-in">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-gray-50">
            {frontMatter.title}
          </h1>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <time>
                {new Date(frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontMatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="mdx-content prose prose-lg max-w-none text-lg fade-in dark:prose-invert">
          {content}
        </div>
      </article>
    </div>
  );
}
