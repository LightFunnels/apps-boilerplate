import React from 'react'
import lodash from 'lodash'

import styles from './select.scss';

import {
	ErrorView,
} from '../..';

import {
	MenuContainer,
	SelectLabel,
	useToggle4,
} from './index'

type Option = {
	label: string,
	options: {
		value: string | number,
		label: React.ReactNode
	}[]
}

type GroupedSelectComponentProps = {
	className?: string
	options: Option[]
	error?: string
	medium?: boolean
	value: string | number
	onChange: (v) => void
	label?: string
}

export function GroupedSelectComponent({ className, options, error, medium, ...props }: GroupedSelectComponentProps) {
	
	const [ref, refMenu, active, setIsActive, popper] = useToggle4();
	const [openGroup, setOpenGroup] = React.useState(null);

	const selected = React.useMemo(
		function () {
			return lodash.map(options, 'options').flat().find(option => option.value === props.value);
		},
		[props.value, options]
	);

	return (
		<div className={styles.select + ' grouped ' + (className || '')}>
			<SelectLabel selected={selected ? selected.label : undefined} ref={ref} {...props} />
			{
				active && (
					<MenuContainer className="grouped" ref={refMenu}>
						{/* naoufal: keep this wrapper .selectItemsContainer it uses flex-grow prop */}
						<div onClick={event => event.nativeEvent.canceler = (event.nativeEvent.canceler || []).concat(refMenu.current)} className="selectItemsContainer">
							{
								options.map(
									group => {
										return (
											<Group
												popper={popper}
												openGroup={openGroup}
												setOpenGroup={setOpenGroup}
												key={group.label}
												group={group}
												onChange={props.onChange}
												setIsActive={setIsActive}
											/>
										)
									}
								)
							}
						</div>
					</MenuContainer>
				)
			}
			<ErrorView error={error} />
		</div>
	)
}

function Group(props) {
	let isOpen = props.openGroup === props.group.label;
	return (
		<div className="group" >
			<div onClick={() => (props.popper.current.update(), props.setOpenGroup(isOpen ? null : props.group.label))} className="groupLabel row">
				<i className={isOpen ? "icon-arrow-down" : "icon-arrow-right1"}></i>
				<span className="groupLabelText">{props.group.label}</span>
			</div>
			{
				isOpen && (
					<div className="options">
						{
							props.group.options.map(
								function (option) {
									return (
										<div
											key={option.value}
											className="option row"
											onClick={
												function () {
													props.onChange(option.value);
													props.setIsActive(false);
												}
											}
										>
											{option.label}
										</div>
									)
								}
							)
						}
					</div>
				)
			}
		</div>
	)
}