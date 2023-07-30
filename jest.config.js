module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '/__tests__/.*\\.(test|spec)\\.ts$', // Looks for test files with .test.ts or .spec.ts extensions in the "__tests__" folder
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true, // Set this to true to collect code coverage information
};