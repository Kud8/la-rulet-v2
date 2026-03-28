import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

type Category = 'all' | 'decoration' | 'filling';

interface CatalogItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: 'decoration' | 'filling';
  categoryLabel: string;
  price?: number;
  weight?: number;
}

const items: CatalogItem[] = [
  { id: 9, name: 'Сливочный крем', description: 'Воздушная, тающая начинка с нежным сливочным вкусом. Лёгкая текстура и мягкая сладость идеально дополняют пышное тесто кулича, создавая ощущение уюта и домашнего тепла.', image: '/fillings/vanilla-cream.jpg', category: 'filling', categoryLabel: 'Начинки', price: 1800, weight: 700 },
  { id: 10, name: 'Кофейный крем', description: 'Насыщенный крем с деликатными кофейными нотами и лёгкой карамельной глубиной. Идеальный баланс сладости и благородной горчинки для тех, кто любит более выразительные вкусы.', image: '/fillings/coffee.jpg', category: 'filling', categoryLabel: 'Начинки', price: 1800, weight: 700 },
  { id: 11, name: 'Крем Фисташка', description: 'Густая, бархатистая начинка с ярким вкусом натуральной фисташки. Лёгкая ореховая сладость и кремовая текстура делают этот вариант особенно изысканным и запоминающимся.', image: '/fillings/pistachio.jpg', category: 'filling', categoryLabel: 'Начинки', price: 2100, weight: 700 },
  { id: 12, name: 'Шоколадный кулич', description: 'Насыщенное шоколадное тесто с мягкой, влажной текстурой и глубоким вкусом какао. Настоящее удовольствие для любителей шоколада — ярко, сочно и очень ароматно.', image: '/fillings/chocolate.jpg', category: 'filling', categoryLabel: 'Начинки', price: 1660, weight: 550 },
  { id: 1, name: 'Красный петушок', description: 'Яркий и выразительный декор с традиционным петушком в насыщенных красных оттенках. Символ уюта, достатка и праздника, который сразу притягивает внимание и создаёт атмосферу торжества.', image: '/decoration/red-rooster.jpg', category: 'decoration', categoryLabel: 'Декор' },
  { id: 2, name: 'Голубой петушок', description: 'Нежный вариант с изящным голубым петушком и цветочными акцентами. Лёгкий, утончённый декор с весенним настроением — для тех, кто ценит мягкость и гармонию в деталях.', image: '/decoration/blue-rooster.jpg', category: 'decoration', categoryLabel: 'Декор' },
  { id: 3, name: 'Гнездо', description: 'Нежный кулич с уютным «гнездышком» из хрустящей соломки и шоколада, украшенный миниатюрными яйцами и дольками апельсина. Символ тепла, уюта и зарождения новой жизни — идеальный выбор для праздничного стола.', image: '/decoration/nest.jpg', category: 'decoration', categoryLabel: 'Декор' },
  { id: 4, name: 'Зайчик', description: 'Очаровательный весенний декор с кокосовой шапочкой, яркими акцентами и фигуркой зайчика. Лёгкий, игривый и по-настоящему праздничный — особенно понравится детям и создаст атмосферу радости.', image: '/decoration/bunny.jpg', category: 'decoration', categoryLabel: 'Декор' },
  { id: 5, name: 'Васильки', description: 'Элегантный кулич с белоснежной глазурью, украшенный нежными цветами василька. Утончённый и воздушный декор с нотками прованского настроения для ценителей классики и минимализма.', image: '/decoration/cornflowers.jpg', category: 'decoration', categoryLabel: 'Декор' },
  { id: 6, name: 'Верба', description: 'Традиционный пасхальный стиль с отсылкой к веточкам вербы — символу весны и обновления. Сдержанный, благородный декор с мягкими пастельными оттенками.', image: '/decoration/willow.jpg', category: 'decoration', categoryLabel: 'Декор' },
  { id: 7, name: 'ХВ', description: 'Классический кулич с лаконичной надписью «ХВ», украшенный орехами и крендельками. Тёплый, домашний и знакомый с детства вкус, воплощённый в стильном исполнении.', image: '/decoration/easter-hv.jpg', category: 'decoration', categoryLabel: 'Декор' },
  { id: 8, name: 'ХВ с цукатами', description: 'Яркий и праздничный вариант с изобилием цукатов, ягод и орехов. Сочная палитра и богатый декор делают этот кулич настоящим центром внимания на пасхальном столе.', image: '/decoration/easter-hv-fruits.jpg', category: 'decoration', categoryLabel: 'Декор' },
];

export function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const tabs: { key: Category; label: string }[] = [
    { key: 'all', label: 'Все' },
    { key: 'decoration', label: 'Декор' },
    { key: 'filling', label: 'Начинки' },
  ];

  return (
    <>
    <Helmet>
      <title>Каталог куличей — Ля Рулет, Волгодонск</title>
      <meta name="description" content="Каталог авторских куличей Ля Рулет. Сливочный, кофейный, фисташковый и шоколадный крем. Богатый декор на выбор. Ручная работа, г. Волгодонск." />
      <link rel="canonical" href="https://xn--e1alatmd6f.xn--p1ai/catalog" />
      <meta property="og:title" content="Каталог куличей — Ля Рулет, Волгодонск" />
      <meta property="og:description" content="Авторские куличи с богатыми начинками и изысканным декором. Ручная работа от шеф-кондитера." />
      <meta property="og:url" content="https://xn--e1alatmd6f.xn--p1ai/catalog" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--e1alatmd6f.xn--p1ai/" },
          { "@type": "ListItem", "position": 2, "name": "Каталог", "item": "https://xn--e1alatmd6f.xn--p1ai/catalog" }
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Каталог куличей Ля Рулет",
        "url": "https://xn--e1alatmd6f.xn--p1ai/catalog",
        "itemListElement": items
          .filter(item => item.price)
          .map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Product",
              "name": item.name,
              "description": item.description,
              "image": `https://xn--e1alatmd6f.xn--p1ai${item.image}`,
              "offers": {
                "@type": "Offer",
                "price": item.price,
                "priceCurrency": "RUB",
                "availability": "https://schema.org/InStock",
                "seller": { "@type": "Organization", "name": "Ля Рулет" }
              }
            }
          }))
      })}</script>
    </Helmet>
    <main className="flex-grow pt-20 lg:pt-40">
      {/* Page header */}
      <section className="px-6 lg:px-12 text-center mb-12 relative">
        <div className="inline-flex items-center space-x-4 mb-4">
          <span className="w-8 h-[1px] bg-accent" />
          <span className="font-sans text-accent tracking-[0.2em] text-[10px] font-semibold uppercase">
            Авторская выпечка
          </span>
          <span className="w-8 h-[1px] bg-accent" />
        </div>
        <h1 className="font-serif text-5xl lg:text-6xl text-brown mb-6">Каталог</h1>
        <p className="font-sans text-brown-light max-w-xl mx-auto leading-relaxed text-sm md:text-base">
          Пышные куличи с богатыми начинками и выразительным декором - идеальный центр пасхального стола.
        </p>
      </section>

      {/* Category tabs */}
      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar border-b border-brown/10">
            <div className="flex space-x-8 pb-4 min-w-max px-2">
              {tabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`text-xs md:text-sm font-medium tracking-widest uppercase pb-1 border-b transition-all ${
                    activeCategory === key
                      ? 'text-accent border-accent'
                      : 'text-brown-light hover:text-accent border-transparent'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((item) => (
            <article key={item.id} className="group flex flex-col h-full bg-cream-light">
              <div className="block relative overflow-hidden mb-5 bg-cream aspect-[3/4] rounded-[2px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[9px] uppercase tracking-widest text-brown border border-brown/10">
                  {item.categoryLabel}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col flex-grow px-1">
                <div className="block mb-2">
                  <h2 className="font-serif text-2xl text-brown group-hover:text-accent transition-colors leading-tight">
                    {item.name}
                  </h2>
                </div>
                <p className="font-sans text-xs text-brown-light leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.price && (
                  <div className="mt-auto flex items-end justify-between border-t border-brown/10 pt-4">
                    <div className="flex flex-col">
                      {item.weight && (
                        <span className="font-sans text-[10px] text-brown-light/70 uppercase tracking-widest mb-1">
                          Вес: {item.weight} г
                        </span>
                      )}
                      <span className="font-sans font-medium text-brown text-lg">
                        {item.price} ₽
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
