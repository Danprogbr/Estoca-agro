export interface IGrainStorage {
  pricePerMonth: number;
  storageType: 'Silo' | 'Galpão' | 'Silo Bag';
  city: string;
  country: string;
}
