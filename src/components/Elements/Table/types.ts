import { ReactNode } from 'react';

export interface TableProps {
	children?: ReactNode;
	fullWidth?: boolean;
	isBordered?: boolean;
	isHoverable?: boolean;
	isNarrow?: boolean;
	isStriped?: boolean;
}

export interface TheadProps {
	children?: ReactNode;
}

export interface TfootProps {
	children?: ReactNode;
}

export interface TableRowProps {
	children?: ReactNode;
}

export interface TableHeadingProps {
	children?: ReactNode;
}

export interface TableCellProps {
	children?: ReactNode;
}

export interface TbodyProps {
	children?: ReactNode;
}

export const defaultProps: TableProps = {};
