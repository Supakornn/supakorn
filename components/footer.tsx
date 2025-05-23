import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative mt-auto py-6">
      <div className="w-full px-6">
        <div className="relative flex items-center">
          <div className="flex-1 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()}{' '}
            <a href={SITE_CONFIG.github}>
              <span className="text-yellow-500">{SITE_CONFIG.name}</span>
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
