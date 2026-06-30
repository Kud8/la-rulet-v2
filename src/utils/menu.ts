import type { BakeryItem, Cake, SeasonKey, Variant } from '../types/menu';

export const cakes: Cake[] = [
  {
    "id": 1,
    "name": "Пломбир",
    "description": "Сочетание шоколадного и ванильного бисквитов с белым и шоколадным муссом на сливках, сгущенке и шоколадной крошке.",
    "price": 2000,
    "weight": 2,
    "imageUrl": "/images/cakes/plombir.jpg"
  }, {
    "id": 2,
    "name": "Молочная девочка",
    "description": "Нежные коржи на сгущенке с воздушным сливочным кремом и ягодным конфи.",
    "price": 2300,
    "imageUrl": "/images/cakes/molocnaya-devochka.jpg"
  }, {
    "id": 3,
    "name": "Наполеон",
    "description": "Классический торт с домашними хрустящими коржами и нежным заварным кремом на сливочном масле со сгущенкой.",
    "price": 2200,
    "imageUrl": "/images/cakes/napoleon.jpg"
  }, {
    "id": 4,
    "name": "Капучино-бейлис",
    "description": "Нежный кофейный бисквит с кремчизом и ганашем на молочном шоколаде, пропитанный ароматным кофейным ликером.",
    "price": 2400,
    "imageUrl": "/images/cakes/cappuccino-baileys.jpg"
  }, {
    "id": 5,
    "name": "Красный бархат",
    "description": "Шоколадный бисквит с клубничным конфи и воздушным кремчизом на основе сыра Филадельфия.",
    "price": 2500,
    "imageUrl": "/images/cakes/red-velvet.jpg"
  }, {
    "id": 6,
    "name": "Баунти",
    "description": "Кокосовый бисквит с заварным кремом на кокосовом молоке, маскарпоне, сливками и ганашем на молочном шоколаде.",
    "price": 2500,
    "imageUrl": "/images/cakes/bounty.jpg"
  }, {
    "id": 7,
    "name": "Черный лес",
    "description": "Шоколадный бисквит с кремчизом на сыре Филадельфия и насыщенным вишневым конфи.",
    "price": 2400,
    "imageUrl": "/images/cakes/black-forest.jpg"
  }, {
    "id": 8,
    "name": "Фисташка-малина",
    "description": "Ванильный бисквит с фисташковой пастой, кремчизом, нежным малиновым муссом и ярким малиновым конфи.",
    "price": 2700,
    "imageUrl": "/images/cakes/pistachio-raspberry.jpg"
  }, {
    "id": 9,
    "name": "Малина-ваниль",
    "description": "Воздушный ванильный бисквит с кремчизом, малиновым муссом и натуральным малиновым конфи.",
    "price": 2400,
    "imageUrl": "/images/cakes/raspberry-vanilla.jpg"
  }, {
    "id": 10,
    "name": "Йогуртовый персик",
    "description": "Кокосовый бисквит с нежным йогуртовым муссом на маскарпоне, сочными персиками и ароматной персиковой пропиткой.",
    "price": 2500,
    "imageUrl": "/images/cakes/yogurt-peach.jpg"
  }, {
    "id": 11,
    "name": "Морковный",
    "description": "Пряный морковный бисквит с кремчизом и соленой карамелью, создающей идеальный баланс вкусов.",
    "price": 2300,
    "imageUrl": "/images/cakes/carrot.jpg"
  }, {
    "id": 12,
    "name": "Сникерс-чизкейк",
    "description": "Классический чизкейк с соленой карамелью, жареным арахисом и бортиками из шоколадного печенья.",
    "price": 2700,
    "imageUrl": "/images/cakes/snickers-cheesecake.jpg"
  }, {
    id: 8,
    name: 'Мистер Профитроль',
    description: 'Шоколадный бисквит, кремчиз и профитроли в декоре. Эффектно и сытно.',
    price: 2400,
    imageUrl: '/images/cakes/mr-profiterole.jpg',
  }
];

export const croissants: BakeryItem[] = [
  {
    id: 1001,
    name: 'Круассан миндальный',
    price: 295,
    description:
      'Хрустящее слоёное тесто, щедро посыпанное миндальными лепестками, скрывает внутри нежный крем. Любимое утреннее лакомство.',
    imgName: ['croissant-almond.jpg', 'croissant-almond-2.jpg', 'croissant-almond-3.jpg'],
  },
  {
    id: 1003,
    name: 'Круассан солёная карамель',
    price: 245,
    description:
      'Хрустящее слоёное тесто, тающее во рту, и изысканная солёная карамель внутри. Идеальное сочетание сладости и солёности.',
    imgName: 'croissant-caramel.jpg',
  },
  {
    id: 1005,
    name: 'Круассан с нутеллой',
    price: 295,
    description:
      'Шоколадное наслаждение в каждой складке: слоёное тесто и нежная нутелла внутри.',
    imgName: 'croissant-nutella.jpg',
  },
  {
    id: 1009,
    name: 'Круассан с малиной',
    price: 255,
    description:
      'Слоёное тесто и нежное конфи из натуральной малины — лёгкая ягодная кислинка.',
    imgName: 'croissant-razz.jpg',
  },
  {
    id: 1007,
    name: 'Круассан с красной рыбой',
    price: 315,
    description: 'Слоёное тесто, нежная красная рыба и сливочный крем-сыр. Сытный завтрак.',
    imgName: ['croissant-salmon.jpg', 'croissant-salmon-2.jpg'],
  },
];

const seasonTitles: Record<SeasonKey, string> = {
  'new-year': 'Новый год',
  'feb-14': '14 февраля',
  'feb-23': '23 февраля',
  mother: 'День матери',
  'sep-1': '1 сентября',
  other: 'На каждый день',
};

export const variants: Variant[] = [
  // 14 февраля
  { id: 2004, name: 'Красное сердце', season: seasonTitles['feb-14'], seasonKey: 'feb-14', imgName: 'red-heart.jpg' },
  { id: 2005, name: 'Бенто', season: seasonTitles['feb-14'], seasonKey: 'feb-14', imgName: 'bento.jpg' },
  { id: 2006, name: 'Капучино-бейлис', season: seasonTitles['feb-14'], seasonKey: 'feb-14', imgName: 'cappuccino-baileys.jpg' },
  { id: 2007, name: 'Для самой любимой', season: seasonTitles['feb-14'], seasonKey: 'feb-14', imgName: 'love3.jpg' },
  { id: 2008, name: 'Мишка', season: seasonTitles['feb-14'], seasonKey: 'feb-14', imgName: 'bear.jpg' },
  { id: 2009, name: 'Нежность', season: seasonTitles['feb-14'], seasonKey: 'feb-14', imgName: 'kiss.jpg' },

  // 23 февраля
  { id: 2010, name: 'Украшение ягодами', season: seasonTitles['feb-23'], seasonKey: 'feb-23', imgName: 'berries.jpg' },

  // День матери
  { id: 2011, name: 'Надпись без фона', season: seasonTitles.mother, seasonKey: 'mother', imgName: 'best.jpg' },
  { id: 2012, name: 'Надпись на фоне', season: seasonTitles.mother, seasonKey: 'mother', imgName: 'best2.jpg' },

  // Новый год
  { id: 2101, name: 'Зелёные косы', season: seasonTitles['new-year'], seasonKey: 'new-year', imgName: 'green.jpg' },
  { id: 2102, name: 'Зелёный периметр', season: seasonTitles['new-year'], seasonKey: 'new-year', imgName: 'green2.jpg' },
  { id: 2103, name: 'Пряничный декор', season: seasonTitles['new-year'], seasonKey: 'new-year', imgName: 'gingerbread.jpg' },
  { id: 2104, name: 'С мандарином', season: seasonTitles['new-year'], seasonKey: 'new-year', imgName: 'mandarin.jpg' },
  { id: 2105, name: 'Красный торт', season: seasonTitles['new-year'], seasonKey: 'new-year', imgName: 'red.jpg' },
  { id: 2106, name: 'Полено', season: seasonTitles['new-year'], seasonKey: 'new-year', imgName: 'poleno.jpg' },

  // 1 сентября
  { id: 2017, name: 'Скучали?', season: seasonTitles['sep-1'], seasonKey: 'sep-1', imgName: '1-sen.jpg' },
  { id: 2018, name: 'Снова в школу', season: seasonTitles['sep-1'], seasonKey: 'sep-1', imgName: 'again.jpg' },
  { id: 2019, name: 'Школьный декор', season: seasonTitles['sep-1'], seasonKey: 'sep-1', imgName: 'ginger.jpg' },
  { id: 2020, name: '1 сентября', season: seasonTitles['sep-1'], seasonKey: 'sep-1', imgName: 'start.jpg' },
  { id: 2021, name: 'Рулет с линейкой', season: seasonTitles['sep-1'], seasonKey: 'sep-1', imgName: 'rulet.jpg' },

  // На каждый день
  { id: 2013, name: 'Ягодная кружка', season: seasonTitles.other, seasonKey: 'other', imgName: 'cup.jpg' },
  { id: 2014, name: 'Букет цветов и круассанов', season: seasonTitles.other, seasonKey: 'other', imgName: 'flowers.jpg' },
  { id: 2015, name: 'Ракушка Павлова', season: seasonTitles.other, seasonKey: 'other', imgName: 'pavlova.jpg' },
  { id: 2016, name: 'Декор на рисовой бумаге', season: seasonTitles.other, seasonKey: 'other', imgName: 'custom-order.jpg' },
];

export function getVariantImageUrl(variant: Variant): string {
  return `/images/variants/${variant.seasonKey}/${variant.imgName}`;
}

export function getCroissantImageUrl(name: string): string {
  return `/images/croissants/${name}`;
}

export function getSeasonTitle(key: SeasonKey): string {
  return seasonTitles[key];
}

const seasonOrder: SeasonKey[] = ['new-year', 'feb-14', 'feb-23', 'mother', 'sep-1', 'other'];

export function groupVariantsBySeason(items: Variant[]): Record<SeasonKey, Variant[]> {
  const grouped: Record<SeasonKey, Variant[]> = {
    'new-year': [],
    'feb-14': [],
    'feb-23': [],
    mother: [],
    'sep-1': [],
    other: [],
  };
  for (const v of items) grouped[v.seasonKey].push(v);
  return grouped;
}

export function getOrderedSeasonKeys(): SeasonKey[] {
  return seasonOrder;
}

/**
 * Возвращает ключ ближайшего/текущего сезона. Если ни одно окно
 * не активно — возвращает 'other' (постоянная витрина).
 */
export function getActiveSeasonKey(date: Date = new Date()): SeasonKey {
  const m = date.getMonth() + 1; // 1..12
  const d = date.getDate();

  // 1 декабря — 8 января
  if ((m === 12 && d >= 1) || (m === 1 && d <= 8)) return 'new-year';
  // 1 февраля — 14 февраля
  if (m === 2 && d <= 14) return 'feb-14';
  // 14 февраля — 23 февраля
  if (m === 2 && d > 14 && d <= 23) return 'feb-23';
  // 15 августа — 1 сентября
  if ((m === 8 && d >= 15) || (m === 9 && d <= 1)) return 'sep-1';
  // День матери — последнее воскресенье ноября ± 14 дней
  if (m === 11) {
    const motherDay = lastSundayOfMonth(date.getFullYear(), 11);
    const diffDays = Math.abs((date.getTime() - motherDay.getTime()) / 86400000);
    if (diffDays <= 14) return 'mother';
  }

  return 'other';
}

function lastSundayOfMonth(year: number, month: number): Date {
  // month is 1-12
  const lastDay = new Date(year, month, 0); // последний день месяца
  const dow = lastDay.getDay(); // 0=Sun
  lastDay.setDate(lastDay.getDate() - dow);
  return lastDay;
}
