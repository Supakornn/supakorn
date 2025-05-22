'use client';

import { ExternalLink, Calendar, Tag, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useMemo, useRef } from 'react';
import gsap from 'gsap';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  link: string;
  category: string;
}

interface WritingListProps {
  posts: BlogPost[];
}

export default function WritingList({ posts }: WritingListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const filtersRef = useRef(null);

  const allUniqueCategories = useMemo(
    () => Array.from(new Set(posts.map(post => post.category))).sort(),
    [posts]
  );

  useEffect(() => {
    const filtered = !selectedCategory
      ? posts
      : posts.filter(post => post.category === selectedCategory);

    setFilteredPosts(filtered);
  }, [selectedCategory, posts]);

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
      filtersRef.current,
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

  const selectCategory = (category: string) => {
    setSelectedCategory(prev => (prev === category ? null : category));
  };

  const clearFilters = () => {
    setSelectedCategory(null);
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

      {/* Main content with sidebar layout */}
      <div className="main-container">
        <style jsx>{`
          .main-container {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            .main-container {
              grid-template-columns: 200px minmax(0, 1fr);
            }
          }

          .sidebar {
            position: sticky;
            top: 2rem;
            align-self: start;
          }

          .category-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .content {
            min-width: 0;
          }

          .post-card-list {
            display: grid;
            gap: 1rem;
          }
        `}</style>

        {/* Sidebar with filters */}
        <div
          ref={filtersRef}
          className={`sidebar ${isFirstLoad ? 'translate-y-4 transform opacity-0' : ''}`}
        >
          <h3 className="mb-3 text-sm font-semibold">Filter by category</h3>
          {selectedCategory && (
            <button
              onClick={clearFilters}
              className="mb-2 inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/40"
            >
              <X className="mr-1 h-3 w-3" />
              Clear filter
            </button>
          )}
          <div className="category-list">
            {allUniqueCategories.map(category => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className={`inline-flex items-center rounded-full px-2 py-2 text-xs font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-yellow-950 dark:bg-yellow-500 dark:text-yellow-950'
                    : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300 dark:hover:bg-yellow-900/40'
                }`}
              >
                <Tag className="mr-1 h-3 w-3" />
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="content">
          <div className="post-card-list">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
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
                <p className="text-lg text-muted-foreground">No writings found in this category.</p>
                <button
                  onClick={clearFilters}
                  className="mt-2 text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
