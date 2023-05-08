const eslintConfig = require('@inscriptors/configs/lib/.eslintrc');

module.exports = {
	...eslintConfig,
	rules: {
		...eslintConfig.rules,
		'@typescript-eslint/no-var-requires': 'off'
	}
};
