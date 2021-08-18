import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuTabScreen } from './../MenuTabScreen/MenuTabScreen';

const RootStack = createStackNavigator();

export const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="MenuTabScreen" component={MenuTabScreen} />
    </RootStack.Navigator>
  );
};
