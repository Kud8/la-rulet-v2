const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

export const locations = [
  { address: 'БВП 47А', hours: '8:00 – 22:00', url: 'https://yandex.ru/maps/-/CHhKaML2' },
  { address: 'ТРЦ Весенний, фудкорт', hours: '10:00 – 22:00', url: 'https://yandex.ru/maps/-/CPExUNI-' },
  { address: '30 лет победы, 18', hours: 'Круглосуточно', url: 'https://yandex.ru/maps/-/CPg6jXO4' },
  { address: 'Магнит на Курчатова', hours: '9:00 – 22:00', url: 'https://yandex.ru/maps/-/CLHsVE8y' },
];

/** Парсит человекочитаемые часы работы для schema.org JSON-LD. */
export function getOpeningHoursSpecification(hours: string) {
  if (/круглосуточно/i.test(hours.trim())) {
    return {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: [...WEEKDAYS],
      opens: '00:00',
      closes: '23:59',
    };
  }

  const match = hours.match(/^(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})$/);
  if (!match) return undefined;

  return {
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: [...WEEKDAYS],
    opens: normalizeHour(match[1]),
    closes: normalizeHour(match[2]),
  };
}

function normalizeHour(time: string): string {
  const [h, m = '00'] = time.split(':');
  return `${h.padStart(2, '0')}:${m}`;
}
