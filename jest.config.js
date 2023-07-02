/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["<rootDir>/./"],
  moduleFileExtensions: ["js", "ts", "node"],
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  // transform: {"^.+\\.[jt]sx?$": "ts-jest"}
  extensionsToTreatAsEsm: ['.ts'],
};