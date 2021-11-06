import React from 'react';

import {
	Label
} from '../label';

type Props = {
	label?: React.ReactNode
	light?: boolean
	className?: string
	children: React.ReactNode
}

import styles from './form-group.scss';

export function FormGroup({ label, light, ...props }: Props) {
	return (
		<div className={`${props.className || ""} form-group `} >
			{label && <Label light={light} >{label}</Label>}
			{props.children}
		</div>
	);
}

export function Hint({children}: {children: React.ReactNode}){
	return (
		<div className={styles.hint}>
			{children}
		</div>
	)
}