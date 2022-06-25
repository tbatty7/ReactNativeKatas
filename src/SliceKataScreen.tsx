import * as React from 'react';
import {View} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import {useState} from 'react';

export function SliceKataScreen() {
  const [price, setPrice] = useState(null);

  function handlePress() {}

  return (
    <View>
      <Text>Redux Slice Kata</Text>
      <Input
        label="price"
        placeholder="Ticket Price"
        value={price}
        onChangeText={setPrice}
      />
      <Button title="Submit" onPress={handlePress} />
      <Text>{'\n'}</Text>
      <Text>{}</Text>
    </View>
  );
}
