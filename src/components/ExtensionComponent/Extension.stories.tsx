import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Extension from './Extension';

export default {
	title: 'Extension/More'
};

const extensionTemplate: Story = () => <Extension />;

export const Default = extensionTemplate.bind({});
