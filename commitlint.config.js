const commitConfig = require('@inscriptors/configs/lib/commitlint.lernaconfig');
const {
	utils: { getPackages }
} = require('@commitlint/config-lerna-scopes');

module.exports = {
	...commitConfig,
	rules: {
		'subject-case': [0],
		'scope-enum': (ctx) =>
			getPackages(ctx).then((packages) => [
				2,
				'always',
				[...packages, 'ci', 'version', 'root']
			])
	}
};
