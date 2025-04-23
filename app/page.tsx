"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Home() {
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
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-3xl font-bold fade-in">
          Hello, I&apos;m <span className="text-yellow-500">[</span>Supakorn
          <span className="text-yellow-500">]</span>
        </h1>
        <p className="text-lg text-muted-foreground fade-in">
          I&apos;m a <span className="text-lg underline decoration-yellow-500">Developer</span>{" "}
          based in Bangkok, Thailand. I interest in software developments and cybersecurity.
        </p>
        <p className="text-lg text-muted-foreground fade-in">
          Now, I&apos;m a student at{" "}
          <span className="text-lg underline decoration-yellow-500">
            King Mongkut&apos;s University of Technology Thonburi
          </span>
          , studying Information Technology.
        </p>
        <p className="text-lg text-muted-foreground fade-in">
          I&apos;m have working as a{" "}
          <span className="text-lg underline decoration-yellow-500">freelance developer</span> for 2
          years. I have worked with my friends to develop web applications for clients.
        </p>
      </section>
    </div>
  );
}
