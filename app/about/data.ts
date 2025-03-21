export interface WorkExperience {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    degree: string;
    university: string;
    period: string;
}

export const workExperience: WorkExperience[] = [
    // {
    //     role: "Developer",
    //     company: "SnimTech",
    //     period: "2024 - Present",
    //     description: "Group of freelance developers. We develop web applications and softwares for clients in Thailand and abroad."
    // },
    {
        role: "Freelance Developer",
        company: "Freelance",
        period: "2021 - 2023",
        description: "Development of web applications and softwares for clients in Thailand and abroad."
    }
];

export const education: Education[] = [
    {
        degree: "Bachelor of Science in Information Technology",
        university: "King Mongkut's University of Technology Thonburi",
        period: "2024 - Present",
    }
];
   