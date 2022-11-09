import React from "react"
import * as Linking from 'expo-linking';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import { GAME_NAME } from "./config/Const"; // some configuration of the game
import ScreenApp from "./screen_app"; // the screen application
import GamepadApp from "./gamepad_app"; // the gamepad application

const Stack = createStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Screen" component={ScreenApp} />
      <Stack.Screen name="Gamepad" component={GamepadApp} />
      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  )
}

// Configure paths to screens and gamepads
const config = {
  screens: {
    Screen: '',
    Gamepad: 'gamepad'
  },
};

// Configure linking
const linking = {
  prefixes: [
    Linking.createURL('/'),
    'unboared://'
  ],
  config,
};

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> { }

export default function App(props: NavigationProps) {
  return (
    <NavigationContainer
      linking={linking}
      documentTitle={{
        formatter: (options, route) =>
          `${GAME_NAME} • ${options?.title ?? route?.name}`,
      }}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}