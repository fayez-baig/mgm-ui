import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Image from './Image';
import { ImageProps } from './types';

const ImageSize = [
	'16x16',
	'24x24',
	'32x32',
	'48x48',
	'64x64',
	'96x96',
	'128x128',
	'square',
	'1by1',
	'5by4',
	'4by3',
	'3by2',
	'16by9',
	'2by1',
	'3by1',
	'4by5',
	'3by4',
	'2by3',
	'3by5',
	'9by16',
	'1by2',
	'1by3',
	'fullwidth'
];
export default {
	argTypes: {
		alt: {
			control: {
				type: 'text'
			}
		},

		imageSize: {
			control: {
				options: ImageSize,
				type: 'select'
			}
		},
		isRounded: {
			control: {
				type: 'boolean'
			}
		}
	},
	component: Image,
	title: 'Elements/Image'
};

const defaultImageTemplate: Story<ImageProps> = args => <Image {...args} />;

export const Default = defaultImageTemplate.bind({});

Default.args = {
	alt: '128x128',
	imageSize: '128x128',
	src: 'https://bulma.io/images/placeholders/128x128.png'
};
