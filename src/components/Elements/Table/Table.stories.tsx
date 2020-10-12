import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Table from './Table';
import { TableProps } from './types';
import Thead from './Thead';
import TableHeading from './TableHeading';
import Tbody from './Tbody';
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
		<Thead>
			<TableHeading>Row</TableHeading>
			<TableHeading>Col</TableHeading>
			<TableHeading>Width</TableHeading>
			<TableHeading>Height</TableHeading>
		</Thead>
		<Tbody>
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
		</Tbody>
	</Table>
);

export const Default = defaultTableTemplate.bind({});
