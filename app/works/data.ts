interface Work {
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
}

export const works: Work[] = [
  {
    title: 'Thai Bad Words',
    description: 'A library for detecting inappropriate Thai words in text content.',
    tags: ['TypeScript', 'Library'],
    link: 'https://www.npmjs.com/package/@sit-sandbox/thai-bad-words',
    category: 'Library',
  },
  {
    title: 'Goscanner',
    description: 'A powerful, high-performance port scanner written in Go.',
    tags: ['Go', 'Tools', 'CLI', 'Network'],
    link: 'https://github.com/Supakornn/goscanner',
    category: 'Tools',
  },
  {
    title: 'MyIP',
    description: 'A clean, intuitive terminal UI for network interface monitoring.',
    tags: ['Rust', 'TUI', 'Tools', 'Network'],
    link: 'https://github.com/Supakornn/myip-tui',
    category: 'Tools',
  },
  {
    title: 'CodingType',
    description: 'A Website for testing your typing speed in each programming languages syntax.',
    tags: ['Svelte', 'TailwindCSS'],
    link: 'https://codingtype.vercel.app/',
    category: 'Web Development',
  },
  {
    title: 'Valentine Roses',
    description: 'A websites for send a roses card to your loved ones.',
    tags: ['Next', 'TailwindCSS'],
    link: 'https://valentine-roses.vercel.app/',
    category: 'Web Development',
  },
  {
    title: 'Zigbrute',
    description: 'A fast and efficient password brute-force tool written in Zig.',
    tags: ['Zig', 'Tools', 'CLI'],
    link: 'https://github.com/Supakornn/zigbrute',
    category: 'Tools',
  },
];
