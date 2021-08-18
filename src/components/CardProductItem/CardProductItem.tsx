import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {GlobalState} from './../../redux/typeState';
import {
  putBasketProductSelector,
  putFavoriteProductSelector,
} from './../../redux/app/appSelector';
import {OperationApp} from '../../redux/app/appReducer';
import {ActionCreatorApp} from '../../redux/app/appAction';

import {BtnCountProduct} from '../BtnCountProduct/BtnCountProduct';

import {
  IconComponentLike,
  IconComponentStar,
} from './../Solid/IconComponent/IconComponent';

import {
  Ant_FlexColumnWrap,
  Ant_FlexColumnWrapPress,
  Ant_FlexRowWrap,
  Ant_IconImage,
} from '../../global-styled/global.styled';

import {
  Ant_BtnText,
  Ant_BtnWrap,
  Ant_DiscountCard,
  Ant_DiscountTag,
  Ant_PriceCard,
  Ant_PriceDiscription,
  Ant_RatingCard,
} from '../MainScreen/MainScreen.styled';

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
  type: string;

  options: {
    widthPhoto: number;
    heightPhoto: number;
    marginBetweenBlock: string;
  };
}

export const CardProductItem: React.FC<Props> = ({
  item,
  type,
  options,
}: Props) => {
  const [countProduct, setCountProduct] = useState(1);
  const favoriteProducts = useSelector((state: GlobalState) =>
    putFavoriteProductSelector(state),
  );
  const basketProducts = useSelector((state: GlobalState) =>
    putBasketProductSelector(state),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (countProduct < 1) {
      dispatch(OperationApp.deleteProduct(basketProducts, item));
    }
  }, [countProduct]);

  const favoriteProduct = favoriteProducts.find(
    product => product.id === item.id,
  );

  const basketProduct = basketProducts.find(product => product.id === item.id);

  const basketTitle = basketProduct ? 'Убрать' : 'В корзину';

  const likeColor = favoriteProduct ? 'red' : 'white';
  const priceTag: string = `${item.price} ₽`;
  const priceDiscont: string = `${item?.discount} ₽`;

  const discont: string | null = item.discount
    ? `Скидка ${item.price - item?.discount} ₽`
    : null;

  const isDiscount = type === 'basket' && discont;

  const onCountPlusPress = () => {
    setCountProduct(countProduct + 1);
  };
  const onCountMinusPress = () => {
    setCountProduct(countProduct - 1);

    // if (countProduct === 1) {
    //   dispatch(OperationApp.deleteProduct(basketProducts, item));
    // }
  };

  const onPutFavoriteProductPress = () => {
    dispatch(OperationApp.putProduct(favoriteProducts, item, 'favorite'));
  };

  const onPutBasketProductPress = () => {
    dispatch(OperationApp.putProduct(basketProducts, item, 'basket'));
  };

  return (
    <>
      <Ant_FlexColumnWrapPress brs="10px" m={options.marginBetweenBlock}>
        <Ant_IconImage
          source={item.pathImage}
          w={options.widthPhoto}
          h={options.heightPhoto}
        />
      </Ant_FlexColumnWrapPress>

      <Ant_FlexColumnWrap>
        <Ant_FlexRowWrap ai="center" m="0 0 5px 0">
          {discont && <Ant_DiscountCard>{priceDiscont}</Ant_DiscountCard>}
          <Ant_PriceCard>{priceTag}</Ant_PriceCard>
        </Ant_FlexRowWrap>

        {type === 'card' && (
          <Ant_FlexRowWrap ai="center" m="0 0 8px 0">
            <IconComponentStar w={18} h={18} fill={likeColor} />
            <Ant_RatingCard>{item.rating}</Ant_RatingCard>
          </Ant_FlexRowWrap>
        )}

        {isDiscount && <Ant_DiscountTag>{discont}</Ant_DiscountTag>}

        <Ant_PriceDiscription numberOfLines={2}>
          {item.title}
        </Ant_PriceDiscription>
        <Ant_FlexRowWrap ai="center" jc="space-between">
          {type === 'card' && (
            <Ant_BtnWrap onPress={onPutBasketProductPress}>
              <Ant_BtnText>{basketTitle}</Ant_BtnText>
            </Ant_BtnWrap>
          )}
          {type === 'basket' && (
            <BtnCountProduct
              countProduct={countProduct}
              onCountPlusPress={onCountPlusPress}
              onCountMinusPress={onCountMinusPress}
            />
          )}
          <Ant_FlexColumnWrapPress onPress={onPutFavoriteProductPress}>
            <IconComponentLike w={18} h={18} fill={likeColor} />
          </Ant_FlexColumnWrapPress>
        </Ant_FlexRowWrap>
      </Ant_FlexColumnWrap>
    </>
  );
};
