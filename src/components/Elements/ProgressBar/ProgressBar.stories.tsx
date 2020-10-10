import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import ProgressBar from './ProgressBar';
import { ProgressBarProps } from './types';

const Color = [
	'default',
	'primary',
	'link',
	'info',
	'success',
	'warning',
	'danger'
];

const SizeValues = ['default', 'small', 'medium', 'large'];

export default {
	argTypes: {
		color: {
			control: {
				options: Color,
				type: 'inline-radio'
			}
		},

		max: {
			control: {
				type: 'text'
			}
		},
		size: {
			control: {
				options: SizeValues,
				type: 'inline-radio'
			}
		},
		value: {
			control: {
				type: 'text'
			}
		}
	},
	component: ProgressBar,
	title: 'Elements/ProgressBar'
};

const defaultProgressBarTemplate: Story<ProgressBarProps> = args => (
	<ProgressBar {...args} />
);

export const Default = defaultProgressBarTemplate.bind({});

Default.args = {
	color: 'default',
	max: 100,
	size: 'default',
	value: 30
};

const indeterminateProgressBarTemplate: Story<ProgressBarProps> = args => (
	<ProgressBar {...args} />
);

export const Indeterminate = indeterminateProgressBarTemplate.bind({});

Indeterminate.args = {
	color: 'default',
	max: 100,
	size: 'default'
};
