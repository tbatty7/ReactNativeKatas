import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export function AnimationScreen() {
  return (
    <View style={styles.container}>
      <Text>AnimationScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCBCAA',
    alignItems: 'center',
    margin: 50,
  },
});
