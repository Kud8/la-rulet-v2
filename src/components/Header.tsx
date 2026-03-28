import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
    isActive ? 'text-accent' : 'hover:text-accent'
  }`;

export function Header() {
  return (
    <header className="fixed w-full z-50 top-0 border-b border-brown/10 bg-cream-light/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex lg:hidden justify-between items-center h-16">
          <NavLink to="/" className="max-[400px]:hidden">
            <img src="/logo-2.png" alt="Ля Рулет" className="h-6" />
          </NavLink>
          <nav className="flex items-center space-x-3">
            <NavLink to="/" end className={navLinkClass}>Главная</NavLink>
            <NavLink to="/catalog" className={navLinkClass}>Каталог</NavLink>
            <NavLink to="/contacts" className={navLinkClass}>Контакты</NavLink>
          </nav>
        </div>

        <div className="hidden lg:flex justify-between items-center h-24">
          <nav className="flex space-x-10 items-center">
            <NavLink to="/" end className={navLinkClass}>Главная</NavLink>
            <NavLink to="/catalog" className={navLinkClass}>Каталог</NavLink>
          </nav>

          <NavLink to="/" className="absolute left-1/2 transform -translate-x-1/2">
            <img src="/logo-2.png" alt="Ля Рулет" className="h-14" />
          </NavLink>

          <NavLink to="/contacts" className={navLinkClass}>Контакты</NavLink>
        </div>
      </div>
    </header>
  );
}
