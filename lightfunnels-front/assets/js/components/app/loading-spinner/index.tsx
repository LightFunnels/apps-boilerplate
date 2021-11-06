import React from 'react';

import styles from './loading-spinner.scss';

type Props = {
	className?: string
	relative?: boolean
}
export function LoadingSpinner(props: Props){
	return (
		<img
			className={`${styles.spinner} ${props.className || ''} ${props.relative ? 'relative' : ''}`}
			src={require('Assets/loadingSpinner.png')}
		/>
	)
}