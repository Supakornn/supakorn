import { BlogPost } from '@/types';

export const posts: BlogPost[] = [
  {
    title: 'เขียนเว็บแบบไม่ง้อ JavaScript ด้วย HTMX',
    slug: 'htmx-basic',
    date: '2025-04-15',
    tags: ['HTMX', 'Go', 'Web Development'],
    description: 'Writing about what is HTMX and how to use it to build a web application.',
    link: '/writings/htmx-basic',
  },
  {
    title: 'WebAssembly (WASM) ด้วยภาษา Zig — เขียนเว็บด้วยความเร็วระดับ Native',
    slug: 'wasm-with-zig',
    date: '2025-04-13',
    tags: ['WebAssembly', 'Zig', 'Web Development'],
    description: 'Writing about what is WebAssembly and how to use it with Zig.',
    link: '/writings/wasm-with-zig',
  },
  {
    title: 'STH-Mini-Web-CTF-2025 — Write Up',
    slug: 'sth-mini-web-ctf-2025-write-up',
    date: '2025-04-06',
    tags: ['CTF', 'Hacking'],
    description: 'Write up for the STH-Mini-Web-CTF-2025.',
    link: '/writings/sth-mini-web-ctf-2025-write-up',
  },
];
