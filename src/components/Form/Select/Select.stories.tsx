import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Select from '../Select/Select';
import { SelectProps } from '../Select/types';

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

export default {
	argTypes: {
		color: {
			control: {
				options: colorValues,
				type: 'inline-radio'
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
		multiple: {
			control: {
				type: 'boolean'
			}
		},
		name: {
			control: {
				type: 'text'
			}
		},
		optionSize: {
			control: {
				type: 'number'
			}
		},
		size: {
			control: {
				options: sizeValues,
				type: 'inline-radio'
			}
		}
	},
	component: Select,
	title: 'Form/Select'
};

const defaultSelectTemplate: Story<SelectProps> = args => <Select {...args} />;

export const Default = defaultSelectTemplate.bind({});

Default.args = {
	color: 'default',
	size: 'default'
};

const multipleSelectTemplate: Story<SelectProps> = args => <Select {...args} />;

export const MultipleSelect = multipleSelectTemplate.bind({});

MultipleSelect.args = {
	color: 'default',
	multiple: true,
	optionSize: 4
};

const normalSelectTemplate: Story<SelectProps> = args => <Select {...args} />;

export const Normal = normalSelectTemplate.bind({});

Normal.args = {
	color: 'default',
	size: 'normal'
};

const smallSelectTemplate: Story<SelectProps> = args => <Select {...args} />;

export const Small = smallSelectTemplate.bind({});

Small.args = {
	color: 'default',
	size: 'small'
};

const mediumSelectTemplate: Story<SelectProps> = args => <Select {...args} />;

export const Medium = mediumSelectTemplate.bind({});

Medium.args = {
	color: 'default',
	size: 'medium'
};

const largeSelectTemplate: Story<SelectProps> = args => <Select {...args} />;

export const Large = largeSelectTemplate.bind({});

Large.args = {
	color: 'default',
	size: 'large'
};
