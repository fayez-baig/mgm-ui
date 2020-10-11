import * as React from 'react';
import { TagWrapperProps } from './types';
import { getStyles } from '../../styles/getStyles';

const TagWrapper: React.FC<TagWrapperProps> = ({ children }) => {
	return (
		<div className={getStyles(['field', 'is-grouped', 'is-grouped-multiline'])}>
			{children}
		</div>
	);
};

export default TagWrapper;
