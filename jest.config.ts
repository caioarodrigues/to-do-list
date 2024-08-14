module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {},
  transformIgnorePatterns: [],
  extensionsToTreatAsEsm: ['.ts'],
  testMatch: ['<rootDir>/api/src/test/**/*.test.ts'],
  moduleFileExtensions: ['js', 'ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
