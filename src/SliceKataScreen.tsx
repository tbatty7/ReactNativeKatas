import * as React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/themed';

export function SliceKataScreen() {
  function handlePress() {
    return () => {};
  }

  return (
    <View>
      <Text>Redux Slice Kata</Text>
      <Button title="Submit" onPress={handlePress()} />
    </View>
  );
}
