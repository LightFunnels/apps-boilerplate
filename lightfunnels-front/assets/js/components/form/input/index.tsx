import React, { Component, Fragment, InputHTMLAttributes} from "react";
import lodash from "lodash";

import {
	ErrorView,
	StaticPopover,
} from '../../';

import styles from './input.scss';
import {RawCurrencyInputComponent} from '../currency-input';

type CPropsBase = Omit<InputHTMLAttributes<HTMLInputElement>, "ref"> & {
	icon?: React.ReactNode
	leftIcon?: React.ReactNode
	error?: string
	wrapperClassName?: string
	inputClassName?: string
	medium?: boolean
	reachMaxMessage?: string
	className?: string
	nopointer?: boolean
	min?: number
	max?: number
	onChange: (v) => void
	inputRef?: React.MutableRefObject<HTMLInputElement|null>
	ref?: React.MutableRefObject<HTMLDivElement>
}

export type CProps = 
	(CPropsBase & {value: string, type?: "text"|'password'}) |
	(CPropsBase & {value: number|string, type: "number" | "currency", showAdjusters?: boolean});

export const InputComponent = React.forwardRef<HTMLDivElement, CProps>(
	function InputComponent({icon, leftIcon, error, wrapperClassName, inputClassName, medium, reachMaxMessage, inputRef, ...props}, ref) {

		const [showTooltip, setShowTooltip] = React.useState<string|null>(null);
		const inRef = React.useRef<HTMLDivElement>(null);

		const isNumber = props.type === 'number';
		const hasAdjusters = isNumber && (("showAdjusters" in props) && (props.showAdjusters !== false));
		
		const Cmp = isNumber ?
			NumberInput:
			props.type === 'currency' ?
				RawCurrencyInputComponent : 'input';

		let value = props.value === null ? '' : props.value;

		let oldValue = React.useRef<any>();

		if(
			isNumber &&
			(oldValue.current == '0') && 
			(value != '')
		){
			value = Number(value).toString();
		}

		let componeProps = props;

		if("showAdjusters" in props){
			let {showAdjusters, ...newProps} = props;
			componeProps = newProps;
		}

		oldValue.current = value;

		return (
			<div ref={ref} className={styles.textInputWrapper + ' ' + (wrapperClassName || '')} >
				<div
					ref={inRef}
					className={`w1 ${(medium ? 'medium' : '')} ${(error ? 'hasError' : '')} ${hasAdjusters ? 'hasAdjusters' : ''} ${leftIcon ? 'hasLeftIcon' : ''} ${icon ? 'hasRightIcon' : ''} ${(props.disabled) ? 'readOnly' : ''}`}
				>
					<Cmp
						{...componeProps}
						// (10-04-2021) keep this to avoid value=null error
						value={value}
						className={`${styles.textInput} ${props.className || ''} ${error ? 'hasError' : ''} ${props.nopointer ? 'nopointer' : ''}`}
						ref={inputRef}
					/>
					{
						hasAdjusters && (
							<AdjustHandler
								{...props}
								reachMaxMessage={reachMaxMessage}
								showTooltip={showTooltip}
								showPopover={setShowTooltip}
							/>
						)
					}
					{
						leftIcon && (
							<div className="leftIcon" >
								{leftIcon}
							</div>
						)
					}
					<div className={styles.overlay} />
					{
						icon && (
							<div className="icon" >
								{icon}
							</div>
						)
					}
				</div>
				<ErrorView error={error} />
				{
					(showTooltip) && (
						<StaticPopover placement="top" target={inRef as React.MutableRefObject<HTMLDivElement>}>
							{showTooltip}
						</StaticPopover>
					)
				}
			</div>
		);
	}
);

InputComponent.defaultProps = {
	min: -Infinity,
	max: Infinity,
}

function AdjustHandler(props: CProps & {showTooltip: string|null, showPopover: (v: string|null) => void}) {

	var update;

	if(props.onChange){
		update = function (event) {
			var newValue: number,
					value = Number(props.value) || 0;
			let action = event.target.dataset.action;
			if(action === "increase"){
				newValue = value + 1;
			} else {
				newValue = value - 1;
			}
			if(lodash.inRange(newValue, props.min as number, (props.max ? props.max + 1 : Infinity))){
				const evt = Object.assign({}, event.nativeEvent, {
				  target: {
				    value: newValue,
				    name: props.name?.toString()
				  }
				});
				props.onChange(evt);
			} else {
				if(action === 'increase'){
					if(props.reachMaxMessage){
						props.showPopover(props.reachMaxMessage);
					}
				} else {

				}
			}
		}
	}

	const increaseDisabled = ((props.value as number) + 1) > (props.max || Infinity);
	const decreaseDisabled = ((props.value as number) - 1) < (props.min || -Infinity);

	return (
		<div className="adjustHandler" >
			<i
				onMouseEnter={
					(increaseDisabled && props.reachMaxMessage) ?
						function () {
							if(props.showPopover){
								props.showPopover(props.reachMaxMessage as string);
							}
						} : undefined
				}
				onMouseLeave={
					props.showTooltip ?
						function () {
							props.showPopover(null);
						} : undefined
				}
				data-disabled={increaseDisabled}
				data-action="increase"
				onClick={update}
				className="adjustNumberInput icon-arrow-up2"
			/>
			<i
				data-disabled={decreaseDisabled}
				data-action="decrease"
				onClick={update}
				className="adjustNumberInput icon-arrow-down2"
			/>
		</div>
	)
}

const NumberInput = React.forwardRef<HTMLInputElement, any>(
	function NumberInput(props, ref){

		let [value, setv] = React.useState(props.value);

		React.useLayoutEffect(
			function(){
				if(![undefined, null].includes(props.value)){
				  let pfv = Number(value);
				  if(props.value !== pfv){
				    setv(props.value);
				  }
				}
			},
			[props.value]
		);

		function onChangeE(v){
			props.onChange({
			  target:{
			    value: v,
			    name: props.name && props.name.toString()
			  }
			})
		}

		function onChange(event){

			let nv = event.target.value;

			setv(nv);

			if(nv){
			  let pfv = Number(nv);
			  if(
			    (pfv !== props.value) && 
			    !isNaN(pfv)
			  ) {
			    onChangeE(pfv);
			  }
			} else {
			  onChangeE(null);
			}

		}

		return <input {...props} ref={ref} value={value} onChange={onChange} />
	}
)