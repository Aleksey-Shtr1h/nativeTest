import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ActionCreatorApp } from '../../redux/app/appAction';
import { putBasketProductSelector } from '../../redux/app/appSelector';
import { GlobalState } from '../../redux/typeState';

import { BasketItem } from '../BasketItem/BasketItem';
import { EmptyBasket } from '../EmptyBasket/EmptyBasket';

import {
  IconComponentBox,
  IconComponentDelete,
} from '../Solid/IconComponent/IconComponent';

import {
  Ant_FlexColumnWrap,
  Ant_FlexRowWrap,
} from '../../global-styled/global.styled';

import {
  Ant_CompanyText,
  Ant_DeliveryMethodText,
  Ant_DeliveryMethodTitleText,
  Ant_DeliveryTimeText,
} from './Basket.styled';

export const Basket = () => {
  const dispatch = useDispatch();
  const basketProducts = useSelector((state: GlobalState) =>
    putBasketProductSelector(state)
  );

  const deleteProducts = () => {
    dispatch(ActionCreatorApp.deleteProducts());
  };

  return (
    <>
      {basketProducts.length !== 0 ? (
        <Ant_FlexColumnWrap m="18px 18px">
          <Ant_FlexRowWrap
            jc="space-between"
            ai="center"
            p="0 0 16px 0"
            m="0 0 16px 0"
            style={{ botomBorderWidth: 1, borderBottomColor: '#E3E5E5' }}
          >
            <Ant_FlexRowWrap>
              <IconComponentBox w={20} h={20} />
              <Ant_FlexColumnWrap m="0 10px">
                <Ant_CompanyText>WyseDevice</Ant_CompanyText>
                <Ant_DeliveryTimeText>
                  Доставим с {'27.05 - 30.06'}
                </Ant_DeliveryTimeText>
              </Ant_FlexColumnWrap>
            </Ant_FlexRowWrap>

            <Ant_FlexColumnWrap>
              <TouchableOpacity onPress={deleteProducts}>
                <IconComponentDelete w={20} h={20} />
              </TouchableOpacity>
            </Ant_FlexColumnWrap>
          </Ant_FlexRowWrap>
          <Ant_FlexColumnWrap
            p="0 0 16px 0"
            style={{ botomBorderWidth: 1, borderBottomColor: '#E3E5E5' }}
          >
            <Ant_DeliveryMethodTitleText>
              Способ получения заказа
            </Ant_DeliveryMethodTitleText>
            <Ant_DeliveryMethodText>Курьером с 27.05</Ant_DeliveryMethodText>
          </Ant_FlexColumnWrap>
          <FlatList
            data={basketProducts}
            renderItem={({ item }) => (
              <Ant_FlexColumnWrap
                w="92%"
                m="5px 16px"
                style={{ botomBorderWidth: 1, borderBottomColor: '#E3E5E5' }}
              >
                <BasketItem item={item} />
              </Ant_FlexColumnWrap>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Ant_FlexColumnWrap>
      ) : (
        <EmptyBasket />
      )}
    </>
  );
};
