import React from 'react';
import { TFootProps } from './types';

const TFoot: React.FC<TFootProps> = ({ children }) => {
	return (
		<tfoot>
			<tr>{children}</tr>
		</tfoot>
	);
};

export default TFoot;
