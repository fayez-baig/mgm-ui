import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Box from './Box';
import { BoxProps } from './types';
import { getStyles } from '../../styles/getStyles';

export default {
	argTypes: {
		children: {
			control: {
				type: 'text'
			}
		}
	},
	component: Box,
	title: 'Elements/Box'
};

const defaultBoxTemplate: Story<BoxProps> = args => (
	<Box {...args}>
		<article className={getStyles(['media'])}>
			<div className={getStyles(['media-left'])}>
				<figure className={getStyles(['image is-64x64'])}>
					<img
						src='https://bulma.io/images/placeholders/128x128.png'
						alt='Image'
					/>
				</figure>
			</div>
			<div className={getStyles(['media-content'])}>
				<div className={getStyles(['content'])}>
					<p>
						<strong>John Smith</strong> <small>@johnsmith</small>{' '}
						<small>31m</small>
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						efficitur sit amet massa fringilla egestas. Nullam condimentum
						luctus turpis.
					</p>
				</div>
			</div>
		</article>
	</Box>
);

export const Default = defaultBoxTemplate.bind({});

Default.args = {
	children: 'Check Me'
};
