import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative mt-auto py-6">
      <div className="container mx-auto px-6">
        <div className="relative">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()}{' '}
            <a href={SITE_CONFIG.github}>
              <span className="text-yellow-500">{SITE_CONFIG.name}</span>
            </a>
            . All rights reserved.
          </div>
          <a
            href="https://webring.wonderful.software#supakorn.info"
            title="วงแหวนเว็บ"
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <div className="group relative h-8 w-8 opacity-60 hover:text-yellow-700 hover:opacity-100">
              <Image
                alt="วงแหวนเว็บ"
                width={32}
                height={32}
                src="https://webring.wonderful.software/webring.black.svg"
                className="hover:rotate-360 transition-transform duration-700 group-hover:[filter:invert(48%)_sepia(13%)_saturate(3207%)_hue-rotate(0deg)_brightness(95%)_contrast(95%)]"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
