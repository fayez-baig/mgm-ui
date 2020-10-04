import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Input from '../Input/Input';
import { InputProps } from '../Input/types';

const colorValues = [
	'default',
	'primary',
	'info',
	'link',
	'success',
	'warning',
	'danger'
];

const sizeValues = ['default', 'normal', 'small', 'medium', 'large'];

const typeValues = ['text', 'email', 'password'];

export default {
	argTypes: {
		color: {
			control: {
				options: colorValues,
				type: 'inline-radio'
			}
		},
		disabled: {
			control: {
				type: 'boolean'
			}
		},
		isFocused: {
			control: {
				type: 'boolean'
			}
		},
		isRounded: {
			control: {
				type: 'boolean'
			}
		},
		isStatic: {
			control: {
				type: 'boolean'
			}
		},
		readOnly: {
			control: {
				type: 'boolean'
			}
		},
		size: {
			control: {
				options: sizeValues,
				type: 'inline-radio'
			}
		},
		type: {
			control: {
				options: typeValues,
				type: 'inline-radio'
			}
		}
	},
	component: Input,
	title: 'Form/Input'
};

const defaultInputTemplate: Story<InputProps> = args => <Input {...args} />;

export const Default = defaultInputTemplate.bind({});

Default.args = {
	color: 'default',
	placeHolder: 'Type something...',
	size: 'default'
};
