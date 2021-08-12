import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainScreen } from "./../../components/MainScreen/MainScreen";
import { Text, TouchableOpacity, View } from "react-native";
import { Basket } from "./../../components/Basket/Basket";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const MenuTabScreenStack = createBottomTabNavigator();

export const MenuTabScreen = () => {
  return (
    <MenuTabScreenStack.Navigator>
      <MenuTabScreenStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: "Главная" }}
      />
      <MenuTabScreenStack.Screen
        name="Basket"
        component={Basket}
        options={{ title: "Корзина" }}
      />
    </MenuTabScreenStack.Navigator>
  );
};

// tabBar={(props) => <MyTabBar {...props} />}
