import React from 'react';
import { TfootProps } from './types';

const Tfoot: React.SFC<TfootProps> = ({ children }) => {
	return (
		<tfoot>
			<tr>{children}</tr>
		</tfoot>
	);
};

export default Tfoot;
