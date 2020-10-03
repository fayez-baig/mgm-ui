export const stories = ['../src/**/*.stories.tsx'];

export const addons = [
	'@storybook/preset-create-react-app',
	'@storybook/addon-controls',
	'@storybook/addon-actions',
	'@storybook/addon-links',
	'storybook-addon-paddings',
	'@storybook/addon-links/register',
	'@storybook/addon-actions/register',
	{
		name: '@storybook/addon-docs',
		options: {
			configureJSX: true
		}
	},
	{
		name: '@storybook/addon-essentials',
		options: {
			backgrounds: false
		}
	},
];

export const typescript = {
	check: false,
	checkOptions: {},
	reactDocgen: 'react-docgen-typescript',
	reactDocgenTypescriptOptions: {
		shouldExtractLiteralValuesFromEnum: true,
		propFilter: (prop: any) =>
			prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
	}
};
