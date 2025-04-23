import { getAllPosts } from '@/lib/mdx';
import WritingList from '@/components/writing-list';

export default async function Writings() {
  const posts = await getAllPosts();

  return <WritingList posts={posts} />;
}
