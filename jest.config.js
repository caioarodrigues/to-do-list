module.exports = {
  // ...
  transform: {},
  transformIgnorePatterns: [],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
