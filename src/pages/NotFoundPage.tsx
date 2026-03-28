import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Страница не найдена — Ля Рулет</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <main className="flex-grow flex items-center justify-center px-6 py-32 text-center">
        <div>
          <p className="font-sans text-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4">
            Ошибка 404
          </p>
          <h1 className="font-serif text-6xl lg:text-8xl text-brown mb-6">
            Страница<br />
            <span className="italic font-light text-brown-light">не найдена</span>
          </h1>
          <p className="font-sans text-brown-light text-sm lg:text-base max-w-sm mx-auto leading-relaxed mb-10">
            Возможно, страница была удалена или вы перешли по неверной ссылке.
          </p>
          <NavLink
            to="/"
            className="inline-flex items-center space-x-2 text-sm font-medium tracking-widest uppercase border-b border-brown text-brown hover:text-accent hover:border-accent transition-colors duration-300 pb-1"
          >
            <span>Вернуться на главную</span>
          </NavLink>
        </div>
      </main>
    </>
  );
}
