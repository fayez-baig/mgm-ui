import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { CheckBoxProps, defaultProps } from './types';

const CheckBox: React.FC<CheckBoxProps> = ({
	disabled,
	children,
	name,
	...otherCheckBoxProps
}) => {
	return (
		<label
			className={getStyles(['checkbox'])}
			htmlFor={name}
			disabled={disabled}>
			<input
				type='checkbox'
				disabled={disabled}
				name={name}
				{...otherCheckBoxProps}
			/>{' '}
			{children}
		</label>
	);
};

CheckBox.defaultProps = defaultProps;

export default CheckBox;
