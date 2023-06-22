/**
 * @jest-environment jsdom
 */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/src/$1",
    "@lib/(.*)": "<rootDir>/src/lib/$1",
    "@image/(.*)": "<rootDir>/src/image/$1",
  },
  verbose: true,
};
