import * as React from 'react';

import {LandingScreen} from '../LandingScreen';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';

describe('LandingScreen', () => {
  const navigate = jest.fn();
  it('should render', () => {
    const landingScreen = render(<LandingScreen navigation={{navigate}} />);
    landingScreen.getByText('React Help');
  });
  it('should navigate to help screen when button pushed', () => {
    const landingScreen = render(<LandingScreen navigation={{navigate}} />);
    pressButtonWithText(landingScreen, 'React Help');
    expect(navigate).toHaveBeenCalledWith('Help');
  });
});

export function pressButtonWithText(screen: RenderAPI, stringToFind: string) {
  let button = screen.getByText(stringToFind);
  fireEvent.press(button);
}
