import React from 'react';
import { TableHeadingProps } from './types';

const TableHeading: React.FC<TableHeadingProps> = ({ children }) => {
	return <th>{children}</th>;
};

export default TableHeading;
