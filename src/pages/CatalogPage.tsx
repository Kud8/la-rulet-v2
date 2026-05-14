import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import {
  CakeCard,
  BakeryCard,
  VariantCard,
  CatalogTabs,
  OrderCTA,
} from '../components';
import {
  cakes,
  croissants,
  variants,
  groupVariantsBySeason,
  getActiveSeasonKey,
  getOrderedSeasonKeys,
  getSeasonTitle,
} from '../utils/menu';
import type { CatalogTab, SeasonKey } from '../types/menu';
import { siteUrl } from '../data/social';
import ShinyText from '@/components/ShinyText/ShinyText';

const TABS: { key: CatalogTab; label: string }[] = [
  { key: 'cakes', label: 'Торты на заказ' },
  { key: 'croissants', label: 'Круассаны' },
  { key: 'variants', label: 'Варианты декора' },
];

const VALID_TABS = new Set<CatalogTab>(['cakes', 'croissants', 'variants']);

function isCatalogTab(value: string | null): value is CatalogTab {
  return value !== null && VALID_TABS.has(value as CatalogTab);
}

export function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab: CatalogTab = isCatalogTab(tabParam) ? tabParam : 'cakes';

  const handleTabChange = (key: CatalogTab) => {
    const next = new URLSearchParams(searchParams);
    if (key === 'cakes') next.delete('tab');
    else next.set('tab', key);
    setSearchParams(next, { replace: false });
  };

  const activeSeason = useMemo<SeasonKey>(() => getActiveSeasonKey(), []);
  const grouped = useMemo(() => groupVariantsBySeason(variants), []);
  const orderedSeasons = useMemo<SeasonKey[]>(() => {
    const all = getOrderedSeasonKeys();
    return [activeSeason, ...all.filter((s) => s !== activeSeason)];
  }, [activeSeason]);

  return (
    <>
      <Helmet>
        <title>Каталог — торты на заказ, круассаны, выпечка | Ля Рулет</title>
        <meta
          name="description"
          content="Каталог Ля Рулет: авторские торты на заказ, свежие круассаны, варианты праздничного декора. Ручная работа, г. Волгодонск."
        />
        <link rel="canonical" href={`${siteUrl}/catalog`} />
        <meta property="og:title" content="Каталог — Ля Рулет, Волгодонск" />
        <meta
          property="og:description"
          content="Торты на заказ, круассаны и варианты декора от кафе-кондитерской Ля Рулет."
        />
        <meta property="og:url" content={`${siteUrl}/catalog`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Главная', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Каталог', item: `${siteUrl}/catalog` },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Каталог Ля Рулет',
            url: `${siteUrl}/catalog`,
            itemListElement: [
              ...cakes.map((c, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                  '@type': 'Product',
                  name: c.name,
                  description: c.description,
                  image: `${siteUrl}${c.imageUrl}`,
                  offers: {
                    '@type': 'Offer',
                    price: c.price,
                    priceCurrency: 'RUB',
                    priceSpecification: {
                      '@type': 'UnitPriceSpecification',
                      price: c.price,
                      priceCurrency: 'RUB',
                      unitText: 'KGM',
                    },
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Ля Рулет' },
                  },
                },
              })),
              ...croissants.map((c, i) => ({
                '@type': 'ListItem',
                position: cakes.length + i + 1,
                item: {
                  '@type': 'Product',
                  name: c.name,
                  description: c.description,
                  image: `${siteUrl}/images/croissants/${
                    Array.isArray(c.imgName) ? c.imgName[0] : c.imgName
                  }`,
                  offers: {
                    '@type': 'Offer',
                    price: c.price,
                    priceCurrency: 'RUB',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Ля Рулет' },
                  },
                },
              })),
            ],
          })}
        </script>
      </Helmet>

      <main className="flex-grow pt-20 lg:pt-40">
        {/* Header */}
        <section className="px-6 lg:px-12 text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-sans text-accent tracking-[0.2em] text-[10px] font-semibold uppercase">
              Авторская витрина
            </span>
            <span className="w-8 h-[1px] bg-accent" />
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl text-brown mb-6">Каталог</h1>
          <p className="font-sans text-brown-light max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            Торты на заказ, свежие круассаны и идеи оформления — выбирайте и пишите нам в
            мессенджер для заказа.
          </p>
        </section>

        {/* Tabs */}
        <section className="px-6 lg:px-12 mb-16">
          <div className="max-w-7xl mx-auto">
            <CatalogTabs tabs={TABS} active={activeTab} onChange={handleTabChange} />
          </div>
        </section>

        {/* Content */}
        <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
          {activeTab === 'cakes' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {cakes.map((c) => (
                <CakeCard key={c.id} cake={c} />
              ))}
            </div>
          )}

          {activeTab === 'croissants' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {croissants.map((c) => (
                <BakeryCard key={c.id} item={c} />
              ))}
            </div>
          )}

          {activeTab === 'variants' && (
            <div className="space-y-16">
              <div className="bg-cream/60 border border-accent/20 px-6 py-5 max-w-3xl mx-auto text-center">
                <p className="font-sans text-sm text-brown-light leading-relaxed">
                  Это идеи и референсы оформления. Стоимость определяется индивидуально —
                  напишите в мессенджер с понравившимся вариантом, и мы обсудим детали.
                </p>
              </div>

              {orderedSeasons.map((seasonKey) => {
                const items = grouped[seasonKey];
                if (!items || items.length === 0) return null;
                const isActive = seasonKey === activeSeason;

                return (
                  <div key={seasonKey}>
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-serif text-2xl lg:text-3xl text-brown">
                        {getSeasonTitle(seasonKey)}
                      </h2>
                      {isActive && (
                        <span className="inline-flex items-center px-3 py-1 border border-accent/40 bg-cream-light">
                          <ShinyText
                            text="Актуально"
                            color="#C9A36B"
                            shineColor="#FFF4D6"
                            speed={2.5}
                            className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold"
                          />
                        </span>
                      )}
                      <span className="flex-1 h-px bg-brown/10" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {items.map((v) => (
                        <VariantCard key={v.id} variant={v} isActive={isActive} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <OrderCTA />
      </main>
    </>
  );
}
