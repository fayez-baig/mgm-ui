import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '../Button/Button';
import { ButtonProps } from '../Button/types';
import { bgColor, size, type } from '../../utils/constants';

export default {
	argTypes: {
		bgColor: {
			control: {
				options: bgColor,
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
				options: size,
				type: 'iniline-radio'
			}
		},
		type: {
			control: {
				options: type,
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

const mormalButtonTemplate: Story<ButtonProps> = args => <Button {...args} />;

export const Normal = mormalButtonTemplate.bind({});

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
