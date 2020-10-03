module.exports = function (api) {
	api.cache(true);

	const presets = [
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript'
	];
	const plugins = ['macros'];

	const ignore = [
		'**/*.stories.ts',
		'**/*.stories.tsx',
		'**/*.test.ts',
		'**/*.test.tsx'
	];

	return {
		presets,
		plugins,
		ignore
	};
};
