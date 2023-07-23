module.exports = {
	extends: [
		'./base.js',
		'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'plugin:react-hooks/recommended', // Enforces the rules of Hooks
		'plugin:prettier/recommended' // Should always be last
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		},
		project: './**/tsconfig.json'
	},
	rules: {
		// Place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
		'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
		'react/react-in-jsx-scope': 'off' // starting from React 17 with the new JSX Transform, you no longer need to import React in scope to use JSX.
	},
	settings: {
		react: {
			version: 'detect' // Automatically detect the react version
		}
	}
};
