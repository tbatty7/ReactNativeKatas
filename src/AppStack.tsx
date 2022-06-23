import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HelpScreen} from './HelpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {LandingScreen} from './LandingScreen';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName="Landing">
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
