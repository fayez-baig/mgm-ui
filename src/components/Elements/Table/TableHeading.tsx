import React from 'react';
import { TableHeadingProps } from './types';

const TableHeading: React.SFC<TableHeadingProps> = ({ children }) => {
	return <th>{children}</th>;
};

export default TableHeading;
