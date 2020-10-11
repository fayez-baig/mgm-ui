import React from 'react';
import { getStyles } from '../../styles/getStyles';
import { TagProps } from './types';
import DeleteButton from '../DeleteButton/DeleteButton';

const Tag: React.SFC<TagProps> = ({
	children,
	bgColor,
	isLight,
	tagSize,
	isRounded,
	hasDeleteBtn,
	onClick,
	hasDeleteIcon
}) => {
	let tagClassesStr = 'tag,';
	bgColor !== 'default' && (tagClassesStr += `is-${bgColor},`);
	tagSize && (tagClassesStr += `is-${tagSize},`);
	isLight && (tagClassesStr += `is-light,`);
	isRounded && (tagClassesStr += `is-rounded,`);
	hasDeleteIcon && (tagClassesStr += `is-delete,`);

	const classes = getStyles(tagClassesStr.split(','));

	return (
		<span className={classes} onClick={onClick}>
			{hasDeleteIcon ? null : children}
			{hasDeleteBtn && <DeleteButton onClick={onClick} />}
		</span>
	);
};

export default Tag;
