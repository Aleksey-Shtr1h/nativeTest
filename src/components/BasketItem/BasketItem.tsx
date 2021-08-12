import React from 'react';

import { optionsCard } from '../../constant';
import { CardProductItem } from '../CardProductItem/CardProductItem';

import {
  Ant_FlexColumnWrap,
  Ant_FlexRowWrap,
} from '../../global-styled/global.styled';

interface Props {
  item: {
    id: string;
    pathImage: any;
    price: number;
    discount?: number | null;
    rating: number;
    title: string;
    isLike: boolean;
  };
}

export const BasketItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <Ant_FlexColumnWrap m="18px 18px">
      <Ant_FlexRowWrap w="100%">
        <CardProductItem
          item={item}
          type="basket"
          options={optionsCard.basket}
        />
      </Ant_FlexRowWrap>
    </Ant_FlexColumnWrap>
  );
};
