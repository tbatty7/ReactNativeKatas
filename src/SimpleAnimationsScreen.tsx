import * as React from 'react';
import {StyleSheet, View} from 'react-native';

export function SimpleAnimationsScreen() {
  return (
    <View style={styles.screen}>
      <View accessibilityLabel={'ball'} style={styles.ball}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'tan',
  },
  ball: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
