import { Helmet } from 'react-helmet-async';
import {
  HeroSection,
  CategoryShowcase,
  CakesLanding,
  PhilosophySection,
  OrderCTA,
} from '../components';
import Silk from '@/components/Silk/Silk';
import { siteUrl, socials, contacts } from '../data/social';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Ля Рулет — Кафе-кондитерская в Волгодонске. Торты на заказ, круассаны, выпечка</title>
        <meta
          name="description"
          content="Кафе-кондитерская Ля Рулет в Волгодонске. Авторские торты на заказ, свежие круассаны и выпечка ручной работы. Четыре точки в городе, заказ в Max и Telegram."
        />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta
          property="og:title"
          content="Ля Рулет — Кафе-кондитерская в Волгодонске. Торты на заказ, круассаны, выпечка"
        />
        <meta
          property="og:description"
          content="Авторские торты на заказ, свежие круассаны и выпечка ручной работы. Четыре точки в Волгодонске."
        />
        <meta property="og:url" content={`${siteUrl}/`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Bakery',
            name: 'Ля Рулет',
            description:
              'Кафе-кондитерская в Волгодонске. Авторские торты на заказ, свежая выпечка и круассаны ручной работы.',
            url: siteUrl,
            telephone: contacts.phoneRaw,
            email: contacts.email,
            image: `${siteUrl}/og-image.jpg`,
            priceRange: '₽₽',
            servesCuisine: 'Кондитерская',
            address: [
              {
                '@type': 'PostalAddress',
                streetAddress: 'БВП 47А',
                addressLocality: 'Волгодонск',
                addressRegion: 'Ростовская область',
                addressCountry: 'RU',
              },
            ],
            location: [
              { '@type': 'Place', name: 'БВП 47А', openingHours: 'Mo-Su 08:00-22:00' },
              { '@type': 'Place', name: 'ТРЦ Весенний, фудкорт', openingHours: 'Mo-Su 10:00-22:00' },
              { '@type': 'Place', name: '30 лет победы, 18', openingHours: 'Mo-Su 08:00-22:00' },
              { '@type': 'Place', name: 'Магнит на Курчатова', openingHours: 'Mo-Su 09:00-22:00' },
            ],
            sameAs: [socials.instagram, socials.telegram, socials.vk],
          })}
        </script>
      </Helmet>

      {/* Subtle Silk backdrop on top of the page (behind Hero) */}
      {/*<div className="fixed inset-0 -z-10 pointer-events-none opacity-50">*/}
      {/*  <Silk speed={2.4} scale={0.9} color="#DBC3A9" noiseIntensity={0.4} rotation={0} />*/}
      {/*</div>*/}

      <main>
        <HeroSection />
        <CategoryShowcase />
        <CakesLanding />
        <PhilosophySection />
        <OrderCTA />
      </main>
    </>
  );
}
