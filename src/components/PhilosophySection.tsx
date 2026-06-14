function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-accent mt-1 mr-4 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-sans text-accent tracking-[0.2em] text-xs font-semibold uppercase block mb-4">
            Наша философия
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-brown">
            Богатство вкуса и эстетики
          </h2>
          <div className="w-24 h-px bg-accent/50 mx-auto mt-8" />
        </div>

        {/* Block 1: Taste */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 lg:mb-32">
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-accent/10 transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
            <img
              src="/images/croissants/croissant-almond-2.jpg"
              alt="Текстура свежего круассана крупным планом"
              className="w-full aspect-[4/5] object-cover shadow-md"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <h3 className="font-serif text-3xl lg:text-4xl text-brown mb-6">
              Богатство вкуса
            </h3>
            <p className="font-sans text-brown-light mb-8 leading-relaxed text-lg">
              Каждый торт и круассан начинается с теста длительной ферментации, фермерского масла
              и натуральных ингредиентов. Без ароматизаторов и заменителей — только то, что
              действительно вкусно.
            </p>
            <ul className="space-y-5 font-sans text-brown-light mb-2">
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong className="font-medium text-brown">Фермерское сливочное масло 82,5%</strong>{' '}
                  и натуральная мадагаскарская ваниль.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong className="font-medium text-brown">Длительная расстойка теста</strong>{' '}
                  — для воздушной слойки и нежного мякиша.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span>
                  <strong className="font-medium text-brown">Свежесть каждый день</strong> —
                  выпечка готовится утром, без вчерашних остатков на витрине.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Block 2: Aesthetics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pr-12">
            <h3 className="font-serif text-3xl lg:text-4xl text-brown mb-6">
              Эстетика и ручной декор
            </h3>
            <p className="font-sans text-brown-light mb-8 leading-relaxed text-lg">
              Каждое изделие собирается вручную — без шаблонов и конвейера. Мы вдохновляемся
              французской классикой, сезонными цветами и природной палитрой.
            </p>
            <p className="font-sans text-brown-light mb-10 leading-relaxed text-lg">
              Для декора используем съедобные засушенные цветы, шоколад ручной работы, ягоды и
              макаронс. Любой торт можно собрать под цвет события — от строгой минималистики до
              ярких праздничных композиций.
            </p>
            <div className="bg-cream p-6 border border-brown/10">
              <p className="font-serif italic text-lg text-brown text-center">
                «Каждый торт собирается как букет — с вниманием к мельчайшим деталям композиции».
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/10 transform -translate-x-4 translate-y-4 -z-10 transition-transform group-hover:-translate-x-6 group-hover:translate-y-6" />
            <img
              src="/images/variants/decoration.jpg"
              alt="Авторские торты ручным декором"
              className="w-full aspect-[4/5] object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
