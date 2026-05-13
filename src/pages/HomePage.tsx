import { Helmet } from 'react-helmet-async';
import { HeroSection, PreorderBanner, SecretsSection } from '../components';
import Silk from '@/components/Silk/Silk';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Ля Рулет — Авторские куличи и десерты в Волгодонске</title>
        <meta name="description" content="Кафе-кондитерская Ля Рулет в Волгодонске. Авторские куличи ручной работы с богатыми начинками и изысканным декором. Три точки в городе. Предзаказ онлайн." />
        <link rel="canonical" href="https://xn--e1alatmd6f.xn--p1ai/" />
        <meta property="og:title" content="Ля Рулет — Авторские куличи и десерты в Волгодонске" />
        <meta property="og:description" content="Кафе-кондитерская Ля Рулет в Волгодонске. Авторские куличи ручной работы с богатыми начинками и изысканным декором." />
        <meta property="og:url" content="https://xn--e1alatmd6f.xn--p1ai/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          "name": "Ля Рулет",
          "description": "Кафе-кондитерская в Волгодонске. Авторские куличи ручной работы с богатыми начинками и изысканным декором.",
          "url": "https://xn--e1alatmd6f.xn--p1ai",
          "telephone": "+79959898598",
          "email": "info@rouletterie.ru",
          "image": "https://xn--e1alatmd6f.xn--p1ai/og-image.jpg",
          "priceRange": "₽₽",
          "servesCuisine": "Кондитерская",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "БВП 47А",
              "addressLocality": "Волгодонск",
              "addressRegion": "Ростовская область",
              "addressCountry": "RU"
            }
          ],
          "location": [
            {
              "@type": "Place",
              "name": "БВП 47А",
              "openingHours": "Mo-Su 08:00-22:00"
            },
            {
              "@type": "Place",
              "name": "ТРЦ Весенний, фудкорт",
              "openingHours": "Mo-Su 10:00-22:00"
            },
            {
              "@type": "Place",
              "name": "Магнит на Курчатова",
              "openingHours": "Mo-Su 09:00-22:00"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/la.rulet",
            "https://t.me/la_rulet_volgodonsk",
            "https://vk.com/la.rulet"
          ]
        })}</script>
      </Helmet>
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/*<Silk speed={3.6} scale={0.8} color="#ffd349" noiseIntensity={0.7} rotation={0} />*/}
      </div>
      <main>
        <HeroSection />
        <PreorderBanner />
        <SecretsSection />
      </main>
    </>
  );
}
