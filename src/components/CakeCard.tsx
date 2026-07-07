import type { Cake } from '../types/menu';
import { socials } from '../data/social';

interface CakeCardProps {
  cake: Cake;
}

export function CakeCard({ cake }: CakeCardProps) {
  return (
    <article className="group flex flex-col h-full">
      <a
        href={socials.max}
        target="_blank"
        rel="noreferrer"
        className="block relative overflow-hidden mb-5 bg-cream aspect-[2/3] rounded-[2px]"
      >
        <img
          src={cake.imageUrl}
          alt={cake.name}
          className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-block bg-accent text-brown-dark text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-2">
            Заказать в Max →
          </span>
        </div>
      </a>
      <div className="flex flex-col flex-grow px-1">
        <h3 className="font-serif text-2xl text-brown leading-tight mb-2">{cake.name}</h3>
        <p className="font-sans text-sm text-brown-light leading-relaxed mb-4">
          {cake.description}
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-brown/10 pt-4">
          <span className="font-sans font-medium text-brown text-lg">
            {cake.price.toLocaleString('ru-RU')} ₽ / кг
          </span>
          {cake.weight && (
            <span className="font-sans text-sm text-brown-light whitespace-nowrap">
              от {cake.weight.toLocaleString('ru-RU')} кг
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
