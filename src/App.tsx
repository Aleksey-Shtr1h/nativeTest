import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from './screen/RootStackScreen/RootStackScreen';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStackScreen />
    </NavigationContainer>
  );
};
