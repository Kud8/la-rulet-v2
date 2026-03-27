function LocationIcon() {
  return (
    <svg
      className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-5 h-5 mr-3 text-accent flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5" />
      <line
        x1="17.5"
        y1="6.5"
        x2="17.51"
        y2="6.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <line x1="22" y1="2" x2="11" y2="13" strokeWidth="1.5" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="1.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brown-dark text-cream-light py-16 px-6 lg:px-12 border-t border-brown">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <a href="#" className="inline-block flex-col mb-6">
            <span className="font-serif text-3xl tracking-[0.15em] uppercase text-cream leading-none block mb-1">
              Ля Рулет
            </span>
            <span className="font-serif italic text-xs text-cream/60">
              Patisserie Francaise
            </span>
          </a>
          <p className="font-sans text-sm text-cream/70 leading-relaxed max-w-xs">
            Французская кондитерская в самом сердце города. Создаем десерты с любовью
            к традициям и вниманием к деталям.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-accent">
            Меню
          </h4>
          <ul className="space-y-4 font-sans text-sm text-cream/80">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Пасхальная коллекция
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Круассаны и выпечка
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Торты на заказ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Подарочные наборы
              </a>
            </li>
          </ul>
        </div>

        {/* Customers */}
        <div>
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-accent">
            Клиентам
          </h4>
          <ul className="space-y-4 font-sans text-sm text-cream/80">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Доставка и оплата
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Условия предзаказа
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Программа лояльности
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Частые вопросы
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-accent">
            Контакты
          </h4>
          <ul className="space-y-4 font-sans text-sm text-cream/80 mb-6">
            <li className="flex items-start">
              <LocationIcon />
              <span>
                ул. Французская, 15
                <br />
                Ежедневно 08:00 - 21:00
              </span>
            </li>
            <li className="flex items-center">
              <PhoneIcon />
              <a href="tel:+79991234567" className="hover:text-accent transition-colors">
                +7 (999) 123-45-67
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <span className="sr-only">Telegram</span>
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-cream/50 font-sans">
        <p>&copy; 2026 Кондитерская "Ля Рулет". Все права защищены.</p>
      </div>
    </footer>
  );
}
