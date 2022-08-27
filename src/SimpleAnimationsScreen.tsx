import * as React from 'react';
import {StyleSheet, View} from 'react-native';

export function SimpleAnimationsScreen() {
  return <View style={styles.screen}></View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'tan',
  },
});
