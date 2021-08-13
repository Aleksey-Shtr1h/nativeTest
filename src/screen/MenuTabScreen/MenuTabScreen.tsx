import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainScreen } from './../../components/MainScreen/MainScreen';
import { Basket } from './../../components/Basket/Basket';
import {
  IconComponentBasket,
  IconComponentHome,
} from '../../components/Solid/IconComponent/IconComponent';

const MenuTabScreenStack = createBottomTabNavigator();

export const MenuTabScreen: React.FC = () => {
  return (
    <MenuTabScreenStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'MainScreen') {
            return <IconComponentHome w={size} h={size} fill={color} />;
          } else if (route.name === 'Basket') {
            return <IconComponentBasket w={size} h={size} fill={color} />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <MenuTabScreenStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: 'Главная' }}
      />
      <MenuTabScreenStack.Screen
        name="Basket"
        component={Basket}
        options={{ title: 'Корзина' }}
      />
    </MenuTabScreenStack.Navigator>
  );
};
