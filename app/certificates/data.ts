interface Certificate {
    title: string;
    issuer: string;
    date: string;
    link: string;
    tags: string[];
}

export const certificates: Certificate[] = [
    {
        title: "Rest API (Intermediate)",
        issuer: "HackerRank",
        date: "2025-02",
        link: "https://www.hackerrank.com/certificates/iframe/ebf6fe5b2f66",
        tags: ["Rest API", "Intermediate"]
    },    
    {
        title: "Software Engineer Intern",
        issuer: "HackerRank",
        date: "2025-01",
        link: "https://www.hackerrank.com/certificates/iframe/802010770e14.",
        tags: ["Software Engineering", "Intern", "Problem Solving"]
    },
    {
        title: "JavaScript (Basic)",
        issuer: "HackerRank",
        date: "2025-01",
        link: "https://www.hackerrank.com/certificates/iframe/6341ff2c6ade",
        tags: ["JavaScript", "Basic"]
    },
    {
        title: "Golang (Basic)",
        issuer: "HackerRank",
        date: "2024-11",
        link: "https://www.hackerrank.com/certificates/iframe/7b8076dbaffa",
        tags: ["Golang", "Basic"]
    },
];
