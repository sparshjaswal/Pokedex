import '@testing-library/jest-dom/extend-expect';

module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'json', 'node'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};