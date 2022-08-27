import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useEffect, useState} from 'react';

export function SimpleAnimationsScreen() {
  const [translation, setTranslation] = useState(0);

  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      setTimeout(() => {
        setTranslation(i);
      }, 25 * i);
    }
  }, []);

  return (
    <View style={styles.screen}>
      <View
        accessibilityLabel={'ball'}
        style={[styles.ball, {transform: [{translateX: translation}]}]}></View>
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
