import { BlogPost } from '@/types';

export const posts: BlogPost[] = [
  {
    title: 'COBOL 101',
    slug: 'cobol-101',
    date: '2025-05-22',
    tags: ['COBOL', 'Mainframe', 'Programming'],
    description: 'Writing about COBOL and how to use it.',
    link: '/writings/cobol-101',
    category: 'Programming',
  },
  {
    title: 'เขียนเว็บแบบไม่ง้อ JavaScript ด้วย HTMX',
    slug: 'htmx-basic',
    date: '2025-04-15',
    tags: ['HTMX', 'Go', 'Web Development'],
    description: 'Writing about what is HTMX and how to use it to build a web application.',
    link: '/writings/htmx-basic',
    category: 'Web Development',
  },
  {
    title: 'WebAssembly (WASM) ด้วยภาษา Zig — เขียนเว็บด้วยความเร็วระดับ Native',
    slug: 'wasm-with-zig',
    date: '2025-04-13',
    tags: ['WebAssembly', 'Zig', 'Web Development'],
    description: 'Writing about what is WebAssembly and how to use it with Zig.',
    link: '/writings/wasm-with-zig',
    category: 'Web Development',
  },
  {
    title: 'STH-Mini-Web-CTF-2025 — Write Up',
    slug: 'sth-mini-web-ctf-2025-write-up',
    date: '2025-04-06',
    tags: ['CTF', 'Hacking'],
    description: 'Write up for the STH-Mini-Web-CTF-2025.',
    link: '/writings/sth-mini-web-ctf-2025-write-up',
    category: 'CTF',
  },
];
