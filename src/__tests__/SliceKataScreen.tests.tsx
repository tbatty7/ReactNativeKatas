import * as React from 'react';
import {SliceKataScreen} from '../SliceKataScreen';
import {render} from '@testing-library/react-native';

describe('SliceKataScreen', () => {
  it('renders', () => {
    const sliceScreen = render(<SliceKataScreen />);
    sliceScreen.getByPlaceholderText('Ticket Price');
    sliceScreen.getByText('Submit');
  });
});
