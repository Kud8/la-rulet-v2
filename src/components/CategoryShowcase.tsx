import { Link } from 'react-router-dom';

interface Category {
  title: string;
  tagline: string;
  image: string;
  href: string;
  isAnchor?: boolean;
}

const categories: Category[] = [
  {
    title: 'Торты на заказ',
    tagline: 'Любой повод, индивидуальный декор и начинка',
    image: '/images/variants/cakes.jpg',
    href: '#cakes',
    isAnchor: true,
  },
  {
    title: 'Круассаны',
    tagline: 'Свежая слойка каждое утро — миндаль, нутелла, карамель',
    image: '/images/croissants/assorti.jpg',
    href: '/catalog?tab=croissants',
  },
  {
    title: 'Варианты декора',
    tagline: 'Идеи и референсы для индивидуального оформления',
    image: '/images/variants/decoration.jpg',
    href: '/catalog?tab=variants',
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-sans text-accent tracking-[0.2em] text-[10px] font-semibold uppercase">
              Витрина
            </span>
            <span className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-brown">Что у нас есть</h2>
          <div className="w-24 h-px bg-accent/50 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const inner = (
              <article className="group relative overflow-hidden block h-full bg-cream">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/85 via-brown-dark/30 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-cream-light">
                  <div className="w-10 h-px bg-accent mb-3 transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-serif text-2xl lg:text-3xl mb-2">{cat.title}</h3>
                  <p className="font-sans text-sm text-cream/80 leading-relaxed mb-4">
                    {cat.tagline}
                  </p>
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-0.5 group-hover:border-accent transition-colors">
                    Подробнее →
                  </span>
                </div>
              </article>
            );

            return cat.isAnchor ? (
              <a key={cat.title} href={cat.href} className="block">
                {inner}
              </a>
            ) : (
              <Link key={cat.title} to={cat.href} className="block">
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
