module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|svg)$': 'jest-transform-stub',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
