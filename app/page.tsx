'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { posts } from './writings/data';

export default function Home() {
  useEffect(() => {
    gsap.set('.fade-in', {
      opacity: 0,
      y: 20,
    });

    const elements = gsap.utils.toArray('.fade-in');
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, []);

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-2xl font-bold fade-in">
          Hello, I&apos;m <span className="text-yellow-500">[</span>Supakorn
          <span className="text-yellow-500">]</span>.
        </h1>
        <p className="text-lg text-primary-foreground fade-in">
          I&apos;m a Indie Developer who love to create stuff.
        </p>
        <p className="text-lg text-primary-foreground fade-in">
          View my resume{' '}
          <Link href="https://resume.supakorn.info" className="text-yellow-500 underline">
            here
          </Link>
          .
        </p>
      </section>

      <section className="space-y-6 fade-in">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Recent Writings</h2>
          <Link
            href="/writings"
            className="flex items-center gap-1 text-sm text-yellow-500 transition-colors hover:text-yellow-600"
          >
            View all
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-4">
          {posts.slice(0, 3).map(post => (
            <Link key={post.slug} href={`/writings/${post.slug}`} className="group block fade-in">
              <div className="transform rounded-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-5">
                  <div className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}{' '}
                  </div>
                  <h3 className="text-lg text-primary-foreground transition-colors group-hover:text-yellow-500">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6 fade-in">
        <div className="flex gap-4 fade-in">
          <Link href="https://github.com/Supakornn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-muted-foreground transition-colors hover:fill-yellow-500"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/supakornieamgomol/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="fill-muted-foreground transition-colors hover:fill-yellow-500"
            >
              <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
            </svg>
          </Link>
          <Link href="https://x.com/supak0rnn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 30 30"
              className="fill-muted-foreground transition-colors hover:fill-yellow-500"
            >
              <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
            </svg>
          </Link>
          <Link
            href="https://webring.wonderful.software#supakorn.info"
            title="วงแหวนเว็บ"
            className="absolute right-6"
          >
            <div className="group relative h-8 w-8 opacity-60 hover:text-yellow-700 hover:opacity-100">
              <Image
                alt="วงแหวนเว็บ"
                width={28}
                height={28}
                src="https://webring.wonderful.software/webring.black.svg"
                className="transition-transform duration-700 hover:rotate-360 group-hover:[filter:invert(48%)_sepia(13%)_saturate(3207%)_hue-rotate(0deg)_brightness(95%)_contrast(95%)]"
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
