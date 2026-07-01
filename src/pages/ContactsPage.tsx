import { Helmet } from 'react-helmet-async';
import { getOpeningHoursSpecification, locations } from '../data/locations';
import { socials, contacts, siteUrl } from '../data/social';

const socialButtons = [
  {
    label: 'Max',
    href: socials.max,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 720 720">
        <path d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: socials.telegram,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <line x1="22" y1="2" x2="11" y2="13" strokeWidth="1.5" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: socials.instagram,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'VKontakte',
    href: socials.vk,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
      </svg>
    ),
  },
];

export function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Контакты — Ля Рулет, Волгодонск</title>
        <meta
          name="description"
          content="Четыре точки кафе-кондитерской Ля Рулет в Волгодонске. Адреса, телефон, email и соцсети для заказа тортов, круассанов и выпечки."
        />
        <link rel="canonical" href={`${siteUrl}/contacts`} />
        <meta property="og:title" content="Контакты — Ля Рулет, Волгодонск" />
        <meta
          property="og:description"
          content="Четыре точки в Волгодонске. Адреса, телефон, мессенджеры для заказа."
        />
        <meta property="og:url" content={`${siteUrl}/contacts`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Главная', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Контакты', item: `${siteUrl}/contacts` },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(
            locations.map((loc) => {
              const openingHours = getOpeningHoursSpecification(loc.hours);
              return {
                '@context': 'https://schema.org',
                '@type': 'Bakery',
                name: `Ля Рулет — ${loc.address}`,
                url: siteUrl,
                telephone: contacts.phoneRaw,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: loc.address,
                  addressLocality: 'Волгодонск',
                  addressRegion: 'Ростовская область',
                  addressCountry: 'RU',
                },
                ...(openingHours && { openingHoursSpecification: openingHours }),
              };
            }),
          )}
        </script>
      </Helmet>
      <main className="flex-grow pt-20 lg:pt-40 pb-12 lg:pb-24">
        {/* Page header */}
        <section className="px-6 lg:px-12 text-center mb-8 lg:mb-16">
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-sans text-accent tracking-[0.2em] text-[10px] font-semibold uppercase">
              г. Волгодонск
            </span>
            <span className="w-8 h-[1px] bg-accent" />
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-brown mb-6">Контакты</h1>
          <p className="font-sans text-brown-light max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Четыре точки в городе — найдите ближайшую к вам.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 lg:space-y-20">
          {/* Locations */}
          <section>
            <h2 className="font-serif text-3xl text-brown mb-6 lg:mb-10 text-center lg:text-left">
              Наши адреса
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {locations.map((loc) => (
                <a
                  key={loc.address}
                  href={loc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block border border-brown/10 p-6 lg:p-8 hover:border-accent transition-colors duration-300"
                >
                  <div className="flex items-start mb-4">
                    <svg
                      className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                    <span className="font-sans text-base text-brown-light">{loc.hours}</span>
                  </div>
                  <div className="mt-6 ml-8">
                    <span className="font-sans text-xs uppercase tracking-widest text-accent border-b border-accent/40 pb-0.5 group-hover:border-accent transition-colors">
                      Открыть на карте →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Phone & Email */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <a
              href={`tel:${contacts.phoneRaw}`}
              className="group flex items-center space-x-6 border border-brown/10 p-5 lg:p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-brown-light mb-1">Телефон</p>
                <p className="font-serif text-2xl text-brown group-hover:text-accent transition-colors">
                  {contacts.phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${contacts.email}`}
              className="group flex items-center space-x-6 border border-brown/10 p-5 lg:p-8 hover:border-accent transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-brown-light mb-1">Email</p>
                <p className="font-serif text-2xl text-brown group-hover:text-accent transition-colors">
                  {contacts.email}
                </p>
              </div>
            </a>
          </section>

          {/* Social media */}
          <section className="text-center lg:text-left">
            <h2 className="font-serif text-3xl text-brown mb-5 lg:mb-8">Мы в социальных сетях</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {socialButtons.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center space-x-3 border border-brown/10 px-5 py-4 hover:border-accent transition-colors duration-300"
                >
                  <span className="text-accent group-hover:scale-110 transition-transform">
                    {icon}
                  </span>
                  <span className="font-sans text-sm text-brown group-hover:text-accent transition-colors tracking-wide">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
