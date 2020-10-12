import React from 'react';
import { TableProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Table: React.FC<TableProps> = ({
	children,
	isBordered,
	isStriped,
	isNarrow,
	isHoverable,
	fullWidth
}) => {
	let tableClassesStr = 'table,';
	isBordered && (tableClassesStr += 'is-bordered,');
	isStriped && (tableClassesStr += 'is-striped,');
	isNarrow && (tableClassesStr += 'is-narrow,');
	isHoverable && (tableClassesStr += 'is-hoverable,');
	fullWidth && (tableClassesStr += 'is-fullwidth,');

	const classes = getStyles(tableClassesStr.split(','));

	return <table className={classes}>{children}</table>;
};

Table.defaultProps = defaultProps;

export default Table;
