'use client';

import { Calendar, Tag, Filter } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef, useMemo } from 'react';
import gsap from 'gsap';
import Pagination from './pagination';
import { Button } from '@/components/ui/button';

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

type Category =
  | 'all'
  | 'web-development'
  | 'mobile-development'
  | 'ctf'
  | 'cybersecurity'
  | 'backend-development'
  | 'ai-ml'
  | 'low-level';

const CATEGORY_CONFIG = {
  'web-development': {
    label: 'Web Development',
    tags: [
      'web development',
      'htmx',
      'webassembly',
      'wasm',
      'frontend',
      'react',
      'vue',
      'angular',
      'javascript',
      'typescript',
      'css',
      'html',
    ],
  },
  'mobile-development': {
    label: 'Mobile Development',
    tags: ['mobile', 'android', 'ios', 'react native', 'flutter', 'kotlin', 'swift', 'mobile app'],
  },
  ctf: {
    label: 'CTF',
    tags: ['ctf', 'capture the flag', 'writeup', 'write-up'],
  },
  cybersecurity: {
    label: 'CyberSecurity',
    tags: [
      'security',
      'hacking',
      'penetration testing',
      'vulnerability',
      'malware',
      'forensics',
      'cyber security',
    ],
  },
  'backend-development': {
    label: 'Backend Development',
    tags: [
      'backend',
      'api',
      'database',
      'server',
      'go',
      'node.js',
      'python',
      'java',
      'c#',
      'php',
      'ruby',
      'django',
      'express',
    ],
  },
  'ai-ml': {
    label: 'AI/ML',
    tags: [
      'ai',
      'machine learning',
      'ml',
      'deep learning',
      'neural network',
      'tensorflow',
      'pytorch',
      'data science',
      'artificial intelligence',
    ],
  },
  'low-level': {
    label: 'Low-Level',
    tags: [
      'low level',
      'assembly',
      'c',
      'c++',
      'rust',
      'zig',
      'system programming',
      'embedded',
      'kernel',
      'os',
      'operating system',
    ],
  },
} as const;

export default function WritingList({ posts }: WritingListProps) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const filterRef = useRef(null);

  const POSTS_PER_PAGE = 5;

  // Helper function to get post category
  const getPostCategory = (post: BlogPost): Category => {
    const postTags = post.tags.map(tag => tag.toLowerCase());

    // Check each category's tags
    for (const [category, config] of Object.entries(CATEGORY_CONFIG)) {
      if (config.tags.some(tag => postTags.includes(tag))) {
        return category as Category;
      }
    }

    return 'web-development';
  };

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return posts;
    return posts.filter(post => getPostCategory(post) === selectedCategory);
  }, [posts, selectedCategory]);

  // Pagination logic
  const { currentPosts, totalPages } = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = filteredPosts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    return { currentPosts, totalPages };
  }, [filteredPosts, currentPage]);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Animation on first load
  useEffect(() => {
    if (!isFirstLoad) return;

    const tl = gsap.timeline({
      onComplete: () => setIsFirstLoad(false),
    });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    })
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        '-=0.3'
      )
      .to(
        filterRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        '-=0.2'
      )
      .to(
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

  // Generate categories with counts
  const categories = useMemo(() => {
    const categoryCounts = new Map<Category, number>();

    // Initialize counts
    categoryCounts.set('all', posts.length);
    Object.keys(CATEGORY_CONFIG).forEach(category => {
      categoryCounts.set(category as Category, 0);
    });

    // Count posts in each category
    posts.forEach(post => {
      const category = getPostCategory(post);
      categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
    });

    // Build categories array
    const categoriesArray = [
      { value: 'all' as Category, label: 'All', count: categoryCounts.get('all') || 0 },
    ];

    Object.entries(CATEGORY_CONFIG).forEach(([category, config]) => {
      const count = categoryCounts.get(category as Category) || 0;
      if (count > 0) {
        categoriesArray.push({
          value: category as Category,
          label: config.label,
          count,
        });
      }
    });

    return categoriesArray;
  }, [posts]);

  return (
    <div className="space-y-6">
      {/* Header Section */}
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

      {/* Category Filter */}
      <div ref={filterRef} className={isFirstLoad ? 'translate-y-4 transform opacity-0' : ''}>
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filter by:</span>
          {categories.map(category => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className="h-8"
            >
              {category.label}
              <span className="ml-1 rounded-full bg-muted px-1.5 py-0.5 text-xs">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
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
            <p className="text-lg text-muted-foreground">
              {selectedCategory === 'all'
                ? 'No writings found.'
                : `No ${selectedCategory.replace('-', ' ')} writings found.`}
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
