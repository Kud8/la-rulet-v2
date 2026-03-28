import { NavLink } from 'react-router-dom';

function LocationIcon() {
  return (
    <svg className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 mr-3 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const locations = [
  { address: 'БВП 47А', hours: '8:00 – 22:00', url: 'https://yandex.ru/maps/-/CHhKaML2' },
  { address: 'ТРЦ Весенний, фудкорт', hours: '10:00 – 22:00', url: 'https://yandex.ru/maps/-/CPExUNI-' },
  { address: 'Магнит на Курчатова', hours: '9:00 – 22:00', url: 'https://yandex.ru/maps/-/CLHsVE8y' },
];

export function Footer() {
  return (
    <footer className="bg-brown-dark text-cream-light py-10 lg:py-16 px-6 lg:px-12 border-t border-brown">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
        {/* Brand */}
        <div>
          <NavLink to="/" className="inline-block mb-6">
            <img src="/logo.png" alt="Ля Рулет" className="h-14" />
          </NavLink>
          <p className="font-sans text-sm text-cream/70 leading-relaxed">
            Кафе-кондитерская в г. Волгодонск. Создаём десерты с любовью к традициям и вниманием к деталям.
          </p>
        </div>

        {/* Addresses */}
        <div>
          <h3 className="font-serif text-lg tracking-widest uppercase mb-6 text-accent">Адреса</h3>
          <ul className="space-y-5 font-sans text-sm text-cream/80">
            {locations.map((loc) => (
              <li key={loc.address}>
                <a href={loc.url} target="_blank" rel="noreferrer"
                  className="flex items-start hover:text-accent transition-colors">
                  <LocationIcon />
                  <span>
                    {loc.address}
                    <br />
                    <span className="text-cream/50 text-xs">{loc.hours}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-serif text-lg tracking-widest uppercase mb-6 text-accent">Контакты</h3>
          <ul className="space-y-4 font-sans text-sm text-cream/80 mb-6">
            <li className="flex items-center">
              <PhoneIcon />
              <a href="tel:+79959898598" className="hover:text-accent transition-colors">
                +7 (995) 98-98-5-98
              </a>
            </li>
            <li className="flex items-center">
              <MailIcon />
              <a href="mailto:info@rouletterie.ru" className="hover:text-accent transition-colors">
                info@rouletterie.ru
              </a>
            </li>
          </ul>
          <div className="flex space-x-3">
            <a href="tel:+79959898598"
               className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <span className="sr-only">Позвонить</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a href="https://max.ru/u/f9LHodD0cOL4oqr05wGq-6bByoLuE37wmxGbzQWMB-SnqZznQwMqs7eZzZM" target="_blank" rel="noreferrer"
               className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <span className="sr-only">Max</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 720 720">
                <path d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z" />
              </svg>
            </a>
            <a href="https://vk.com/la.rulet" target="_blank" rel="noreferrer"
               className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <span className="sr-only">VKontakte</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
              </svg>
            </a>
            <a href="https://t.me/la_rulet_volgodonsk" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <span className="sr-only">Telegram</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="22" y1="2" x2="11" y2="13" strokeWidth="1.5" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="1.5" />
              </svg>
            </a>
            <a href="https://wa.me/+79959898598" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <span className="sr-only">WhatsApp</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/la.rulet" target="_blank" rel="noreferrer"
               className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-8 lg:mt-16 pt-6 lg:pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-cream/50 font-sans">
        <p>&copy; 2026 Кафе-кондитерская «Ля Рулет», г. Волгодонск. Все права защищены.</p>
      </div>
    </footer>
  );
}
