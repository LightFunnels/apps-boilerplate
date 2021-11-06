import React, {Fragment, Suspense} from 'react';
import lodash from 'lodash'
import styles from './select.scss';
import Popper from 'popper.js'
import {createPortal} from 'react-dom'
import type {PopperOptions} from 'popper.js';
import {
	graphql,
	usePaginationFragment,
	useRelayEnvironment,
	loadQuery,
	GraphQLTaggedNode,
	usePreloadedQuery,
} from 'react-relay'

import {
	useDebounce,
	ErrorView,
	Spinner,
	Tile,
	Avatar,
} from '../..';

import {
	Loaders
} from '../../../data'
 
/* 
async component shouldnt close when clicking on load more or search input
a prop [closeOnSelect] to let the component know if it should close or not on select
for this we need 3 refs
	menu ref
	load more button ref
	input ref
*/

export function NativeSelectComponent(props) {
	return (
		<span className={styles.nativeSelectContainer}>
			<i className="icon-arrow-down"/>
			<select
				{...props}
				className={`nativeSelect ${props.className}`}
				value={props.value || ''}
				onChange={props.onChange}
			>
				<option value="" disabled hidden>{props.label || 'Select an option'}</option>
				{
					props.options.map(
						function(op) {
							return (
		    				<option key={op.value} value={op.value}>{op.label}</option>
							)
						}
					)
				}
		  </select>
		  <ErrorView error={props.error} />
		</span>
	)
}

export type SelectComponentProps = {
	disabled?: boolean
	className?: string
	// mybe w will need to remove this readonly
	options: readonly {
		label: string|React.ReactNode
		value: string|boolean|number|undefined|null,
		thumbnail?: string
	}[]
	error?: string
	medium?: boolean
	onChange: (v) => void
	value: SelectComponentProps["options"][number]["value"] | null
	cancellable?: boolean
}
export function SelectComponent({ className, options, error, medium, ...props }: SelectComponentProps) {

	let [ref, refMenu, active] = useToggle4();

	let selected = options.find(option => option.value === props.value);

	let ref1 = React.useRef<{[key: string]: HTMLDivElement|null}>({});

	React.useEffect(
		function (){
			if(active){
				let elm = ref1.current[mapValueToKey(props.value)];
				if(elm){
					elm.parentElement!.scrollTop = elm.offsetTop;
				}
			}
		},
		[active]
	);

	function mapValueToKey(v): string{
		if(v === undefined){
			return 'undefined';
		} else if (v === null){
			return 'null';
		} else {
			return v.toString();
		}
	}

	return (
		<div className={styles.select + ' ' + (className || '')}>
			<SelectLabel selected={selected?.label} ref={ref} {...props} active={active} medium={medium}/>
			{
				active && (
					<MenuContainer ref={refMenu}>
						{/* naoufal: keep this wrapper .selectItemsContainer it uses flex-grow prop */}
						<div className="selectItemsContainer">
							{
								options.map(
									option => {
										return (
											<div
												key={option.value +'-' + option.label}
												ref={e => {
													ref1.current[mapValueToKey(option.value)] = e
												}}
												className={`option ${selected === option ? 'checked' : ''}`}
												onClick={
													props.onChange && (
														() => {
															props.onChange(option.value);
														}
													)
												}
											>
												<Tile
													centered
													icon={option.thumbnail ? <Avatar className={styles.thumbnail} src={option.thumbnail ? option.thumbnail + '?d=version1' : option.thumbnail} /> : undefined}
													children={<span >{option.label}</span>}
												/>
											</div>
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

type UseToggleOpts = {
	state?: boolean
	key?: any
	disabled?: boolean
	placement?: PopperOptions["placement"]
	modifiers?: PopperOptions["modifiers"]
}
type UseToggle4Return = [
	React.MutableRefObject<HTMLDivElement>,
	React.MutableRefObject<HTMLDivElement>,
	boolean,
	(state: boolean) => void,
	React.MutableRefObject<Popper|null>
];
export function useToggle4(options: UseToggleOpts = {}): UseToggle4Return {
	let [isOpen, setIsOpen] = React.useState<boolean>(options.state || false);
	let ref = React.useRef<HTMLElement>(null);
	let refMenu = React.useRef<HTMLElement>(null);
	let popper = React.useRef<Popper|null>(null);

	React.useEffect(
		function () {

			if(options.disabled){
				return;
			}

			// console.log(options.key);
			let btnClick, documentClick, tm;

			if(isOpen){

				if(!ref.current || !refMenu.current){
					throw new Error('missing one of ref, refMenu');
				}

				let opts = {} as any;
				if(options.placement){
					opts.placement = options.placement;
				}
				if(options.modifiers){
					opts.modifiers = options.modifiers;
				}
				popper.current = new Popper(
				  ref.current,
				  refMenu.current,
				  opts
				);

				documentClick = function (event) {
					if(
						// ignore input, load more button clicks
						// (event.canceler === refMenu.current)						
						(event.canceler && event.canceler.includes(refMenu.current))
					){
						return;
					}
					setIsOpen(false);
				}

				tm = setTimeout(
					function(){
						document.addEventListener('click', documentClick)
					}
				);

			} else {
				btnClick = () => setIsOpen(true);
				if(ref.current){
					ref.current.addEventListener('click', btnClick)
				}
			}

			return () => {
				if(tm){
					clearTimeout(tm);
				}
				if(popper.current){
					popper.current.destroy();
					popper.current = null;
					document.removeEventListener(
						'click',
						documentClick
					);
				}
				if(btnClick && ref.current){
					ref.current.removeEventListener(
						'click',
						btnClick,
					)
				}
			}

		},
		[isOpen, options.key, options.disabled]
	);
 
	return [
		ref as React.MutableRefObject<HTMLDivElement>,
		refMenu as React.MutableRefObject<HTMLDivElement>,
		isOpen,
		setIsOpen,
		popper
	];
}

export type AsyncSelectComponentProps = {
	value: number|string|null
	loader: keyof React.ContextType<typeof Loaders>
	className?: string
	cancellable?: boolean
	onChange: (v: number|string|null) => void
	hasImage?: boolean
	outOfCard?: boolean
	labelClassName?: string
	medium?: boolean
	placement?: UseToggleOpts["placement"]
	map?: (v) => {thumbnail?: string, value: number|string, label: string}
	// primaryKey?: string
	label?: React.ReactNode
	error?: string
	query: GraphQLTaggedNode
	fragment: GraphQLTaggedNode
	emptySearchText?: AsyncSelectComponentBodyProps["emptySearchText"]
	emptyState: AsyncSelectComponentBodyProps["emptyState"]
	menuProps?: AsyncSelectComponentBodyProps["menuProps"]
	initial_sort_by?: AsyncSelectComponentBodyProps["initial_sort_by"]
	initial_sort_dir?: AsyncSelectComponentBodyProps["initial_sort_dir"]
	mapOptionStyle?: AsyncSelectComponentBodyProps["mapOptionStyle"]
	blur_on_select?: AsyncSelectComponentBodyProps["blur_on_select"]
	onLoad?: (a: any[]) => void
};
export function AsyncSelectComponent(props: AsyncSelectComponentProps) {

	const loaders = React.useContext(Loaders);
	const [res, setRes] = React.useState<{label: string, thumbnail?: string, value: string|number}|null>(null);
	const [ref, refMenu, isOpen, setIsOpen, popper] = useToggle4(props.placement ? {placement: props.placement} : {});
	const refUnmounted = React.useRef(false);

	// lazily loading selected item
	React.useEffect(
		function(){
			if(props.value != null){
				(loaders[props.loader] as any).load(props.value).then(
					node => {
						if(node) {
							let result = (props.map || lodash.identity)({node})!;
							if(refUnmounted.current === false){
								// only set if not yet mounted
								setRes(result);
							}
						}
					}
				)
			} else if (res?.label){
				if(refUnmounted.current === false){
					// only set if not yet mounted
					setRes(null);
				}
			}
		},
		[props.value]
	);

	React.useLayoutEffect(
		function(){
			return () => {
				refUnmounted.current = true;
			}
		},
		[]
	);

	return (
		<div className={styles.select + ' ' + (props.className || '')}>
			<SelectLabel
				selected={res?.label}
				image={res?.thumbnail}
				ref={ref}
				label={props.label}
				cancellable={props.cancellable}
				refMenu={refMenu}
				onChange={props.onChange}
				hasImage={props.hasImage}
				outOfCard={props.outOfCard}
				labelClassName={props.labelClassName}
				active={isOpen}
				medium={props.medium}
			/>
			{
				isOpen && (
					<AsyncSelectComponentBody
						// Im disabling this, this may break a lot of stuff
						{...props}
						ref={refMenu}
						// primaryKey={props.primaryKey}
						selected={props.value}
						onChange={props.onChange}
						query={props.query}
						fragment={props.fragment}
						setIsOpen={setIsOpen}
						hasImage={props.hasImage}
						popper={popper}
						menuProps={props.menuProps}
					/>
				)
			}
			<ErrorView error={props.error} />
		</div>
	);
}

type AsyncSelectComponentBodyProps = {
	blur_on_select?: boolean
	hasSelectAll?: boolean
	setIsOpen: (a: boolean) => void
	onChange: (a: any) => void
	menuProps?: {[key: string]: any}
	emptySearchText?: React.ReactNode
	emptyState?: React.ReactNode | (( close: () => void ) => React.ReactNode)
	selected: AsyncSelectComponentProps["value"]
	mapOptionStyle?: (any) => React.CSSProperties
	hasImage?: boolean
	// primaryKey?: string
	initial_sort_by?: string
	initial_sort_dir?: string
	map?: (e) => any
	popper: React.MutableRefObject<Popper|null>

	query: GraphQLTaggedNode
	fragment: GraphQLTaggedNode

	// this is used in fonts to load fonts in the browser
	onLoad?: AsyncSelectComponentProps["onLoad"]
}
const AsyncSelectComponentBody = React.forwardRef<HTMLDivElement, AsyncSelectComponentBodyProps>(
	function (props, refMenu) {

		React.useEffect(
			function(){
				ref.current!.focus();
			},
			[]
		);

		const env = useRelayEnvironment();
		const ref = React.useRef<HTMLInputElement>(null);

		const [query, setQuery] = React.useState('');
		const preloadedQuery = React.useMemo(
			() => {
				return loadQuery(env, props.query, {query});
			},
			[]
		);

	  return (
	  	<MenuContainer
				{...props.menuProps}
				ref={refMenu}
				onClick={e => {
					if(refMenu && (typeof refMenu !== 'function')){
						e.nativeEvent.canceler = (e.nativeEvent.canceler||[]).concat(refMenu.current);
					}
				}}
			>
				<div className="inputContainer" >
					<i className="icon-search icon" />
					<input
						ref={ref}
						type="text"
						value={query}
						className="input"
						onChange={ev => setQuery(ev.target.value)}
						placeholder="Search"
					/>
				</div>
		  	<Suspense fallback={<AsyncComponentSpinner />}>
		  		<AsyncSelectComponentBodyComponent
		  			{...props}
		  			preloadedQuery={preloadedQuery}
		  			_query={query}
		  		/>
		  	</Suspense>
			</MenuContainer>
	  );
	}
);
const AsyncSelectComponentBodyComponent = React.forwardRef<HTMLDivElement, AsyncSelectComponentBodyProps & {preloadedQuery, _query: string}>(
	function(props, refMenu){

		const preloadedData = usePreloadedQuery<any>(props.query, props.preloadedQuery);

		const {
			hasNext,
			data,
			isLoadingNext,
			loadNext,
			refetch
		} = usePaginationFragment<any, any>(props.fragment, preloadedData);

	  React.useEffect(
	  	function () {
	  		lodash.result(props, ['popper', 'current', 'update']);
	  		if(props.onLoad){
	  			props.onLoad(data.pagination?.edges);
	  		}
	  	},
	  	[data.pagination?.edges]
	  );

	  let call = useDebounce(function(query){
	  	refetch({query});
	  }) as (...a: any) => void;

	  React.useEffect(
	  	function(){
	  		call(props._query);
	  	},[props._query]
	  );

	  function close() {
	  	if(props.blur_on_select){
				props.setIsOpen(false);
			}
	  }

		return (
			<Fragment>
				{
					(data.pagination.edges.length || isLoadingNext) ? (
						<div
							className="selectItemsContainer"
							id="div"
							onScroll={hasNext ?
								function handleScroll(event: any) {
							  	if(event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
						        loadNext(10);
						      }
							  } : undefined
							}
						>
							{
								props.hasSelectAll && (
									<div
										className={'option'}
										onClick={
											() => {
												props.onChange(null);
											}
										}
									>
										Select All
									</div>
								)
							}
							{
								data.pagination.edges
								.map(props.map || lodash.identity)
								.map(
									edge => {
										return (
											<div
												key={edge.value}
												className={`option ${props.selected === edge.value ? 'selectedOption' : ''}`}
												style={props.mapOptionStyle ? props.mapOptionStyle(edge) : undefined}
												onClick={
													(event) => {
														props.onChange(edge.value);
														close();
													}
												}
											>
												<Tile
													centered
													icon={props.hasImage ? <Avatar className="thumbnail" src={edge.thumbnail} /> : undefined}
													children={<span >{edge.label}</span>}
												/>
											</div>
										)
									}
								)
							}
							{
								isLoadingNext && (
									<AsyncComponentSpinner />
								)
							}
						</div>
					) : props._query ? (
						<div className="emptySearch">
							<div className="iconContainer">
								<i className="icon-search"/>
							</div>
							<div className="emptySearchText">
								{props.emptySearchText || "Can't find anything!"}
							</div>
						</div>
					) : (
						// condinionally call props.emptyState
						typeof props.emptyState === 'function' ?
							props.emptyState(close) : 
							props.emptyState
					)
				}
			</Fragment>
		)
	}
);

function AsyncComponentSpinner(){
	return (
		<div className="loading" >
			<Spinner className="loadingSpinner" />
			<span>loading...</span>
		</div>
	)
}

export {GroupedSelectComponent} from './grouped-select';

export const MenuContainer = React.forwardRef<HTMLDivElement, {onClick?: (ev) => void, className?: string, children: React.ReactNode}>(
	function (props, menuRef) {
		return (
			<div ref={menuRef} {...props} className={styles.menu + ' ' + (props.className || '')} >
				{props.children}
			</div>
		)
	}
);

type SelectLabelProps = {
	disabled?: boolean
	onClick?: (e) => void
	onChange: (e) => void
	outOfCard?: boolean
	cancellable?: boolean
	selected?: React.ReactNode
	hasImage?: boolean
	image?: string
	label?: React.ReactNode
	labelClassName?: string
	active?: boolean
	medium?: boolean
	refMenu?: React.MutableRefObject<HTMLDivElement>
	// setIsOpen: (a: boolean) => void
}
export const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
	function SelectLabel(props, labelRef) {
		return (
			<div
				onClick={!props.disabled ? props.onClick : undefined}
				className={`${styles.label} ${props.disabled ? 'disabled' : ''} ${props.outOfCard ? 'outOfCard' : ''} ${props.labelClassName || ''} ${props.active ? 'active' : ''} ${props.medium ? 'medium' : ''}`}
			>
				<div className={`labelClickable ${props.cancellable && props.selected ? 'hasCancel' : ''}`} ref={labelRef} />
				{
					(props.selected && props.hasImage) && (
						<Avatar className="productImage" src={props.image ? props.image + '?d=version1' : props.image}/>
					)
				}
				<label
					children={
						props.selected || props.label || 'Select...'
					}
					className={styles.textLabel + ' f-13 lh-16 '}
					// disabled={props.disabled}
				/>
				{
					(props.cancellable && props.selected) ? (
						<i
							className="ic icon-cancel-music"
							onClick={
								function (event) {
									event.stopPropagation();
									// event.nativeEvent.canceler = (event.nativeEvent.canceler || []).conca( props.refMenu.current );
									props.onChange(null);
									// props.setIsOpen(false);
								}
							}
						/>
					) : (
						<i className="ic icon-arrow-down" />
					)
				}
			</div>
		)
	}
);

AsyncSelectComponent.defaultProps = {
	blur_on_select: true,
	map: lodash.identity,
	hasImage: false,
}
SelectComponent.defaultProps = {
	label:'Select',
	options: []
}