import { useState } from 'react';
import type { BakeryItem } from '../types/menu';
import { getCroissantImageUrl } from '../utils/menu';
import { socials } from '../data/social';

interface BakeryCardProps {
  item: BakeryItem;
}

export function BakeryCard({ item }: BakeryCardProps) {
  const images = Array.isArray(item.imgName) ? item.imgName : [item.imgName];
  const [activeIdx, setActiveIdx] = useState(0);
  const hasMany = images.length > 1;

  return (
    <article className="group flex flex-col h-full bg-cream-light">
      <a
        href={socials.max}
        target="_blank"
        rel="noreferrer"
        className="block relative overflow-hidden mb-5 bg-cream aspect-[3/4] rounded-[2px]"
        onMouseEnter={() => hasMany && setActiveIdx(1)}
        onMouseLeave={() => hasMany && setActiveIdx(0)}
      >
        <img
          src={getCroissantImageUrl(images[activeIdx])}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      <div className="flex flex-col flex-grow px-1">
        <h3 className="font-serif text-2xl text-brown leading-tight mb-2">{item.name}</h3>
        {item.description && (
          <p className="font-sans text-sm text-brown-light leading-relaxed mb-4">
            {item.description}
          </p>
        )}
        {item.price !== undefined && (
          <div className="mt-auto flex items-end justify-between border-t border-brown/10 pt-4">
            <span className="font-sans font-medium text-brown text-lg">
              {item.price} ₽ <span className="text-xs text-brown-light">/ шт</span>
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
