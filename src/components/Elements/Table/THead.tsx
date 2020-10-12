import React from 'react';
import { THeadProps } from './types';

const THead: React.FC<THeadProps> = ({ children }) => {
	return (
		<thead>
			<tr>{children}</tr>
		</thead>
	);
};

export default THead;
