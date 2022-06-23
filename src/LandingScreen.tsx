import * as React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';

export function LandingScreen(props: {navigation: any}) {
  function handleHelpButton() {
    return props.navigation.navigate('Help');
  }

  return (
    <View>
      <Button title="React Help" onPress={handleHelpButton} />
    </View>
  );
}
