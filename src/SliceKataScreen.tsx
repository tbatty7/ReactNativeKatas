import * as React from 'react';
import {View} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from './hooks';
import {createTicket} from './TicketSlice';

export function SliceKataScreen() {
  const [price, setPrice] = useState(null);
  const dispatch = useAppDispatch();
  const newPrice = useAppSelector(state => state.ticket.totalPrice);

  function handlePress() {
    return dispatch(createTicket(price));
  }

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
      <Text>{newPrice}</Text>
    </View>
  );
}
