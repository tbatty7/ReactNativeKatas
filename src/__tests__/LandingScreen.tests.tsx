import * as React from 'react';

import {LandingScreen} from '../LandingScreen';
import {fireEvent, render, RenderAPI} from '@testing-library/react-native';

describe('LandingScreen', () => {
  const navigate = jest.fn();
  let landingScreen;
  beforeEach(() => {
    landingScreen = render(<LandingScreen navigation={{navigate}} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render', () => {
    landingScreen.getByText('React Help');
  });
  it('should navigate to help screen when button pushed', () => {
    pressButtonWithText(landingScreen, 'React Help');
    expect(navigate).toHaveBeenCalledWith('Help');
  });
  it('should navigate to redux slice kata when button pushed', () => {
    pressButtonWithText(landingScreen, 'Redux Slice Kata');
    expect(navigate).toHaveBeenCalledWith('SliceKata');
  });
});

export function pressButtonWithText(screen: RenderAPI, stringToFind: string) {
  let button = screen.getByText(stringToFind);
  fireEvent.press(button);
}
