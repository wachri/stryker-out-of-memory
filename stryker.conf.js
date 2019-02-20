module.exports = function(config) {
    config.set({
        mutator: 'typescript',
        packageManager: 'yarn',
        reporters: ['clear-text', 'progress'],
        testRunner: 'jest',
        transpilers: [],
        logLevel: 'trace',
        coverageAnalysis: 'off',
        mutate: [
            'src/app/**/*.ts',
            '!src/**/*.spec.ts',
            '!src/**/*.mock.ts',
            '!**/*.d.ts',
            '!**/*.snap',
            '!**/*.module.ts'
        ],
    });
};
