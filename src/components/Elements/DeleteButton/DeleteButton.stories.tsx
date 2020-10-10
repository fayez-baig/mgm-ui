import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import DeleteButton from './DeleteButton';
import { DeleteButtonProps } from './types';

const sizeValues = ['default', 'small', 'medium', 'large'];

export default {
	argTypes: {
		btnSize: {
			control: {
				options: sizeValues,
				type: 'inline-radio'
			}
		}
	},
	component: DeleteButton,
	title: 'Elements/DeleteButton'
};

const defaultDeleteButtonTemplate: Story<DeleteButtonProps> = args => (
	<DeleteButton {...args} />
);

export const Default = defaultDeleteButtonTemplate.bind({});

Default.args = {
	btnSize: 'default'
};
