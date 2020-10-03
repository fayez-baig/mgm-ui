import styles from '../styles.module.css';

export const getStyles = (classes: string[]) =>
	classes.map(cssClass => styles[cssClass]).join(' ');
