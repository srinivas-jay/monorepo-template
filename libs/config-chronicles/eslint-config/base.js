module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true // for Jest
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		project: './**/tsconfig.json'
	},
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
		'no-debugger': 'warn',
		'no-alert': 'warn',
		'no-await-in-loop': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-destructuring': [
			'error',
			{
				object: true,
				array: false
			}
		],
		'no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_'
			}
		]
	},
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			rules: {
				'@typescript-eslint/no-var-requires': 'error' // Disallow require() for TypeScript files
			}
		}
	]
};
