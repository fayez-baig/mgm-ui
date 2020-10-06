import styles from '../ext.module.css';

export const getExtStyles = (classes: string[]) =>
	classes.map(cssClass => styles[cssClass]).join(' ');
