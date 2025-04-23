import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import { BlogPost } from '@/types';
import { ImageWithCredit } from '@/components/ui/image-with-credit';

const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const getPostSlugs = () => {
  return fs.readdirSync(POSTS_PATH).filter(path => /\.mdx?$/.test(path));
};

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await compileMDX({
    source: content,
    components: {
      ImageWithCredit,
    },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        development: process.env.NODE_ENV === 'development',
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: 'tokyo-night',
              keepBackground: true,
              onVisitLine(node: any) {
                if (node.children.length === 0) {
                  node.children = [{ type: 'text', value: ' ' }];
                }
              },
              onVisitHighlightedLine(node: any) {
                node.properties.className = ['highlighted'];
              },
              onVisitHighlightedWord(node: any) {
                node.properties.className = ['word'];
              },
              filterMetaString: (meta: string) => meta,
              beforeHighlight: (options: any) => {
                options.showLanguage = true;
              },
            },
          ],
        ],
      },
    },
  });

  return {
    slug: realSlug,
    frontMatter: data,
    content: mdxSource.content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async slug => {
      const post = await getPostBySlug(slug);
      const { frontMatter } = post;

      return {
        slug: post.slug,
        title: frontMatter.title,
        date: frontMatter.date,
        tags: frontMatter.tags || [],
        description: frontMatter.description || '',
        link: `/writings/${post.slug}`,
      } as BlogPost;
    })
  );

  return posts.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    }
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 0;
  });
}
