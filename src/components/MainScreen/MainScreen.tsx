import React from 'react';
import { FlatList } from 'react-native';

import { CardProductItem } from './../CardProductItem/CardProductItem';

import { mockCards } from './../../mock/mock';
import { optionsCard } from '../../constant';

import { Ant_FlexColumnWrap } from '../../global-styled/global.styled';
import { Ant_TitleMain } from './MainScreen.styled';

export const MainScreen: React.FC = () => {
  return (
    <Ant_FlexColumnWrap h="100%" m="24px 16px">
      <Ant_TitleMain>Лучшее для вас</Ant_TitleMain>
      <FlatList
        data={mockCards}
        renderItem={({ item }) => (
          <Ant_FlexColumnWrap w="150px" m="0 16px">
            <CardProductItem
              item={item}
              type="card"
              options={optionsCard.card}
            />
          </Ant_FlexColumnWrap>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </Ant_FlexColumnWrap>
  );
};
