import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { BoxProps, defaultProps } from './types';

const Box: React.SFC<BoxProps> = ({ children }) => {
	return <div className={getStyles(['box'])}>{children}</div>;
};

Box.defaultProps = defaultProps;
export default Box;
