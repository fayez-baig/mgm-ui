import React, { ReactNode } from 'react';
import { getStyles } from '../../styles/getStyles';

export interface LoadingWrapperProps {
	children: ReactNode;
	loaderSize?: string;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
	loaderSize,
	children
}) => (
	<div className={getStyles(['control', 'is-loading', loaderSize ?? ''])}>
		{children}
	</div>
);

export default LoadingWrapper;
