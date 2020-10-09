import React from 'react';
import { RadioProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Radio: React.SFC<RadioProps> = ({
	children,
	htmlFor,
	...otherRadioProps
}) => {
	return (
		<div className={getStyles(['control'])}>
			<label className={getStyles(['radio'])} htmlFor={htmlFor}>
				<input type='radio' {...otherRadioProps} /> {children}
			</label>
		</div>
	);
};

Radio.defaultProps = defaultProps;

export default Radio;
