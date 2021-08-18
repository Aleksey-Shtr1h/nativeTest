import {nanoid} from 'nanoid';

interface Card {
  id: string;
  pathImage: any;
  price: number;
  discount?: number | null;
  rating: number;
  title: string;
  isLike: boolean;
}

export const mockCards: Card[] = [
  {
    id: '1',
    pathImage: require('../assets/images/prod-1.png'),
    price: 1990,
    discount: 990,
    rating: 4.4,
    title: 'Адаптер CSR USB Bluetooth 4.0 блютуз',
    isLike: true,
  },
  {
    id: '2',
    pathImage: require('../assets/images/prod-2.png'),
    price: 339,
    discount: 233,
    rating: 4.2,
    title: "Драже M&M's c молочным шоколадом",
    isLike: false,
  },
  {
    id: '3',
    pathImage: require('../assets/images/prod-3.png'),
    price: 7990,
    discount: 940,
    rating: 4.2,
    title: 'Беспроводные наушники i14 TWS',
    isLike: true,
  },
  {
    id: '4',
    pathImage: require('../assets/images/prod-4.png'),
    price: 6999,
    discount: 721,
    rating: 4.1,
    title: 'Беспроводные наушники Xiaomi Mi..',
    isLike: true,
  },
  {
    id: '5',
    pathImage: require('../assets/images/prod-5.png'),
    price: 21990,
    discount: 12799,
    rating: 4.4,
    title: 'Электрогриль Tefal OptiGrill+ GC712834',
    isLike: false,
  },
];
