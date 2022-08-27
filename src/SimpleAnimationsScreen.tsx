import * as React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {useEffect, useRef} from 'react';

export function SimpleAnimationsScreen() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 1000,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [translation]);

  return (
    <View style={styles.screen}>
      <Animated.View
        accessibilityLabel={'ball'}
        style={[
          styles.ball,
          {
            transform: [
              {
                translateX: translation,
              },
            ],
            opacity: translation.interpolate({
              inputRange: [0, 1000],
              outputRange: [0, 1],
            }),
          },
        ]}
      />
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
