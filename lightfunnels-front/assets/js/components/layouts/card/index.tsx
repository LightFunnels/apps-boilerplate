import React, {Component} from 'react'

import styles from './cards.scss';

// import {
// 	ButtonGroup
// } from '../../'

type Props = {
	border?: boolean
	bodyClassName?: string
	className?: string

	title?: React.ReactNode
	actions?: React.ReactNode

	children: React.ReactNode
}

export function Card({border = true, bodyClassName, ...props}: Props) {
	return (
		<div className={`${styles.card} ${props.className || ''}`}>
			{
				(props.title || props.actions) && (
					<div className={`card-header ${border ? "" : "no-border"}`}>
						{
							props.title && <div className={styles.cardTitle}>{props.title}</div>
						}
						{
							props.actions && <div className="card-action">{props.actions}</div>
							// props.actions && <button className="card-action"> <i className="icon-add card-action-icon"></i> {props.actions}</button>
						}
					</div>
				)
			}
			<div className={`card-body ${bodyClassName || ''} ${!(props.title || props.actions) ? 'body-no-title' : ''}`}>
				{props.children}
			</div>
			{/*
				(props.footerActions || props.leftFooterActions) && (
					<div className={`card-footer-actions ${border ? "" : "no-border"}`}>
						<ButtonGroup {...props.leftFooterActionsOptions} >
							{props.leftFooterActions}
						</ButtonGroup>
						<ButtonGroup>
							{props.footerActions}
						</ButtonGroup>
					</div>
				)
			*/}
		</div>
	)
}

// export function CardTitle(props) {
// 	return <div className="card-title secondary">{props.children}</div>;
// }