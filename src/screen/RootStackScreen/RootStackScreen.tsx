import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MenuTabScreen} from './../MenuTabScreen/MenuTabScreen';

const RootStack = createStackNavigator();

export const RootStackScreen: React.FC = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="MenuTabScreen" component={MenuTabScreen} />
    </RootStack.Navigator>
  );
};
