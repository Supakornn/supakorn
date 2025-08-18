import { BlogPost } from '@/types';

// tags: ['web', 'mobile', 'ctf', 'security', 'backend', 'ai', 'low level']
export const posts: BlogPost[] = [
  {
    title: 'เขียนเว็บแบบไม่ง้อ JavaScript ด้วย HTMX',
    slug: 'htmx-basic',
    date: '2025-04-15',
    tags: ['web'],
    link: '/writings/htmx-basic',
  },
  {
    title: 'WebAssembly (WASM) ด้วยภาษา Zig',
    slug: 'wasm-with-zig',
    date: '2025-04-13',
    tags: ['web'],
    link: '/writings/wasm-with-zig',
  },
  {
    title: 'STH-Mini-Web-CTF-2025 — Write Up',
    slug: 'sth-mini-web-ctf-2025-write-up',
    date: '2025-04-06',
    tags: ['ctf'],
    link: '/writings/sth-mini-web-ctf-2025-write-up',
  },
];
