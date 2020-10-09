import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Block from './Block';
import { BlockProps } from './types';

export default {
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		}
	},
	component: Block,
	title: 'Elements/Block'
};

const defaultBlockTemplate: Story<BlockProps> = args => <Block {...args} />;

export const Default = defaultBlockTemplate.bind({});

Default.args = {
	children:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, molestias!'
};
