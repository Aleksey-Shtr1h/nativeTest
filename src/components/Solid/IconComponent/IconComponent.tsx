import React from 'react';
import Star from '../../../assets/images/star.svg';
import Like from '../../../assets/images/like.svg';
import Box from '../../../assets/images/box.svg';
import Basket from '../../../assets/images/basket.svg';
import Delete from '../../../assets/images/delete.svg';
import Plus from '../../../assets/images/plus.svg';
import Minus from '../../../assets/images/minus.svg';

interface PropsImage {
  w: number;
  h: number;
  fill?: string;
}

export const IconComponentStar: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return <Star width={w} height={h} fill={fill} />;
};

export const IconComponentLike: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return <Like width={w} height={h} fill={fill} />;
};

export const IconComponentBox: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return <Box width={w} height={h} fill={fill} />;
};

export const IconComponentBasket: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return <Basket width={w} height={h} fill={fill} />;
};

export const IconComponentDelete: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return <Delete width={w} height={h} fill={fill} />;
};

export const IconComponentPlus: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return <Plus width={w} height={h} fill={fill} />;
};

export const IconComponentMinus: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return <Minus width={w} height={h} fill={fill} />;
};
