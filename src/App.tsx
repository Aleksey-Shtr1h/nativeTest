import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from './screen/RootStackScreen/RootStackScreen';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
