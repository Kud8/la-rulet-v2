function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent mt-1 mr-4 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

export function SecretsSection() {
  return (
    <section id="details" className="py-24 lg:py-32 bg-cream-light px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="font-sans text-accent tracking-[0.2em] text-xs font-semibold uppercase block mb-4">
            Наши секреты
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-brown">
            Секрет Идеального Вкуса
          </h2>
          <div className="w-24 h-px bg-accent/50 mx-auto mt-8" />
        </div>

        {/* First content block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-accent/10 transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
            <img
              src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800"
              alt="Текстура и начинка кулича крупным планом"
              className="w-full aspect-[4/5] object-cover shadow-md"
            />
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <h3 className="font-serif text-3xl lg:text-4xl text-brown mb-6">
              Богатство Внутреннего Мира
            </h3>
            <p className="font-sans text-brown-light mb-8 leading-relaxed text-lg">
              Наши куличи — это не только красивый декор, но и невероятно нежная
              текстура. Мы используем уникальную технологию закваски и длительного
              брожения, чтобы добиться той самой "волокнистости" мякиша.
            </p>
            <ul className="space-y-5 font-sans text-brown-light mb-10">
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong className="font-medium text-brown">Щедрая начинка:</strong>{' '}
                  Авторский заварной крем с пралине, вытекающий при разрезании.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong className="font-medium text-brown">
                    Премиальные ингредиенты:
                  </strong>{' '}
                  Фермерское сливочное масло 82.5% и натуральная мадагаскарская
                  ваниль.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong className="font-medium text-brown">
                    Без добавления цукатов:
                  </strong>{' '}
                  Для тех, кто ценит чистый вкус сливочного теста и крема.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second content block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pr-12">
            <h3 className="font-serif text-3xl lg:text-4xl text-brown mb-6">
              Эстетика Подачи
            </h3>
            <p className="font-sans text-brown-light mb-8 leading-relaxed text-lg">
              Праздничный стол требует особенного оформления. Каждое изделие
              украшается вручную нашими кондитерами. Мы вдохновляемся весенним
              пробуждением природы и французской утонченностью.
            </p>
            <p className="font-sans text-brown-light mb-10 leading-relaxed text-lg">
              В декоре используются съедобные засушенные цветы, шоколадные гнезда
              ручной работы, макаронс и нежные ленты. Ваш кулич станет главным
              украшением пасхального застолья.
            </p>
            <div className="bg-cream p-6 border border-brown/10 mb-8">
              <p className="font-serif italic text-lg text-brown text-center">
                "Каждый кулич собирается как букет — с вниманием к мельчайшим
                деталям композиции."
              </p>
            </div>
            <button className="inline-flex items-center space-x-2 text-accent hover:text-brown transition-colors duration-300 font-medium uppercase tracking-widest text-sm border-b border-accent hover:border-brown pb-1">
              <span>Смотреть варианты упаковки</span>
              <ArrowIcon />
            </button>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/10 transform -translate-x-4 translate-y-4 -z-10 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6" />
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800"
              alt="Оформление пасхального стола и упаковка"
              className="w-full aspect-[4/5] object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
