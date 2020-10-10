import React from 'react';
import { ImageProps, defaultProps } from './types';
import { getStyles } from '../../styles/getStyles';

const Image: React.FC<ImageProps> = ({
	isRounded,
	imageWidth,
	alt,
	...otherImageProps
}) => {
	let imageClassesStr = 'image,';
	imageWidth && (imageClassesStr += `is-${imageWidth},`);

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
