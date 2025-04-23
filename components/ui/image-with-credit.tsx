import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithCreditProps {
  src: string;
  alt: string;
  credit?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageWithCredit({
  src,
  alt,
  credit,
  width,
  height,
  className,
}: ImageWithCreditProps) {
  return (
    <figure className={cn('mx-auto', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
        unoptimized={true}
      />
      {credit && <figcaption>{credit}</figcaption>}
    </figure>
  );
}
