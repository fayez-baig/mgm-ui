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
		fixedSize: {
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
		placeHolder: {
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
	placeHolder: 'Type something...',
	size: 'default'
};

const normalTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Normal = normalTextAreaTemplate.bind({});

Normal.args = {
	color: 'default',
	placeHolder: 'Type something...',
	size: 'normal'
};

const smallTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Small = smallTextAreaTemplate.bind({});

Small.args = {
	color: 'default',
	placeHolder: 'Type something...',
	size: 'small'
};

const mediumTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Medium = mediumTextAreaTemplate.bind({});

Medium.args = {
	color: 'default',
	placeHolder: 'Type something...',
	size: 'medium'
};

const largeTextAreaTemplate: Story<TextAreaProps> = args => (
	<TextArea {...args} />
);

export const Large = mediumTextAreaTemplate.bind({});

Medium.args = {
	color: 'default',
	placeHolder: 'Type something...',
	size: 'large'
};
