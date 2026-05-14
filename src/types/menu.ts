export type SeasonKey =
  | 'new-year'
  | 'feb-14'
  | 'feb-23'
  | 'mother'
  | 'sep-1'
  | 'other';

export interface Cake {
  id: number;
  name: string;
  description: string;
  price: number;
  weight?: number;
  imageUrl: string;
}

export interface BakeryItem {
  id: number;
  name: string;
  description?: string;
  price?: number;
  imgName: string | string[];
}

export interface Variant {
  id: number;
  name: string;
  season?: string;
  seasonKey: SeasonKey;
  imgName: string;
}

export type CatalogTab = 'cakes' | 'croissants' | 'variants';
