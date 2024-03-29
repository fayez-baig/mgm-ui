import React from 'react';
import { TableCellProps } from './types';

const TableCell: React.FC<TableCellProps> = ({ children }) => {
	return <td>{children}</td>;
};

export default TableCell;
