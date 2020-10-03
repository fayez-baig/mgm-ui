import { StoryWrapper } from '@storybook/addons';
import React from 'react';
import { withPaddings } from 'storybook-addon-paddings';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: { expanded: true },
	paddings: [
		{ name: 'Small', value: '16px' },
		{ name: 'Medium', value: '32px', default: true },
		{ name: 'Large', value: '64px' }
	]
};

const withStories: StoryWrapper = (Story, context) => {
	return (
		<>
			<Story {...context} />
		</>
	);
};

export const decorators = [withStories, withPaddings];
