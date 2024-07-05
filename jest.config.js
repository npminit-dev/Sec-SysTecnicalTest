module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': require.resolve('./__tests__/mockstyles.css')
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};