jest.useFakeTimers();
jest.mock('react-i18next', () => ({
  withTranslation: () => Component => {
    Component.defaultProps = {...Component.defaultProps, t: () => ''};
    return Component;
  },
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  getI18n: () => {
    return {
      t: str => str,
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
    findBestAvailableLanguage: () => {
      return {languageTag: 'en'};
    },
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-config', () => {
  return {};
});
const mock = jest.requireMock('react-native-reanimated');
jest.mock('react-native-reanimated', () => {
  return {
    ...mock,
    useSharedValue: jest.fn,
    useAnimatedStyle: jest.fn,
    useAnimatedRef: jest.fn,
    useAnimatedReaction: jest.fn,
    useAnimatedScrollHandler: jest.fn,
  };
});
