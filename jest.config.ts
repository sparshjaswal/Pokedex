import '@testing-library/jest-dom/extend-expect';

module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/jest.setup.js'], // Path to setup file
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Directory for coverage reports
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Mock CSS imports
  },
};