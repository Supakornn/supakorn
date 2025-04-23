import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/mdx';
import PostContent from './post-content';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map(filename => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    const formattedPost = {
      slug: post.slug,
      frontMatter: {
        title: post.frontMatter.title || '',
        date: post.frontMatter.date || '',
        tags: post.frontMatter.tags || [],
      },
      content: post.content,
    };
    return <PostContent post={formattedPost} />;
  } catch (error) {
    console.error('Error in PostPage:', error);
    return notFound();
  }
}
