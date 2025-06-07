export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  link: string;
}

declare module '*.mdx' {
  import { ReactNode } from 'react';

  const MDXComponent: (props: any) => ReactNode;
  export default MDXComponent;
}
