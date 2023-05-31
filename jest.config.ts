module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.css$': 'jest-transform-css',
	},
	testMatch: ['**/*.spec.(ts|tsx)'],
};
