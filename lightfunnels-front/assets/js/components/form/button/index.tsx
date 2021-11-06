import React, {ButtonHTMLAttributes} from 'react';

import styles from './button.scss';

import {
	useApi
} from '../../../data'

// export function useSpinning(query): boolean {
// 	let api = useApi();
// 	return React.useMemo(
// 		function () {
// 			return api.state.activeHttpQueries.some(value => query.includes(value));
// 		},
// 		[api.state.activeHttpQueries]
// 	);
// }

export type BaseButtonProps = {
	onCard?: boolean
	tertiary?: boolean
	primary?: boolean
	danger?: boolean
	className?: string
	highlighted?: boolean
	centered?: boolean
	block?: boolean
	medium?: boolean
	spinning?: boolean
	disabled?: boolean
	children: React.ReactNode
	link?: boolean
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	onCard,
	tertiary,
	primary,
	danger,
	className,
	highlighted,
	centered,
	block,
	medium,
	link,
	spinning,
	disabled,
	...props
}: ButtonProps) {

	spinning = spinning;

	disabled = disabled;

	// React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

	return (
		<button
			{...props}
			disabled={disabled}
			onClick={spinning ? undefined : props.onClick}
			className={`${styles.button} ${buttonPropsToClassNames(
				tertiary,
				primary,
				danger,
				className,
				highlighted,
				centered,
				block,
				medium,
				link,
				spinning,
				onCard
			)}`}
		/>
	);
}

export function buttonPropsToClassNames(tertiary?: boolean, primary?: boolean, danger?: boolean, className?: string, highlighted?: boolean, centered?: boolean, block?: boolean, medium?: boolean, link?: boolean, spinning?: boolean, onCard?: boolean) {
	return `${className || ""}${highlighted ? ' highlighted' : ''}${onCard ? ' onCard' : ''}${primary ? " primary" : tertiary ? ' tertiary' : danger ? " danger" : "" }` + 
	 `${centered ? ' centered' : ''} ${block ? ' block' : ''} ${medium ? ' medium' : ''} ${link ? ' link' : ''} ` +
	 `${spinning ? ' spinning' : ''} ${!primary && !danger && !tertiary ? 'dark-spinner' : ''}`;
}