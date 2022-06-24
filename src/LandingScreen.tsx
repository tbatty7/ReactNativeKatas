import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/themed';

export function LandingScreen(props: {navigation: any}) {
  function handleHelpButton() {
    return props.navigation.navigate('Help');
  }

  function handleSliceKataButton() {
    return props.navigation.navigate('SliceKata');
  }

  return (
    <View>
      <Button title="React Help" onPress={handleHelpButton} />
      <Text> </Text>
      <Button title="Redux Slice Kata" onPress={handleSliceKataButton} />
    </View>
  );
}
