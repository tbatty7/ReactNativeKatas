import * as React from 'react';
import {render} from '@testing-library/react-native';
import {SimpleAnimationsScreen} from '../SimpleAnimationsScreen';

describe('SimpleAnimationsScreen', () => {
  it('renders', () => {
    const screen = render(<SimpleAnimationsScreen />);
    screen.getByLabelText('ball');
  });
});
