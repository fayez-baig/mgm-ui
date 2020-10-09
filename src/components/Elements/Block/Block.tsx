import React from 'react';
import { BlockProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Block: React.SFC<BlockProps> = ({ children }) => {
	return <div className={getStyles(['block'])}>{children}</div>;
};

Block.defaultProps = defaultProps;

export default Block;
