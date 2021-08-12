import React from 'react';
import { Text } from 'react-native';

import {
  IconComponentMinus,
  IconComponentPlus,
} from '../Solid/IconComponent/IconComponent';

import {
  Ant_FlexColumnWrap,
  Ant_FlexColumnWrapPress,
  Ant_FlexRowWrap,
} from '../../global-styled/global.styled';

interface Props {
  onCountPlusPress: any;
  onCountMinusPress: any;
  countProduct: number;
}

export const BtnCountProduct: React.FC<Props> = ({
  onCountPlusPress,
  onCountMinusPress,
  countProduct,
}: Props) => {
  return (
    <Ant_FlexRowWrap>
      <Ant_FlexColumnWrapPress
        w="40px"
        h="32px"
        bdr="1px solid #E3E5E5"
        jc="center"
        ai="center"
        onPress={onCountMinusPress}
      >
        <IconComponentMinus w={10} h={10} />
      </Ant_FlexColumnWrapPress>

      <Ant_FlexColumnWrap
        w="40px"
        h="32px"
        bdr="1px solid #E3E5E5"
        jc="center"
        ai="center"
      >
        <Text>{countProduct}</Text>
      </Ant_FlexColumnWrap>

      <Ant_FlexColumnWrapPress
        w="40px"
        h="32px"
        bdr="1px solid #E3E5E5"
        jc="center"
        ai="center"
        onPress={onCountPlusPress}
      >
        <IconComponentPlus w={10} h={10} />
      </Ant_FlexColumnWrapPress>
    </Ant_FlexRowWrap>
  );
};
