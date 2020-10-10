import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Radio from './Radio';
import { RadioProps } from './types';

export default {
	argTypes: {
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
	component: Radio,
	title: 'Form/Radio'
};

const defaultRadioTemplate: Story<RadioProps> = args => (
	<>
		<Radio {...args} id='female' htmlFor='female' name='gender' value='female'>
			FEMALE
		</Radio>
		<Radio {...args} id='male' htmlFor='male' name='gender' value='male'>
			MALE
		</Radio>
	</>
);

export const Default = defaultRadioTemplate.bind({});

Default.args = {
	disabled: false
};
