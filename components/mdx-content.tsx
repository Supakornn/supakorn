'use client';

import React from 'react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { ImageWithCredit } from './ui/image-with-credit';

interface MDXContentProps {
  source: any;
}

const components = {
  h1: (props: any) => (
    <h1
      className="mb-8 mt-16 border-b border-gray-200 pb-3 text-3xl font-bold text-gray-900 dark:border-gray-800 dark:text-gray-50"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2 className="mb-6 mt-14 text-2xl font-bold text-gray-800 dark:text-gray-100" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mb-5 mt-12 text-xl font-bold text-gray-800 dark:text-gray-100" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="mb-4 mt-10 text-lg font-semibold text-gray-800 dark:text-gray-100" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300" {...props} />
  ),
  ul: (props: any) => (
    <ul
      className="mb-8 mt-6 list-disc space-y-3 pl-8 text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="mb-8 mt-6 list-decimal space-y-3 pl-8 text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  li: (props: any) => <li className="mb-3 text-lg" {...props} />,
  a: (props: any) => (
    <a
      className="font-medium text-blue-500 transition-colors duration-200 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="my-8 rounded-r-lg border-l-4 border-blue-500 bg-gray-50 py-3 pl-6 italic text-gray-700 dark:border-blue-400 dark:bg-gray-800/50 dark:text-gray-300"
      {...props}
    />
  ),
  img: (props: any) => (
    <div className="relative mx-auto my-6 h-auto max-w-full">
      <Image
        className="rounded-lg shadow-md"
        alt=""
        {...props}
        width={800}
        height={600}
        style={{ width: 'auto', height: 'auto' }}
        priority={false}
      />
    </div>
  ),
  hr: (props: any) => <hr className="my-8 border-gray-200 dark:border-gray-800" {...props} />,
  table: (props: any) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="min-w-full divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800"
        {...props}
      />
    </div>
  ),
  th: (props: any) => (
    <th
      className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="whitespace-nowrap border-t border-gray-200 px-6 py-4 text-sm text-gray-700 dark:border-gray-800 dark:text-gray-300"
      {...props}
    />
  ),
  tr: (props: any) => (
    <tr
      className="transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-gray-800/50"
      {...props}
    />
  ),
  pre: (props: any) => {
    if (
      props.children?.props?.className?.startsWith('language-') ||
      props.children?.props?.children?.type === 'code'
    ) {
      const className = props.children?.props?.className || '';
      const matches = className.match(/language-([a-zA-Z0-9_-]+)/);
      const language = matches ? matches[1] : 'text';
      const code = props.children?.props?.children || '';

      return (
        <div className="my-8 overflow-hidden rounded-lg border border-gray-200 bg-gray-900 dark:border-gray-800">
          {language && (
            <div className="border-b border-gray-700 bg-gray-800 px-4 py-1 font-mono text-xs text-gray-300">
              {language}
            </div>
          )}
          <pre className="overflow-x-auto p-4 text-sm">
            {typeof code === 'string' ? <code className={className}>{code}</code> : props.children}
          </pre>
        </div>
      );
    }

    return (
      <pre
        className="my-6 mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
        {...props}
      />
    );
  },
  code: (props: any) => {
    if (typeof props.className === 'string' && props.className.startsWith('language-')) {
      return <code className={props.className} {...props} />;
    }

    return (
      <code
        className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:bg-gray-800 dark:text-blue-400"
        {...props}
      />
    );
  },
  figure: (props: any) => <figure className="my-8" {...props} />,
  figcaption: (props: any) => (
    <figcaption
      className="mt-2 text-center text-sm italic text-gray-500 dark:text-gray-400"
      {...props}
    />
  ),
  ImageWithCredit,
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="mdx-content prose-lg">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
