import { Link } from 'react-router-dom';

export function PreorderBanner() {
  return (
    <section id="preorder" className="bg-brown py-12 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#C5A07C 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-cream-light">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl italic mb-2">
            Предзаказ к Светлой Пасхе
          </h2>
          <p className="font-sans font-light text-cream/80 tracking-wide">
            Принимаем заказы до 3 апреля.
          </p>
          <p className="font-sans text-sm text-accent mt-3 tracking-wide inline-flex items-center gap-2">
            Бесплатная доставка при заказе от 2 000 ₽
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <span className="block font-serif text-4xl text-accent mb-1">8</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/70">
              Видов декора
            </span>
          </div>
          <div className="text-center">
            <span className="block font-serif text-4xl text-accent mb-1">4</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/70">
              Начинки
            </span>
          </div>
          <div className="w-px h-12 bg-cream/20" />
          <div className="text-center">
            <span className="block font-serif text-4xl text-accent mb-1">
              48<span className="text-xl">ч</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-cream/70">
              Выдержка теста
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-3 w-full sm:w-auto">
          <a
            href="https://max.ru/u/f9LHodD0cOL4oqr05wGq-6bByoLuE37wmxGbzQWMB-SnqZznQwMqs7eZzZM"
            target="_blank"
            rel="noreferrer"
            aria-label="Оформить предзаказ в мессенджере Max"
            className="block w-full text-center bg-transparent border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 uppercase tracking-widest text-xs font-medium transition-all duration-300"
          >
            Оформить предзаказ
          </a>
          <Link
            to="/catalog"
            className="block w-full text-center bg-transparent border border-cream/30 text-cream/70 hover:border-cream hover:text-cream px-8 py-3 uppercase tracking-widest text-xs font-medium transition-all duration-300"
          >
            Посмотреть каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
