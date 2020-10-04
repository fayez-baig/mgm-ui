import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Row from '../Row/Row';
import Col from '../Col/Col';
import { getStyles } from '../../../styles/getStyles';

const colSizeMultipleOf20 = [
	'is-four-fifths',
	'is-three-fifths',
	'is-two-fifths',
	'is-one-fifth'
];

const colSizeGeneral = [
	'is-three-quarters',
	'is-three-quarters',
	'is-two-thirds',
	'is-half',
	'is-one-third',
	'is-one-quarter',
	'is-full'
];

const colSizeBy12 = [
	'is-1',
	'is-2',
	'is-3',
	'is-4',
	'is-5',
	'is-6',
	'is-7',
	'is-8',
	'is-9',
	'is-10',
	'is-11',
	'is-12'
];

const colSizeValues = [
	...colSizeMultipleOf20,
	...colSizeGeneral,
	...colSizeBy12
];

export default {
	argTypes: {
		colSize: {
			control: {
				options: colSizeValues,
				type: 'select'
			}
		}
	},
	title: 'Layout/Grid/Col'
};
const otherColClasses = getStyles(['notification', 'is-warning']);

const renderOtherColumns = (cls: string) => {
	const isNumberedCol = colSizeBy12.includes(cls);
	return (
		<>
			{Array(isNumberedCol ? 12 - +cls.slice(3) : 2)
				.fill(' ')
				.map((col, i) => (
					<Col key={i}>
						<p
							className={otherColClasses}
							style={{
								padding: '16px 0px',
								textAlign: 'center'
							}}>
							<code>
								{isNumberedCol ? 1 + +col + ++i : 'Auto'}
							</code>
						</p>
					</Col>
				))}
		</>
	);
};

const colContentClasses = getStyles(['notification', 'is-success']);

const defaultColTemplate: Story = args => (
	<Row>
		{Array(1)
			.fill(' ')
			.map((_, i) => (
				<Col key={i} {...args}>
					<p
						className={colContentClasses}
						style={{ padding: '16px 0px', textAlign: 'center' }}>
						<code>1</code>
					</p>
				</Col>
			))}
		{args.colSize !== 'is-full' && renderOtherColumns(args.colSize)}
	</Row>
);

export const Default = defaultColTemplate.bind({});

Default.args = {
	colSize: 'is-12'
};
