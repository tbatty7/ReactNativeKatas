import * as React from 'react';
import {View} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import {useState} from 'react';

export function SliceKataScreen() {
  const [username, setPrice] = useState(null);

  function handlePress() {
    return () => {};
  }

  return (
    <View>
      <Text>Redux Slice Kata</Text>
      <Input
        label="price"
        placeholder="Ticket Price"
        value={username}
        onChangeText={setPrice}
      />
      <Button title="Submit" onPress={handlePress()} />
    </View>
  );
}
