"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function About() {
    useEffect(() => {
        const elements = gsap.utils.toArray(".fade-in");
        gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <div className="space-y-12">
            <section className="space-y-4">
                <h1 className="text-3xl font-bold fade-in">About Me</h1>
                <div className="prose prose-neutral max-w-none space-y-4">
                    <p className="text-xl text-muted-foreground fade-in">
                        I&apos;m a{" "}
                        <span className="underline decoration-yellow-500">software developer</span>{" "}
                        based in Bangkok, Thailand. I interest in software developments and hacking.
                    </p>
                    <p className="text-lg text-muted-foreground fade-in">
                        Currently, I&apos;m a 1st year student in{" "}
                        <span className="underline decoration-yellow-500">
                            Information Technology
                        </span>{" "}
                        at the King Mongkut&apos;s University of Technology Thonburi.
                    </p>
                </div>
            </section>

            <section className="space-y-4 fade-in">
                <h2 className="text-2xl font-semibold">Experience</h2>
                <div className="space-y-6">
                    {[
                        {
                            role: "Freelance Developer",
                            company: "Freelance",
                            period: "2024 - Present",
                            description: "Development of web applications and softwares..."
                        }
                    ].map((job) => (
                        <div key={job.role} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium">{job.role}</h3>
                                <span className="text-sm text-muted-foreground">{job.period}</span>
                            </div>
                            <p className="text-muted-foreground">{job.company}</p>
                            <p className="text-muted-foreground">{job.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-4 fade-in">
                <h2 className="text-2xl font-semibold">Connect</h2>
                <div className="flex space-x-4">
                    <a
                        href="mailto:contact@supakorn.info"
                        className="flex items-center space-x-2 text-primary-foreground hover:text-primary transition-colors"
                    >
                        <div>Email</div>
                    </a>
                    <a
                        href="
                        http://github.com/supakornn
                        "
                        target="_blank"
                        className="flex items-center space-x-2 text-primary-foreground hover:text-primary transition-colors"
                    >
                        <div>Github</div>
                    </a>
                    <a
                        href="
                        https://www.linkedin.com/in/supakornieamgomol/
                        "
                        target="_blank"
                        className="flex items-center space-x-2 text-primary-foreground hover:text-primary transition-colors"
                    >
                        <div>Linkedin</div>
                    </a>
                </div>
            </section>
        </div>
    );
}
