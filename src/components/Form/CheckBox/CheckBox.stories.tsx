import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CheckBox from '../CheckBox/CheckBox';
import { CheckBoxProps } from './types';

export default {
	argTypes: {
		checked: {
			control: {
				type: 'boolean'
			}
		},

		children: {
			control: {
				type: 'text'
			}
		},
		disabled: {
			control: {
				type: 'boolean'
			}
		}
	},
	component: CheckBox,
	title: 'Form/CheckBox'
};

const defaultCheckBoxTemplate: Story<CheckBoxProps> = args => (
	<CheckBox {...args} />
);

export const Default = defaultCheckBoxTemplate.bind({});

Default.args = {
	children: 'Check Me'
};
