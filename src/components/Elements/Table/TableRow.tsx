import React from 'react';
import { TableRowProps } from './types';

const TableRow: React.SFC<TableRowProps> = ({ children }) => {
	return <tr>{children}</tr>;
};

export default TableRow;
