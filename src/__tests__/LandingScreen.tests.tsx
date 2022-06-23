import * as React from 'react';

import {LandingScreen} from '../LandingScreen';
import {render} from '@testing-library/react-native';

describe('LandingScreen', () => {
  const navigate = jest.fn();
  it('should render', () => {
    const landingScreen = render(<LandingScreen navigation={{navigate}} />);
    landingScreen.getByText('React Help');
  });
});
