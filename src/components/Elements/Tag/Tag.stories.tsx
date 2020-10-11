import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Tag from './Tag';
import { TagProps, AddonTagProps } from './types';
import AddonTag from './AddonTag';
import TagWrapper from './TagWrapper';

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

const defaultAddonTagTemplate: Story<AddonTagProps> = () => (
	<AddonTag>
		<Tag bgColor='primary'>Tag Label</Tag>
		<Tag bgColor='success'>Tag Label</Tag>
		<Tag bgColor='info'>Tag Label</Tag>
	</AddonTag>
);

export const AddonTags = defaultAddonTagTemplate.bind({});

const addonTagTemplate: Story<AddonTagProps> = () => (
	<AddonTag hasAddons>
		<Tag bgColor='dark'>build</Tag>
		<Tag bgColor='success'>passing</Tag>
	</AddonTag>
);

export const AddonTagTemplate = addonTagTemplate.bind({});

const addonWithDeleteTemplate: Story<AddonTagProps> = () => (
	<AddonTag hasAddons>
		<Tag bgColor='success'>Technologhy</Tag>
		<Tag hasDeleteIcon></Tag>
	</AddonTag>
);

export const AddonWithDeleteTemplate = addonWithDeleteTemplate.bind({});

const wrappedTagTemplate: Story = () => (
	<TagWrapper>
		<AddonTag hasAddons>
			<Tag bgColor='success'>Technologhy</Tag>
			<Tag hasDeleteIcon></Tag>
		</AddonTag>

		<AddonTag hasAddons>
			<Tag bgColor='primary'>CSS</Tag>
			<Tag hasDeleteIcon></Tag>
		</AddonTag>
		<AddonTag hasAddons>
			<Tag bgColor='dark'>Documentation</Tag>
			<Tag hasDeleteIcon></Tag>
		</AddonTag>
	</TagWrapper>
);

export const WrappedTagTemplate = wrappedTagTemplate.bind({});
