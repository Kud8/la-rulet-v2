import type { Variant } from '../types/menu';
import { getVariantImageUrl } from '../utils/menu';
import { socials } from '../data/social';

interface VariantCardProps {
  variant: Variant;
  isActive?: boolean;
}

export function VariantCard({ variant, isActive = false }: VariantCardProps) {
  return (
    <a
      href={socials.max}
      target="_blank"
      rel="noreferrer"
      className={`group block bg-cream-light transition-all duration-500 ${
        isActive
          ? 'shadow-lg ring-1 ring-accent/40 hover:-translate-y-1'
          : 'opacity-80 hover:opacity-100'
      }`}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          src={getVariantImageUrl(variant)}
          alt={variant.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-brown leading-tight mb-1">{variant.name}</h3>
        {variant.season && (
          <p className="font-serif italic text-xs text-brown-light/70">{variant.season}</p>
        )}
      </div>
    </a>
  );
}
