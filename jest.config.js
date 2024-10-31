module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/test'],
    transform: {
        '^.+.(t|j)sx?$': 'ts-jest'
    },
    moduleNameMapper: {
        '^buckaroo-js-core$': '<rootDir>/src'
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                outDir: './.ts-jest'
            }
        }
    },
    setupFiles: ['jest-canvas-mock'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testRegex: '/test/.*\\.test\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['./src/**'],
    coverageReporters: ['json', 'lcov', 'text', 'clover']
};
