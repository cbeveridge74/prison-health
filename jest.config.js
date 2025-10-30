module.exports = {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testEnvironment: 'node',
    "moduleNameMapper": {
        "^axios$": "axios/dist/node/axios.cjs"
      }
  };

 
  