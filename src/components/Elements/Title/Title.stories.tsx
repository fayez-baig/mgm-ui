import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Title from './Title';
import { TitleProps } from './types';
import SubTitle from '../SubTitle/SubTitle';
const sizeValues = [1, 2, 3, 4, 5, 6];

export default {
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		},

		fontSize: {
			control: {
				options: sizeValues,
				type: 'inline-radio'
			}
		},
		isSpaced: {
			control: {
				type: 'boolean'
			}
		}
	},
	component: Title,
	title: 'Elements/Title'
};

const defaultTitleTemplate: Story<TitleProps> = args => <Title {...args} />;

export const Default = defaultTitleTemplate.bind({});

Default.args = {
	children: 'Title',
	fontSize: 3
};

const defaultTitleSpacedTemplate: Story<TitleProps> = args => (
	<>
		<Title {...args}>Title</Title>
		<SubTitle>SubTitle</SubTitle>
	</>
);

export const TitleSpaced = defaultTitleSpacedTemplate.bind({});
TitleSpaced.args = {
	fontSize: 3,
	isSpaced: true
};
