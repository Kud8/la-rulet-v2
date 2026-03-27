const locations = [
  { address: 'БВП 47А', hours: '8:00 – 22:00', url: 'https://yandex.ru/maps/-/CHhKaML2' },
  { address: 'ТРЦ Весенний, фудкорт', hours: '10:00 – 22:00', url: 'https://yandex.ru/maps/-/CPExUNI-' },
  { address: 'Магнит на Курчатова', hours: '10:00 – 22:00', url: 'https://yandex.ru/maps/-/CLHsVE8y' },
];

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/la.rulet',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/la_rulet_volgodonsk',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <line x1="22" y1="2" x2="11" y2="13" strokeWidth="1.5" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+79959898598',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'VKontakte',
    href: 'https://vk.com/la.rulet',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
      </svg>
    ),
  },
];

export function ContactsPage() {
  return (
    <main className="flex-grow pt-32 lg:pt-40 pb-24">
      {/* Page header */}
      <section className="px-6 lg:px-12 text-center mb-16">
        <div className="inline-flex items-center space-x-4 mb-4">
          <span className="w-8 h-[1px] bg-accent" />
          <span className="font-sans text-accent tracking-[0.2em] text-[10px] font-semibold uppercase">
            г. Волгодонск
          </span>
          <span className="w-8 h-[1px] bg-accent" />
        </div>
        <h1 className="font-serif text-5xl lg:text-6xl text-brown mb-6">Контакты</h1>
        <p className="font-sans text-brown-light max-w-xl mx-auto leading-relaxed text-sm md:text-base">
          Три точки в городе — найдите ближайшую к вам.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        {/* Locations */}
        <section>
          <h2 className="font-serif text-3xl text-brown mb-10 text-center lg:text-left">Наши адреса</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <a
                key={loc.address}
                href={loc.url}
                target="_blank"
                rel="noreferrer"
                className="group block border border-brown/10 p-8 hover:border-accent transition-colors duration-300"
              >
                <div className="flex items-start mb-4">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-serif text-xl text-brown group-hover:text-accent transition-colors leading-tight">
                    {loc.address}
                  </span>
                </div>
                <div className="flex items-center ml-8">
                  <svg className="w-4 h-4 mr-2 text-brown-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
                  </svg>
                  <span className="font-sans text-sm text-brown-light">{loc.hours}</span>
                </div>
                <div className="mt-6 ml-8">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-accent border-b border-accent/40 pb-0.5 group-hover:border-accent transition-colors">
                    Открыть на карте →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Phone & Email */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="tel:+79959898598"
            className="group flex items-center space-x-6 border border-brown/10 p-8 hover:border-accent transition-colors duration-300">
            <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-brown-light mb-1">Телефон</p>
              <p className="font-serif text-2xl text-brown group-hover:text-accent transition-colors">+7 (995) 98-98-5-98</p>
            </div>
          </a>

          <a href="mailto:info@rouletterie.ru"
            className="group flex items-center space-x-6 border border-brown/10 p-8 hover:border-accent transition-colors duration-300">
            <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-brown-light mb-1">Email</p>
              <p className="font-serif text-2xl text-brown group-hover:text-accent transition-colors">info@rouletterie.ru</p>
            </div>
          </a>
        </section>

        {/* Social media */}
        <section className="text-center lg:text-left">
          <h2 className="font-serif text-3xl text-brown mb-8">Мы в социальных сетях</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center space-x-3 border border-brown/10 px-6 py-4 hover:border-accent transition-colors duration-300"
              >
                <span className="text-accent group-hover:scale-110 transition-transform">{icon}</span>
                <span className="font-sans text-sm text-brown group-hover:text-accent transition-colors tracking-wide">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
