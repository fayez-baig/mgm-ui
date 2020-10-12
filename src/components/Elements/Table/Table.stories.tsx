import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Table from './Table';
import { TableProps } from './types';
import THead from './THead';
import TableHeading from './TableHeading';
import TBody from './TBody';
import TableCell from './TableCell';
import TableRow from './TableRow';

export default {
	argTypes: {
		fullWidth: {
			control: {
				type: 'boolean'
			}
		},
		isBordered: {
			control: {
				type: 'boolean'
			}
		},
		isHoverable: {
			control: {
				type: 'boolean'
			}
		},
		isNarrow: {
			control: {
				type: 'boolean'
			}
		},
		isStriped: {
			control: {
				type: 'boolean'
			}
		}
	},
	component: Table,
	title: 'Elements/Table'
};

const defaultTableTemplate: Story<TableProps> = args => (
	<Table {...args}>
		<THead>
			<TableHeading>Row</TableHeading>
			<TableHeading>Col</TableHeading>
			<TableHeading>Width</TableHeading>
			<TableHeading>Height</TableHeading>
		</THead>
		<TBody>
			<TableRow>
				<TableCell>1</TableCell>
				<TableCell>2</TableCell>
				<TableCell>3</TableCell>
				<TableCell>4</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>1</TableCell>
				<TableCell>2</TableCell>
				<TableCell>3</TableCell>
				<TableCell>4</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>1</TableCell>
				<TableCell>2</TableCell>
				<TableCell>3</TableCell>
				<TableCell>4</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>1</TableCell>
				<TableCell>2</TableCell>
				<TableCell>3</TableCell>
				<TableCell>4</TableCell>
			</TableRow>
		</TBody>
	</Table>
);

export const Default = defaultTableTemplate.bind({});
