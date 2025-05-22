import WritingList from '@/components/writing-list';
import { posts } from './data';

export default function Writings() {
  return <WritingList posts={posts} />;
}
