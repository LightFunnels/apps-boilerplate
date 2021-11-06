import React from 'react';
import styles from './add-link.scss';

type Props = {
	onClick: (e) => void
	className?: string
	children: React.ReactNode
	disabled?: boolean
}
export function AddLink(props: Props) {
	return (
		<span onClick={props.disabled ? undefined : props.onClick} className={`${styles.addLink} ${props.className || ''}`}>
			<i className="icon-add" />
			<span>{props.children}</span>
		</span>
	)
}