import { Link } from 'react-router-dom';
import GradientText from '@/components/GradientText/GradientText';
import ShinyText from '@/components/ShinyText/ShinyText';
import { CakeCard } from './CakeCard';
import { cakes } from '../utils/menu';
import { socials } from '../data/social';

const VISIBLE_LIMIT = 6;

export function CakesLanding() {
  const visible = cakes.slice(0, VISIBLE_LIMIT);
  const hasMore = cakes.length > VISIBLE_LIMIT;

  return (
    <section id="cakes" className="relative py-24 lg:py-32 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-light/85 to-cream/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-accent" />
            <ShinyText
              text="Торты на заказ"
              color="#C9A36B"
              shineColor="#FFF4D6"
              speed={3}
              className="font-sans tracking-[0.25em] text-[10px] font-semibold uppercase"
            />
            <span className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-brown leading-tight">
            Авторские торты{' '}
            <GradientText
              colors={['#C5A07C', '#7A6B5D', '#DBC3A9', '#C5A07C']}
              animationSpeed={10}
              className="italic font-light inline-block"
            >
              на заказ
            </GradientText>
          </h2>
          <p className="font-sans text-brown-light leading-relaxed mt-6">
            Соберём торт под любой повод: выберите начинку и декор, либо доверьте нам — предложим
            лучший вариант под бюджет и настроение события.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {visible.map((c) => (
            <CakeCard key={c.id} cake={c} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-14">
            <Link
              to="/catalog?tab=cakes"
              className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-brown hover:text-accent transition-colors border-b border-brown/20 hover:border-accent pb-1"
            >
              Смотреть все торты →
            </Link>
          </div>
        )}

        {/* Inline CTA — liquid glass panel */}
        <div className="relative overflow-hidden mt-20 lg:mt-24 px-6 lg:px-12 py-12 text-center rounded-2xl border border-white/50 bg-linear-to-br from-white/45 to-white/15 backdrop-blur-xl shadow-[0_10px_40px_-8px_rgba(122,107,93,0.25)]">
          {/* top-edge sheen */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent" />
          <h3 className="font-serif text-2xl lg:text-3xl text-brown mb-4">
            Хотите свой вариант?
          </h3>
          <p className="font-sans text-brown-light max-w-xl mx-auto mb-8">
            Расскажите идею в мессенджере — подскажем по начинке, декору и срокам, пришлём
            референсы из нашей галереи оформления.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={socials.max}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brown text-cream-light hover:bg-brown-dark transition-colors text-sm tracking-[0.15em] uppercase font-medium w-full sm:w-auto"
            >
              Обсудить в Max
            </a>
            <Link
              to="/catalog?tab=variants"
              className="inline-flex items-center justify-center px-8 py-4 border border-brown/20 text-brown hover:border-accent hover:text-accent transition-colors text-sm tracking-[0.15em] uppercase font-medium w-full sm:w-auto"
            >
              Галерея оформления
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
