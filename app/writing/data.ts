interface WritingPost {
    title: string;
    date: string;
    link: string;
    tags: string[];
}

export const posts: WritingPost[] = [
    {
        title: "Shells & Payloads",
        date: "2024-03",
        link:"https://experienced-fang-1ea.notion.site/Shells-Payloads-1adf8bd3a6f080a5992ed8516f4794a9?pvs=4",
        tags: ["shells", "payloads", "pentesting"]
    },
    {
        title: "File Transfers",
        date: "2024-02",
        link:"https://experienced-fang-1ea.notion.site/File-Transfers-1acf8bd3a6f08071b518c5a25022e8f9?pvs=4",
        tags: ["file transfers", "pentesting"]
    },
    {
        title: "Security Assessments",
        date: "2024-02",
        link: "https://experienced-fang-1ea.notion.site/Security-Assessments-1acf8bd3a6f080bfa87adb81c77bfbcc?pvs=4",
        tags: ["security assessments", "pentesting"]
    },
    {
        title: "Information Gathering - Web Edition",
        date: "2024-02",
        link: "https://experienced-fang-1ea.notion.site/Information-Gathering-Web-Edition-1acf8bd3a6f080ed9509d5cf4c47f81d?pvs=4",
        tags: ["information gathering", "pentesting"]
    },
    {
        title: "Footprinting",
        date: "2024-01",
        link: "https://experienced-fang-1ea.notion.site/Footprinting-1acf8bd3a6f08016809ed1e7751e0953?pvs=4",
        tags: ["footprinting", "pentesting"]
    },
    {
        title: "Network Enumeration With Nmap",
        date: "2024-01",
        link: "https://experienced-fang-1ea.notion.site/Network-Enumeration-With-Nmap-1acf8bd3a6f080828641ecf3f3e1cc5a?pvs=74",
        tags: ["nmap", "networking", "pentesting"]
    },
];
