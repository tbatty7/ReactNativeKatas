import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HelpScreen} from './HelpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {LandingScreen} from './LandingScreen';
import {SliceKataScreen} from './SliceKataScreen';
import {AnimationScreen} from './AnimationScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: true}}
          initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
          <Stack.Screen name="SliceKata" component={SliceKataScreen} />
          <Stack.Screen name="Animations" component={AnimationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
