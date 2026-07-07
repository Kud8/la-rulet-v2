import type { BakeryItem, Cake, SeasonKey, Variant } from '../types/menu';

export const cakes: Cake[] = [
  {
    "id": 2,
    "name": "Молочная девочка",
    "description": "Нежные коржи со сгущенкой, малиновое конфи и воздушный сливочный кем",
    "price": 2700,
    "weight": 1.5,
    "imageUrl": "/images/cakes/molocnaya-devochka.jpg"
  }, {
    "id": 3,
    "name": "Наполеон",
    "description": "Нежные домашние коржи и заварной крем со сгущенкой, украшается ягодами",
    "price": 2300,
    "weight": 2,
    "imageUrl": "/images/cakes/napoleon.jpg"
  }, {
    "id": 15,
    "name": "Медовик",
    "description": "Медовые коржи, клюквенное конфи, сметанный крем",
    "price": 1900,
    "weight": 2,
    "imageUrl": "/images/cakes/medovik.jpg"
  }, {
    "id": 5,
    "name": "Красный бархат",
    "description": "Шоколадный бисквит с клубничным конфи и воздушным кремчизом",
    "price": 2300,
    "weight": 2,
    "imageUrl": "/images/cakes/red-velvet.jpg"
  }, {
    "id": 11,
    "name": "Морковный",
    "description": "Нежный кремчиз, сочный морковный бисквит, карамель и попкорн",
    "price": 1700,
    "weight": 1.5,
    "imageUrl": "/images/cakes/carrot.jpg"
  }, {
    "id": 8,
    "name": "Фисташка-малина",
    "description": "Нежный кремчиз, ягодная малиновая начинка, фисташковый бисквит и легкий муссовый диск с малиной",
    "price": 1900,
    "weight": 1.7,
    "imageUrl": "/images/cakes/pistachio-raspberry.jpg"
  }, {
    "id": 12,
    "name": "Сникерс-чизкейк",
    "description": "Шоколадный бисквит, классический чизкейк с соленой карамелью и арахисом",
    "price": 2000,
    "weight": 1.5,
    "imageUrl": "/images/cakes/snickers-cheesecake.jpg"
  }, {
    "id": 10,
    "name": "Йогуртовый персик",
    "description": "Кокосовый бисвит с персиковой пропиткой, йогуртовый мусс и сочные персики",
    "price": 1900,
    "weight": 1.5,
    "imageUrl": "/images/cakes/yogurt-peach.jpg"
  }, {
    "id": 4,
    "name": "Капучино-бейлис",
    "description": "Нежный кремччиз, шоколадный бисквит на кофейно-ликерной пропитке и ганаш на молочном шоколаде",
    "price": 2100,
    "weight": 1.5,
    "imageUrl": "/images/cakes/cappuccino-baileys.jpg"
  }, {
    "id": 9,
    "name": "Малина-ваниль",
    "description": "Нежный кремчиз, воздушный ванильный бисквит, малиновый мусс, малиновое конфи",
    "price": 2000,
    "weight": 1.5,
    "imageUrl": "/images/cakes/raspberry-vanilla.jpg"
  }, {
    "id": 1,
    "name": "Пломбир",
    "description": "Два вида бисквитов: ванильный и шоколадный, а также два вида муссов: шоколадный и ванильный с шоколадной крошкой.",
    "price": 2200,
    "weight": 2,
    "imageUrl": "/images/cakes/plombir.jpg"
  }, {
    "id": 14,
    "name": "Мак лимон",
    "description": "Ванильный бисквит с маком, лимонный курд и воздушный кремчиз",
    "price": 1900,
    "weight": 1.5,
    "imageUrl": "/images/cakes/mac-limon.jpg"
  }, {
    "id": 7,
    "name": "Черный лес",
    "description": "Шоколадный бисквит, нежный кремчиз и вишневое конфи",
    "price": 1900,
    "weight": 1.7,
    "imageUrl": "/images/cakes/black-forest.jpg"
  }, {
    "id": 6,
    "name": "Баунти",
    "description": "Кокосовый бисквит с кокосовым кремом, маскарпоне, сливками и ганашем на молочном шоколаде",
    "price": 1900,
    "weight": 1.5,
    "imageUrl": "/images/cakes/bounty.jpg"
  }, {
    "id": 13,
    "name": "Мистер Профитроль",
    "description": "Шоколадный бисквит, шоколадный мусс и профитроли с заварным кремом.",
    "price": 2000,
    "weight": 1.5,
    "imageUrl": "/images/cakes/mr-profiterole.jpg"
  }, {
    "id": 16,
    "name": "Малина-кофе-шоколад",
    "description": "Шоколадный бисквит, малиновый мусс, малиновое конфи и ганаш на молочном шоколаде",
    "price": 2100,
    "weight": 2,
    "imageUrl": "/images/cakes/malina-kofe-shokolad.jpg"
  }, {
    "id": 17,
    "name": "Банановый",
    "description": "Ванильный бисквит, банан в карамели, хрстящий слой из вафельной крошки, нежный кремчиз и бельгийский шоколад",
    "price": 2100,
    "weight": 2,
    "imageUrl": "/images/cakes/banan.jpg"
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
