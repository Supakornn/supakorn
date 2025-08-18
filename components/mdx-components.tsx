'use client';

import React from 'react';
import Image from 'next/image';
import { ImageWithCredit } from './ui/image-with-credit';

const MdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mb-4 mt-8 text-3xl font-bold">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-3 mt-6 text-2xl font-semibold">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-2 mt-5 text-xl font-medium">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="mb-2 mt-4 text-lg font-medium">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 text-lg leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-4 ml-6 list-disc text-lg">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-4 ml-6 list-decimal text-lg">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="mb-1 text-lg">{children}</li>,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded bg-amber-100 p-1 text-base text-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
      {children}
    </pre>
  ),
  figure: ({ children }: { children: React.ReactNode }) => (
    <figure className="my-4">{children}</figure>
  ),
  figcaption: ({ children }: { children: React.ReactNode }) => (
    <figcaption className="mt-2 text-center text-sm italic text-gray-500 dark:text-gray-400">
      {children}
    </figcaption>
  ),
  ImageWithCredit,
};

export { MdxComponents };
