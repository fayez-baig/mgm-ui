import React from 'react';
import { TheadProps } from './types';

const Thead: React.SFC<TheadProps> = ({ children }) => {
	return (
		<thead>
			<tr>{children}</tr>
		</thead>
	);
};

export default Thead;
