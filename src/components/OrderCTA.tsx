import { socials, contacts } from '../data/social';

interface OrderCTAProps {
  variant?: 'dark' | 'light';
  title?: string;
  subtitle?: string;
}

export function OrderCTA({
  variant = 'dark',
  title = 'Готовы заказать?',
  subtitle = 'Напишите нам в удобный мессенджер — обсудим начинку, декор и срок.',
}: OrderCTAProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`relative overflow-hidden py-14 lg:py-20 px-6 lg:px-12 ${
        isDark ? 'bg-brown-dark text-cream-light' : 'bg-cream text-brown border-t border-brown/10'
      }`}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C5A07C 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <div className="inline-flex items-center justify-center space-x-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="font-sans tracking-[0.25em] text-[10px] uppercase text-accent font-semibold">
            Заказ в один клик
          </span>
          <span className="w-8 h-px bg-accent" />
        </div>

        <h2 className={`font-serif text-3xl lg:text-4xl mb-3 ${isDark ? 'text-cream-light' : 'text-brown'}`}>
          {title}
        </h2>
        <p
          className={`font-sans text-sm lg:text-base leading-relaxed mb-7 max-w-xl mx-auto ${
            isDark ? 'text-cream/70' : 'text-brown-light'
          }`}
        >
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={socials.max}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center px-7 py-3 bg-accent text-brown-dark overflow-hidden transition-all duration-300 hover:bg-accent-light w-full sm:w-auto"
          >
            <span className="relative z-10 text-sm tracking-[0.15em] uppercase font-semibold">
              Заказать в Max
            </span>
          </a>
          <a
            href={socials.telegram}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center px-7 py-3 border w-full sm:w-auto transition-all duration-300 ${
              isDark
                ? 'border-cream/30 text-cream/90 hover:border-accent hover:text-accent'
                : 'border-brown/30 text-brown hover:border-accent hover:text-accent'
            }`}
          >
            <span className="text-sm tracking-[0.15em] uppercase font-medium">Telegram</span>
          </a>
          <a
            href={`tel:${contacts.phoneRaw}`}
            className={`text-sm tracking-[0.15em] uppercase font-medium underline-offset-4 decoration-accent hover:underline transition-colors ${
              isDark
                ? 'text-cream/80 hover:text-accent'
                : 'text-brown hover:text-accent'
            }`}
          >
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}
