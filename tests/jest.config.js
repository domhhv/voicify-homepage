module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/testing-library.setup.js'],
  verbose: true,
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '$/app': ['<rootDir>/src/app'],
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  rootDir: '../',
  preset: 'ts-jest',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/'],
  coverageDirectory: '<rootDir>/tests/coverage',
};
