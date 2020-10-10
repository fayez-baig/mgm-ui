import React from 'react';
import { ImageProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Image: React.FC<ImageProps> = ({
	isRounded,
	imageSize,
	alt,
	...otherImageProps
}) => {
	let imageClassesStr = 'image,';
	imageSize && (imageClassesStr += `is-${imageSize},`);

	const classes = getStyles(imageClassesStr.split(','));

	return (
		<figure className={classes}>
			<img
				className={isRounded ? 'is-rounded' : ''}
				alt={alt}
				{...otherImageProps}
			/>
		</figure>
	);
};

Image.defaultProps = defaultProps;

export default Image;
