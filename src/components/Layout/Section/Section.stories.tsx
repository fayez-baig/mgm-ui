import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Section from './Section';
import { SectionProps } from './types';
import { getStyles } from './../../styles/getStyles';
import Title from '../../Elements/Title/Title';
import SubTitle from './../../Elements/SubTitle/SubTitle';
const SizeValues = ['default', 'medium', 'large'];
export default {
	argTypes: {
		Size: {
			control: {
				options: SizeValues,
				type: 'inline-radio'
			}
		}
	},
	component: Section,
	title: 'Layout/Section'
};

const defaultSectionTemplate: Story<SectionProps> = args => (
	<Section {...args}>
		<div className={getStyles(['container'])}>
			<Title>Section</Title>
			<SubTitle>
				A simple container to divide your page into <strong>sections</strong>,
				like the one youre currently reading
			</SubTitle>
		</div>
	</Section>
);

export const Default = defaultSectionTemplate.bind({});
