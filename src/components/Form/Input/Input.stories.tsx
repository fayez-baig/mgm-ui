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
		id: {
			control: {
				type: 'text'
			}
		},
		isFocused: {
			control: {
				type: 'boolean'
			}
		},
		isLoading: {
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
		name: {
			control: {
				type: 'text'
			}
		},
		placeholder: {
			control: {
				type: 'text'
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
		},
		value: {
			control: {
				type: 'text'
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
	size: 'default'
};

const normalInputTemplate: Story<InputProps> = args => <Input {...args} />;

export const Normal = normalInputTemplate.bind({});

Normal.args = {
	color: 'default',
	size: 'normal'
};

const smallInputTemplate: Story<InputProps> = args => <Input {...args} />;

export const Small = smallInputTemplate.bind({});

Small.args = {
	color: 'default',
	size: 'small'
};

const mediumInputTemplate: Story<InputProps> = args => <Input {...args} />;

export const Medium = mediumInputTemplate.bind({});

Medium.args = {
	color: 'default',
	size: 'medium'
};

const largeInputTemplate: Story<InputProps> = args => <Input {...args} />;

export const Large = largeInputTemplate.bind({});

Large.args = {
	color: 'default',
	size: 'large'
};
