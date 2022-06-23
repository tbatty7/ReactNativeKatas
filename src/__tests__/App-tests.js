import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

describe('App', () => {
  it('renders landing page first', () => {
    const firstScreen = render(<App />);
    firstScreen.getByText('React Help');
  });
});
