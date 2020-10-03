import * as React from 'react';
import { getStyles } from '../../styles/getStyles';

export interface ButtonProps {}

const Button: React.SFC<ButtonProps> = () => {
	const classes = getStyles(['button', 'is-primary']);
	return (
		<>
			<button type='button' className={classes}>
				Click Me!!
			</button>
		</>
	);
};

export default Button;
