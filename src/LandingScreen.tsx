import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@rneui/themed';

export function LandingScreen(props: {navigation: any}) {
  function handleHelpButton() {
    return props.navigation.navigate('Help');
  }

  function handleSliceKataButton() {
    return props.navigation.navigate('SliceKata');
  }

  return (
    <View style={{alignItems: 'center', margin: 50}}>
      <Button
        titleStyle={styles.title}
        buttonStyle={styles.button}
        title="React Help"
        onPress={handleHelpButton}
      />
      <Text> </Text>
      <Button
        titleStyle={styles.title}
        buttonStyle={styles.button}
        title="Redux Slice Kata"
        onPress={handleSliceKataButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {width: 300, height: 70, borderRadius: 10},
  title: {fontSize: 30},
});
