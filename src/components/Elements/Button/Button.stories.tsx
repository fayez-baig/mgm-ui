import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button, { ButtonProps } from '../Button/Button';

export default {
	component: Button,
	title: 'Elements/Button'
};

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {};
