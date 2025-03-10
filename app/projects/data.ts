interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export const projects: Project[] = [
    {
        title: "Thai Bad Words",
        description: "A library for detecting inappropriate Thai words in text content.",
        tags: ["TypeScript", "Regex"],
        link: "https://github.com/SIT-SandBox/thai-bad-words"
    },
    {
        title: "Coding Type",
        description:
            "A Website for testing your typing speed in each programming languages syntax.",
        tags: ["Svelte", "TailwinmdCSS"],
        link: "https://codingtype.vercel.app/"
    },
    {
        title: "Valentine Roses",
        description: "A websites for send a roses card to your loved ones.",
        tags: ["Next", "TailwindCSS"],
        link: "https://valentine-roses.vercel.app/"
    },
    {
        title: "LeetCode Solutions",
        description: "A collection of my solutions to LeetCode problems.",
        tags: ["Data Structures", "Algorithms"],
        link: "https://github.com/Supakornn/leetcode-supakornn"
    },
    {
        title: ".Dotfiles",
        description: "My personal dotfiles (MacOS), Neovim, Tmux, starship and ...",
        tags: ["dotfiles", "MacOS"],
        link: "https://github.com/Supakornn/.dotfiles"
    },
    {
        title: "Hexagonal Go",
        description: "E-Commerce REST APIs with Hexagonal Architecture.",
        tags: ["Go", "Fiber", "Docker" ,"PostgreSQL", "GCP", "Hexagonal Architecture"],
        link: "https://github.com/Supakornn/hexagonal-go"
    },
    {
        title: "Game Shop",
        description: "REST API for game shop management with inventory and virtual currency systems.",
        tags: ["Go", "Echo", "GORM", "Docker", "PostgreSQL", "GCP"],
        link: "https://github.com/Supakornn/game-shop"
    },
    {
        title: "Reverse Shell Generator",
        description: "Generate a reverse shell with terminal CLI.",
        tags: ["Go", "CLI"],
        link: "https://github.com/Supakornn/reverse-shell-gen"
    }
];
