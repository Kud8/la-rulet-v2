export function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 lg:pt-40 lg:pb-32 min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-light to-cream opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text content */}
        <div className="lg:col-span-5 z-10 order-2 lg:order-1 pt-10 lg:pt-0 text-center lg:text-left">
          <div className="inline-flex items-center space-x-4 mb-6">
            <span className="w-12 h-[1px] bg-accent" />
            <span className="font-sans text-accent tracking-[0.2em] text-xs font-semibold uppercase">
              Лимитированная серия
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-brown mb-6">
            Искусство <br />
            <span className="italic font-light text-brown-light">Пасхального</span>
            <br />
            Утра
          </h1>

          <p className="font-sans text-brown-light mb-10 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Откройте предзаказ на авторские куличи от шеф-кондитера. Безупречная
            текстура влажного мякиша, щедрая начинка и утонченный декор в стиле
            французского прованса.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
            <a
              href="https://max.ru/u/f9LHodD0cOL4oqr05wGq-6bByoLuE37wmxGbzQWMB-SnqZznQwMqs7eZzZM"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-brown text-cream-light overflow-hidden transition-all duration-300 hover:bg-brown-dark w-full sm:w-auto"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-56 group-hover:h-56 z-0" />
              <span className="relative z-10 text-sm tracking-[0.15em] uppercase font-medium">
                Оформить предзаказ
              </span>
            </a>
            <a
              href="#details"
              className="text-sm tracking-widest uppercase font-medium text-brown hover:text-accent transition-colors duration-300 border-b border-transparent hover:border-accent pb-1"
            >
              Подробнее
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] lg:h-[700px] w-full order-1 lg:order-2 flex justify-center lg:block">
          {/* Main image */}
          <div className="absolute right-4 lg:right-0 top-0 w-[65%] sm:w-[55%] h-[85%] z-10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
            <img
              src="/other/table-1.jpg"
              alt="Стол с пасхальной выпечкой"
              className="w-full h-full object-cover arch-mask border-8 border-cream-light"
              fetchPriority="high"
            />
          </div>

          {/* Secondary image */}
          <div className="absolute left-4 lg:left-12 bottom-0 w-[60%] sm:w-[50%] h-[60%] z-20 shadow-xl transition-transform duration-700 hover:scale-[1.03]">
            <img
              src="/other/table-2.jpg"
              alt="Авторская выпечка Ля Рулет"
              className="w-full h-full object-cover rounded-sm border-8 border-cream-light"
              loading="lazy"
            />

            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-cream-light rounded-full p-4 shadow-lg flex flex-col items-center justify-center w-28 h-28 border border-accent/20">
              <span className="font-serif italic text-2xl text-accent">100%</span>
              <span className="text-[9px] uppercase tracking-widest text-brown text-center mt-1">
                Ручная
                <br />
                работа
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
