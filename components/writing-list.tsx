'use client';

import { Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef, useMemo } from 'react';
import gsap from 'gsap';
import Pagination from './pagination';

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
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);

  const POSTS_PER_PAGE = 5;

  const { currentPosts, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    return { currentPosts, totalPages };
  }, [posts, currentPage]);

  useEffect(() => {
    if (!isFirstLoad) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsFirstLoad(false);
      },
    });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });

    tl.to(
      descriptionRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      '-=0.3'
    );

    tl.to(
      '.post-item',
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
      },
      '-=0.2'
    );

    return () => {
      tl.kill();
    };
  }, [isFirstLoad]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <h1
          ref={headerRef}
          className={
            isFirstLoad
              ? 'translate-y-4 transform text-2xl font-bold opacity-0'
              : 'text-2xl font-bold'
          }
        >
          Writings
        </h1>
        <p
          ref={descriptionRef}
          className={
            isFirstLoad
              ? 'translate-y-4 transform text-lg text-primary-foreground opacity-0'
              : 'text-lg text-primary-foreground'
          }
        >
          Collection of technical articles and blog posts that I&apos;ve written.
        </p>
      </section>

      {/* Main content */}
      <div className="grid gap-4">
        {currentPosts.length > 0 ? (
          currentPosts.map(post => (
            <article
              key={post.title}
              className={`post-card group ${isFirstLoad ? 'post-item translate-y-4 transform opacity-0' : ''}`}
            >
              <Link key={post.slug} href={`/writings/${post.slug}`} className="group block">
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
          ))
        ) : (
          <div
            className={
              isFirstLoad
                ? 'post-item translate-y-4 transform py-8 text-center opacity-0'
                : 'py-8 text-center'
            }
          >
            <p className="text-lg text-muted-foreground">No writings found.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
