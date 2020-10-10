type Size =
	| '16x16'
	| '24x24'
	| '32x32'
	| '48x48'
	| '64x64'
	| '96x96'
	| '128x128'
	| 'square'
	| '1by1'
	| '5by4'
	| '4by3'
	| '3by2'
	| '16by9'
	| '2by1'
	| '3by1'
	| '4by5'
	| '3by4'
	| '2by3'
	| '3by5'
	| '9by16'
	| '1by2'
	| '1by3'
	| 'fullwidth';
export interface ImageProps {
	alt?: string;
	imageWidth?: Size;
	isRounded?: boolean;
	src: string;
}

export const defaultProps: ImageProps = {
	alt: 'alt-text',
	imageWidth: '128x128',
	src: 'https://bulma.io/images/placeholders/64x64.png'
};
