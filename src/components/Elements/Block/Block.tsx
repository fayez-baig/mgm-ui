import React from 'react';
import { BlockProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Block: React.FC<BlockProps> = ({ children }) => {
	return <div className={getStyles(['block'])}>{children}</div>;
};

Block.defaultProps = defaultProps;

export default Block;
