import React from 'react';
import { DeleteButtonProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const DeleteButton: React.FC<DeleteButtonProps> = ({
	btnSize,
	...otherDeleteBtnprops
}) => {
	let deleteBtnClassesStr = 'delete,';

	btnSize !== 'default' && (deleteBtnClassesStr += `is-${btnSize},`);

	const classes = getStyles(deleteBtnClassesStr.split(','));

	return <button className={classes} {...otherDeleteBtnprops}></button>;
};

export default DeleteButton;
