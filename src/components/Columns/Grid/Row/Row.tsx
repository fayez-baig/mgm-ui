import React, { ReactNode } from 'react';
import { getStyles } from '../../../styles/getStyles';

export interface RowProps {
	children: ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
	return <div className={getStyles(['columns'])}>{children}</div>;
};

export default Row;
