import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed w-full z-50 top-0 border-b border-brown/10 bg-cream-light/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button className="text-brown hover:text-accent transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-10 items-center">
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'hover:text-accent'
                }`
              }
            >
              Каталог
            </NavLink>
            <a href="#" className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors duration-300">
              О нас
            </a>
          </nav>

          {/* Logo */}
          <NavLink
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <img src="/logo.png" alt="Ля Рулет" className="h-14" style={{ background: '#2a221cf0', borderRadius: '70px', padding: '10px 30px', boxSizing: "content-box" }} />
          </NavLink>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `hidden lg:block text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'hover:text-accent'
                }`
              }
            >
              Контакты
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
