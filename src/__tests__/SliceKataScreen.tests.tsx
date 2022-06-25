import * as React from 'react';
import {SliceKataScreen} from '../SliceKataScreen';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../store';
import {pressButtonWithText} from './LandingScreen.tests';

describe('SliceKataScreen', () => {
  it('renders', () => {
    const sliceScreen = render(
      <Provider store={store}>
        <SliceKataScreen />
      </Provider>,
    );
    sliceScreen.getByPlaceholderText('Ticket Price');
    sliceScreen.getByText('Submit');
  });
  it('updates price on submit', () => {
    const sliceScreen = render(
      <Provider store={store}>
        <SliceKataScreen />
      </Provider>,
    );
    const textField = sliceScreen.getByPlaceholderText('Ticket Price');
    fireEvent.changeText(textField, '$18.00');
    pressButtonWithText(sliceScreen, 'Submit');
    sliceScreen.getByText('$18.00');
  });
});
