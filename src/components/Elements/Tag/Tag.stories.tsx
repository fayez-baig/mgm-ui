import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Tag from './Tag';
import { TagProps, MultipleTagsProps } from './types';
import MultipleTags from './MultipleTags';
import Wrapper from './Wrapper';

const backgroundColor = [
	'default',
	'dark',
	'black',
	'light',
	'white',
	'primary',
	'link',
	'info',
	'success',
	'warning',
	'danger'
];

const tagSize = ['normal', 'medium', 'large'];

export default {
	argTypes: {
		bgColor: {
			control: {
				options: backgroundColor,
				type: 'select'
			}
		},
		children: {
			control: {
				type: 'text'
			}
		},
		hasDeleteBtn: {
			control: {
				type: 'boolean'
			}
		},
		hasDeleteIcon: {
			control: {
				type: 'boolean'
			}
		},
		isLight: {
			control: {
				type: 'boolean'
			}
		},
		isRounded: {
			control: {
				type: 'boolean'
			}
		}
	},

	component: Tag,
	tagSize: {
		control: {
			options: tagSize,
			type: 'inline-radio'
		}
	},
	title: 'Elements/Tag'
};

const defaultTagTemplate: Story<TagProps> = args => <Tag {...args} />;

export const Default = defaultTagTemplate.bind({});

Default.args = {
	children: 'Tag',
	hasDeleteBtn: false,
	isRounded: false
};

const defaultMultipleTagTemplate: Story<MultipleTagsProps> = () => (
	<MultipleTags>
		<Tag bgColor='primary'>Tag Label</Tag>
		<Tag bgColor='success'>Tag Label</Tag>
		<Tag bgColor='info'>Tag Label</Tag>
	</MultipleTags>
);

export const MultipleTag = defaultMultipleTagTemplate.bind({});

const defaultAttachedTagTemplate: Story<MultipleTagsProps> = () => (
	<MultipleTags hasAddons>
		<Tag bgColor='dark'>build</Tag>
		<Tag bgColor='success'>passing</Tag>
	</MultipleTags>
);

export const AttachedTag = defaultAttachedTagTemplate.bind({});

const defaultAttachedDeleteTagTemplate: Story<MultipleTagsProps> = () => (
	<MultipleTags hasAddons>
		<Tag bgColor='success'>Technologhy</Tag>
		<Tag hasDeleteIcon></Tag>
	</MultipleTags>
);

export const AttachedDeleteTag = defaultAttachedDeleteTagTemplate.bind({});

const groupedMultipleTagTemplate: Story<MultipleTagsProps> = () => (
	<Wrapper>
		<MultipleTags hasAddons>
			<Tag bgColor='success'>Technologhy</Tag>
			<Tag hasDeleteIcon></Tag>
		</MultipleTags>

		<MultipleTags hasAddons>
			<Tag bgColor='primary'>CSS</Tag>
			<Tag hasDeleteIcon></Tag>
		</MultipleTags>
		<MultipleTags hasAddons>
			<Tag bgColor='dark'>Documentation</Tag>
			<Tag hasDeleteIcon></Tag>
		</MultipleTags>
	</Wrapper>
);

export const GroupedMultipleTag = groupedMultipleTagTemplate.bind({});
