import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '../Button/Button';
import { ButtonProps } from '../Button/types';

const bgColorValues = [
	'default',
	'primary',
	'info',
	'link',
	'success',
	'warning',
	'danger'
];

const sizeValues = ['default', 'normal', 'small', 'medium', 'large'];

const typeValues = ['submit', 'button', 'reset'];

export default {
	argTypes: {
		bgColor: {
			control: {
				options: bgColorValues,
				type: 'iniline-radio'
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
		isInverted: {
			control: {
				type: 'boolean'
			}
		},
		isLightBg: {
			control: {
				type: 'boolean'
			}
		},
		isLoading: {
			control: {
				type: 'boolean'
			}
		},
		isOutlined: {
			control: {
				type: 'boolean'
			}
		},
		isRounded: {
			control: {
				type: 'boolean'
			}
		},
		size: {
			control: {
				options: sizeValues,
				type: 'iniline-radio'
			}
		},
		type: {
			control: {
				options: typeValues,
				type: 'inline-radio'
			}
		}
	},
	component: Button,
	title: 'Elements/Button'
};

const defaultButtonTemplate: Story<ButtonProps> = args => <Button {...args} />;

export const Default = defaultButtonTemplate.bind({});

Default.args = {
	bgColor: 'primary',
	children: 'Click Me',
	isLightBg: false,
	size: 'default'
};

const smallButtonTemplate: Story<ButtonProps> = args => <Button {...args} />;

const normalButtonTemplate: Story<ButtonProps> = args => <Button {...args} />;

export const Normal = normalButtonTemplate.bind({});

Normal.args = {
	bgColor: 'primary',
	children: 'Click Me',
	isLightBg: false,
	size: 'normal'
};

export const Small = smallButtonTemplate.bind({});

Small.args = {
	bgColor: 'primary',
	children: 'Click Me',
	isLightBg: false,
	size: 'small'
};

const mediumButtonTemplate: Story<ButtonProps> = args => <Button {...args} />;

export const Medium = mediumButtonTemplate.bind({});

Medium.args = {
	bgColor: 'primary',
	children: 'Click Me',
	isLightBg: false,
	size: 'medium'
};

const largeButtonTemplate: Story<ButtonProps> = args => <Button {...args} />;

export const Large = largeButtonTemplate.bind({});

Large.args = {
	bgColor: 'primary',
	children: 'Click Me',
	isLightBg: false,
	size: 'large'
};
