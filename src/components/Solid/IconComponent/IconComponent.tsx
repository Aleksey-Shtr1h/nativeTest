import React from 'react';
import Star from '../../../assets/images/star.svg';
import Like from '../../../assets/images/like.svg';
import Box from '../../../assets/images/box.svg';
import Delete from '../../../assets/images/delete.svg';
import Plus from '../../../assets/images/plus.svg';
import Minus from '../../../assets/images/minus.svg';
import Svg, { Path } from 'react-native-svg';

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
  return (
    <Svg width={w} height={h} viewBox="0 0 22 20" fill="none">
      <Path
        d="M1 1H4.63636L7.07273 12.4771C7.15586 12.8718 7.38355 13.2263 7.71595 13.4785C8.04835 13.7308 8.46427 13.8649 8.89091 13.8571H17.7273C18.1539 13.8649 18.5698 13.7308 18.9022 13.4785C19.2346 13.2263 19.4623 12.8718 19.5455 12.4771L21 5.28571H5.54545M9.18182 18.1429C9.18182 18.6162 8.7748 19 8.27273 19C7.77065 19 7.36364 18.6162 7.36364 18.1429C7.36364 17.6695 7.77065 17.2857 8.27273 17.2857C8.7748 17.2857 9.18182 17.6695 9.18182 18.1429ZM19.1818 18.1429C19.1818 18.6162 18.7748 19 18.2727 19C17.7707 19 17.3636 18.6162 17.3636 18.1429C17.3636 17.6695 17.7707 17.2857 18.2727 17.2857C18.7748 17.2857 19.1818 17.6695 19.1818 18.1429Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
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

export const IconComponentHome: React.FC<PropsImage> = ({
  w,
  h,
  fill = 'white',
}: PropsImage) => {
  return (
    <Svg width={w} height={h} viewBox="0 0 20 22" fill="none">
      <Path
        d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
