interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Thai Bad Words",
    description:
      "A library for detecting inappropriate Thai words in text content.",
    tags: ["TypeScript", "Library"],
    link: "https://github.com/SIT-SandBox/thai-bad-words",
  },
  {
    title: "Goscanner",
    description: "A powerful, high-performance port scanner written in Go.",
    tags: ["Go","Tools", "CLI", "Network"],
    link: "https://github.com/Supakornn/goscanner",
  },
  {
    title: "MyIP",
    description: "A clean, intuitive terminal UI for network interface monitoring.",
    tags: ["Rust", "TUI", "Tools", "Network"],
    link: "https://github.com/Supakornn/myip-tui",
  },
  {
    title: "Codingtype",
    description:
      "A Website for testing your typing speed in each programming languages syntax.",
    tags: ["Svelte", "TailwindCSS"],
    link: "https://codingtype.vercel.app/",
  },
  {
    title: "Valentine Roses",
    description: "A websites for send a roses card to your loved ones.",
    tags: ["Next", "TailwindCSS"],
    link: "https://valentine-roses.vercel.app/",
  },
  {
    title: "Zigbrute",
    description: "A fast and efficient password brute-force tool written in Zig.",
    tags: ["Zig", "Tools", "CLI"],
    link: "https://github.com/Supakornn/zigbrute",
  },
];
