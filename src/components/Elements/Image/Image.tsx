import React from 'react';
import { ImageProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Image: React.FC<ImageProps> = ({
	isRounded,
	imageSize,
	...otherImageProps
}) => {
	let imageClassesStr = 'image,';
	imageSize && (imageClassesStr += `is-${imageSize},`);

	const classes = getStyles(imageClassesStr.split(','));

	let roundedClassesStr = '';
	isRounded && (roundedClassesStr += `is-rounded,`);
	const roundedClasses = getStyles(roundedClassesStr.split(','));

	return (
		<figure className={classes}>
			<img className={roundedClasses} {...otherImageProps} />
		</figure>
	);
};

export default Image;
