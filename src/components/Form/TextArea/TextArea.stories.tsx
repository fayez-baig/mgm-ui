import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import TextArea from '../TextArea/TextArea';
import { TextAreaProps } from '../TextArea/types';

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
		disabled: {
			control: {
				type: 'boolean'
			}
		},
		hasFixedSize: {
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
		loaderSize: {
			control: {
				options: sizeValues,
				type: 'inline-radio'
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
		rows: {
			control: {
				type: 'number'
			}
		},
		size: {
			control: {
				options: sizeValues,
				type: 'inline-radio'
			}
		},
		value: {
			control: {
				type: 'text'
			}
		}
	},
	component: TextArea,
	title: 'Form/TextArea'
};

const defaultTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Default = defaultTextAreaTemplate.bind({});

Default.args = {
	color: 'default',
	size: 'default'
};

const normalTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Normal = normalTextAreaTemplate.bind({});

Normal.args = {
	color: 'default',
	size: 'normal'
};

const smallTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Small = smallTextAreaTemplate.bind({});

Small.args = {
	color: 'default',
	size: 'small'
};

const mediumTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Medium = mediumTextAreaTemplate.bind({});

Medium.args = {
	color: 'default',
	size: 'medium'
};

const largeTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Large = largeTextAreaTemplate.bind({});

Large.args = {
	color: 'default',
	size: 'large'
};
