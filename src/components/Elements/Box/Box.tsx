import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { BoxProps } from './types';

const Box: React.FC<BoxProps> = ({ children }) => {
	return <div className={getStyles(['box'])}>{children}</div>;
};

export default Box;
