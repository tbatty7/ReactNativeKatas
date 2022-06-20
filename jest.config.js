const {name: displayName} = require('./package.json');

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  displayName,
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['jest-expect-message'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/src/__tests__/data',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@react-native|react-native|react-native-size-matters|react-native-ratings|react-native-star-io10|@rneui/*)/)',
  ],
};
