import React from 'react';
import styles from './label.scss';

type Props = {
	light?: boolean
	className?: string
	children: React.ReactNode
}

export function Label({light, ...props}: Props) {
	return <label {...props} className={styles.label + ' ' + (props.className || '') + ' ' + (light ? 'light' : '')} />;
}