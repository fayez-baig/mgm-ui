import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import NavBar from './NavBar';
import NavBarItem from './NavBar';
import { NavBarProps } from './types';
import NavBarMenu from './NavBarMenu';
import { TagProps } from './../Tag/types';

export default {
	component: NavBar,
	title: 'Elements/NavBar'
};

const defaultNavBarTemplate: Story<NavBarProps> = args => (
	<NavBar {...args}>
		<NavBarMenu>
			<NavBarItem>Home</NavBarItem>
			<NavBarItem>TagProps</NavBarItem>
			<NavBarItem>Ba</NavBarItem>
			<NavBarItem>Ca</NavBarItem>
		</NavBarMenu>
	</NavBar>
);

export const Default = defaultNavBarTemplate.bind({});
