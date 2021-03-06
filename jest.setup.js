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
