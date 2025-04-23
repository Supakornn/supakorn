"use client";

import React from "react";
import Image from "next/image";
import { ImageWithCredit } from "./ui/image-with-credit";

const MdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-medium mt-5 mb-2">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-medium mt-4 mb-2">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="text-lg list-disc ml-6 mb-4">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="text-lg list-decimal ml-6 mb-4">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="text-lg mb-1">{children}</li>,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-200 rounded p-1 text-base">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  figure: ({ children }: { children: React.ReactNode }) => (
    <figure className="my-6">{children}</figure>
  ),
  figcaption: ({ children }: { children: React.ReactNode }) => (
    <figcaption className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 italic">
      {children}
    </figcaption>
  ),
  ImageWithCredit
};

export { MdxComponents };
