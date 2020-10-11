import * as React from 'react';
import { WrapperProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return (
		<div className={getStyles(['field', 'is-grouped', 'is-grouped-multiline'])}>
			{children}
		</div>
	);
};

export default Wrapper;
