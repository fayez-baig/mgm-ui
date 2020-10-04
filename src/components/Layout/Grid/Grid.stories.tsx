import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Row from './Row/Row';
import Col from './Col/Col';
import { getStyles } from '../../styles/getStyles';

export default {
	argTypes: {
		createColumns: {
			control: { max: 12, min: 1, step: 1, type: 'range' }
		}
	},
	title: 'Layout/Grid'
};

const colContentClasses = getStyles(['notification', 'is-danger']);

const defaultGridTemplate: Story = args => (
	<Row>
		{Array(args.createColumns)
			.fill(' ')
			.map((col, i) => (
				<Col key={i} {...args}>
					<p
						className={colContentClasses}
						style={{ padding: '16px 0px', textAlign: 'center' }}>
						<code>{col + ++i}</code>
					</p>
				</Col>
			))}
	</Row>
);

export const Default = defaultGridTemplate.bind({});

Default.args = {
	createColumns: 3
};
