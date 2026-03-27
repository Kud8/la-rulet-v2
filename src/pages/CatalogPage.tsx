import { useState } from 'react';

type Category = 'all' | 'decoration' | 'filling';

interface CatalogItem {
  id: number;
  name: string;
  image: string;
  category: 'decoration' | 'filling';
  categoryLabel: string;
  price: number;
  weight?: number;
}

const items: CatalogItem[] = [
  { id: 9, name: 'Ванильный крем', image: '/fillings/vanilla-cream.jpg', category: 'filling', categoryLabel: 'Начинки', price: 1000, weight: 900 },
  { id: 10, name: 'Кофейный', image: '/fillings/coffee.jpg', category: 'filling', categoryLabel: 'Начинки', price: 1000, weight: 900 },
  { id: 11, name: 'Фисташка', image: '/fillings/pistachio.jpg', category: 'filling', categoryLabel: 'Начинки', price: 1200, weight: 900 },
  { id: 12, name: 'Шоколадный', image: '/fillings/chocolate.jpg', category: 'filling', categoryLabel: 'Начинки', price: 1000, weight: 900 },
  { id: 1, name: 'Красный петушок', image: '/decoration/red-rooster.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },
  { id: 2, name: 'Голубой петушок', image: '/decoration/blue-rooster.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },
  { id: 3, name: 'Гнездо', image: '/decoration/nest.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },
  { id: 4, name: 'Зайчик', image: '/decoration/bunny.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },
  { id: 5, name: 'Васильки', image: '/decoration/cornflowers.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },
  { id: 6, name: 'Верба', image: '/decoration/willow.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },
  { id: 7, name: 'ХВ', image: '/decoration/easter-hv.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },
  { id: 8, name: 'ХВ с цукатами', image: '/decoration/easter-hv-fruits.jpg', category: 'decoration', categoryLabel: 'Украшения', price: 100 },];

export function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const tabs: { key: Category; label: string }[] = [
    { key: 'all', label: 'Все' },
    { key: 'decoration', label: 'Украшения' },
    { key: 'filling', label: 'Начинки' },
  ];

  return (
    <main className="flex-grow pt-32 lg:pt-40">
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
          Нежные бисквиты, тающие начинки и изысканный декор. Идеальное дополнение к утреннему кофе или вечернему чаепитию.
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
              <a href="#" className="block relative overflow-hidden mb-5 bg-cream aspect-[3/4] rounded-[2px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[9px] uppercase tracking-widest text-brown border border-brown/10">
                  {item.categoryLabel}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <div className="flex flex-col flex-grow px-1">
                <a href="#" className="block mb-2">
                  <h2 className="font-serif text-2xl text-brown group-hover:text-accent transition-colors leading-tight">
                    {item.name}
                  </h2>
                </a>
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
