module.exports = {
    moduleNameMapper: {
      '^~(.*)$': '<rootDir>/src$1'
    },
    resolver: 'jest-directory-named-resolver',
    collectCoverageFrom: [
      "src/**/*.{js,jsx}",
    ]
  };
  