import React, { Fragment } from 'react';
import ReactContentEditable from 'react-contenteditable'
import {createPortal} from 'react-dom';
import lodash from 'lodash';

import styles from './text-editor.scss'
import {NativeColorPicker, color} from '../../../pages/page-builder/sidebar/element-edit/panels/components/color-picker';

import {
	useToggle4,
	// useImagesLibrary,
	Dropdown,
	FormGroup,
	InputComponent,
	CheckboxComponent,
	Button,
	Modal,
	TextAreaComponent,
} from '../../../components';

import {
	useApi,
	useLocalStore,
} from '../../../data';

import WysStyles from '../../../../../builder/sass/wys';

export function RichTextEditor(props) {

	const [doc, setDocument] = React.useState<Document|null>(null);
	const [isUrlModalOpen, setIsUrlModalOpen] = React.useState(false);
	const root = React.useMemo(() => doc && doc.getElementById('root'), [ doc ]);
	const refs = React.useRef({});
	const ref = React.useRef<HTMLIFrameElement>(null);
	const [useCodeMode, setUseCodeMode] = React.useState(false);

	const api = useApi();
	const [focus, setFous] = React.useState(false);

	const [target, menu, active, setActive] = useToggle4({placement: 'bottom'});

	const [anchorData, setAnchorData] = React.useState({
		anchor: null,
		url: '',
		openNew: false,
	});

	function applyFormat(event) {
		rawExecCommand(event.target.dataset.format);
	}

	function rawQueryCommandValue(c){
		return doc && doc.queryCommandValue(c);
	}

	function textStyleExecCommand(event){
		rawExecCommand(event.target.dataset.format, event.target.dataset.tag);
	}

	function rawExecCommand(a, b?){
		return doc && doc.execCommand(a, false, b);
	}

	function insertTable() {
		let rows = 3, cols = 3;
		let content = new Array(rows).fill( `<tr>${ (new Array(cols).fill('<td></td>').join('')) }</tr>` ).join('');
		rawExecCommand('insertHTML', `<table><tbody>${content}</tbody></table>`);
	}

	React.useEffect(
		function () {

			if(!useCodeMode){
				function setUp(doc) {
					doc.write(
						`<html>
								<head>
									<style>
										.ql-editor{
											min-height: 100%;
											outline: none!important;
											padding: 10px;
											line-height: 1.5;
										}
										html, body, #root{
											height: 100%;
											position: relative;
										}
										img {
											max-width: 100%;
											height: auto;
											display: block;
											pointer-events:none;
										}
										p{
											font-size: 14px;
											margin-top: 14px;
											margin-bottom: 14px;
											margin: 0;
										}
										body{
											padding: 0;
											margin: 0;
											font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
											font-size: 14px;
											line-height: 1.2;
										}
										* {
											box-sizing: border-box;
										}
										.resizable{
											position: relative;
											display: block;
										}
										.resizer{
										  width: 10px;
										  height: 10px;
										  background: #FFFFFF;
											opacity: 0.8;
											border: 1px solid #B4B9BE;
											position: absolute;
										}
										.resizeContainer{
											display: block;
											position: relative;
											padding: 1px 0 0 1px;
										}
										.resizer.top-left {
										  left: -5px;
										  top: -5px;
										  cursor: nwse-resize; /*resizer cursor*/
										}
										.resizer.top-right {
										  right: -5px;
										  top: -5px;
										  cursor: nesw-resize;
										}
										.resizer.bottom-left {
										  left: -5px;
										  bottom: -5px;
										  cursor: nesw-resize;
										}
										.resizer.bottom-right {
										  right: -5px;
										  bottom: -5px;
										  cursor: nwse-resize;
										}
										/* page */
										${WysStyles}
									</style>
								</head>
								<body>
									<div class="${styles.qlEditor} wys" id="root"></div>
								</body>
							</html>
						`
					);
					setDocument(doc);
				}

				if(ref.current!.contentDocument!.readyState === 'complete'){
					setUp(ref.current!.contentDocument);
				} else {
					function onLoad(event) {

						if(event.target === event.currentTarget){
							setUp(event.target.contentWindow.document);
							ref.current!.removeEventListener('load', onLoad);
						}

						// ref.current.contentDocument.getElementsByClassName('wys')[0].addEventListener('mouseleave', onMouseLeave);
						// ref.current.contentDocument.getElementsByClassName('wys')[0].addEventListener('mouseover', onMouseOver);
						// const str = '<div class="resizer top-left"></div><div class="resizer top-right"></div><div class="resizer bottom-left"></div><div class="resizer bottom-right"></div>';

						// function onMouseOver(){
						// 	const elems = ref.current.contentDocument.getElementsByClassName('resizeContainer');
						// 	const elemsResize = ref.current.contentDocument.getElementsByClassName('resizer');
						// 	for (var i = 0; i < elems.length; i++) {
						//     elems[i].insertAdjacentHTML('beforeend', str);
						// 	}
						// 	for (var i = 0; i < elemsResize.length; i++) {
						//     elemsResize[i].addEventListener('mousedown', onMouseDown);
						// 	}
						// }

						// function onMouseLeave(){
						// 	const elems = ref.current.contentDocument.getElementsByClassName('resizeContainer');
						// 	for (var i = 0; i < elems.length; i++) {
						// 		const res = Array.from(elems[i].getElementsByClassName('resizer'));
						// 		for (var i = 0; i < res.length; i++) {
						// 			res[i].remove();
						// 		}
						// 	}
						// }

						// function onMouseDown(e){
						// 	const minimum_size = 20;
						//   let original_width = 0;
						//   let original_x = 0;
						//   let original_y = 0;
						//   let original_mouse_x = 0;
						//   let original_mouse_y = 0;

						// 	const element = e.target.parentNode;
						// 	const currentResizer = e.target;

					  //     e.preventDefault()
					  //     original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
					  //     original_x = element.getBoundingClientRect().left;
					  //     original_y = element.getBoundingClientRect().top;
					  //     original_mouse_x = e.pageX;
					  //     original_mouse_y = e.pageY;
					  //     ref.current.contentWindow.addEventListener('mousemove', resize)
					  //     ref.current.contentWindow.addEventListener('mouseup', stopResize)
							    
						 //    function resize(e) {
						 //      if (currentResizer.classList.contains('bottom-right')) {
						 //        const width = original_width + (e.pageX - original_mouse_x);
						 //        if (width > minimum_size) {
						 //          element.style.width = width + 'px'
						 //        }
						 //      }
						 //      else if (currentResizer.classList.contains('bottom-left')) {
						 //        const width = original_width - (e.pageX - original_mouse_x)
						 //        if (height > minimum_size) {
						 //          element.style.height = height + 'px'
						 //        }
						 //      }
						 //      else if (currentResizer.classList.contains('top-right')) {
						 //        const width = original_width + (e.pageX - original_mouse_x)
						 //        if (width > minimum_size) {
						 //          element.style.width = width + 'px'
						 //        }
						 //      }
						 //      else {
						 //        const width = original_width - (e.pageX - original_mouse_x)
						 //        if (width > minimum_size) {
						 //          element.style.width = width + 'px'
						 //          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
						 //        }
						 //      }
						 //    }
						    
						 //    function stopResize() {
						 //      ref.current.contentWindow.removeEventListener('mousemove', resize)
						 //    }
							// }
					}
					ref.current!.addEventListener('load', onLoad);
				}
			}

		},
		[useCodeMode]
	);

	// var [library, openLibrary, closeLibrary] = useImagesLibrary({
	// 	onChange(ids){
	// 		api
	// 		.loaders
	// 		.Image
	// 		.loadMany(ids)
	// 		.then(
	// 			(ims) => {
	// 				if(ims){
	// 					ims.map(im => {
	// 						//  TODO: implement resizing, ask yusuf about initial width

	// 						// added that br tag because for some reason the img tag gets nested inside the previous p tag
	// 						rawExecCommand(
	// 							'insertHTML', `<br/><div class="resizable"><div class="resizeContainer"><img src="${im.path}"/></div></div><br/>`
	// 						);
	// 					})
	// 				}
	// 			}
	// 		)
	// 	},
	// });

	return (
		<div className={styles.wysiwyg} >
			<div className="ql-toolbar">
				<div className={styles.wrapper}>
					{
						!useCodeMode && (
							<Fragment>
								{
									(props.showType !== false) && (
										<Fragment>
											<Dropdown
												label={
													<div className="headingDropdown">
														Normal Text 
														<i className="icon-caret-down"/>
													</div>
												}
												children={
													<Fragment>
														<li
															data-format="formatBlock"
															data-tag="p"
															onClick={textStyleExecCommand}
														>
															Normal text
														</li>
														<li
															data-format="formatBlock"
															data-tag="h1"
															onClick={textStyleExecCommand}
														>
															Heading 1
														</li>
														<li
															data-format="formatBlock"
															data-tag="h2"
															onClick={textStyleExecCommand}
														>
															Heading 2
														</li>
														<li
															data-format="formatBlock"
															data-tag="h3"
															onClick={textStyleExecCommand}
														>
															Heading 3
														</li>
														<li
															data-format="formatBlock"
															data-tag="h4"
															onClick={textStyleExecCommand}
														>
															Heading 4
														</li>
														<li
															data-format="formatBlock"
															data-tag="h5"
															onClick={textStyleExecCommand}
														>
															Heading 5
														</li>
														<li
															data-format="formatBlock"
															data-tag="h6"
															onClick={textStyleExecCommand}
														>
															Heading 6
														</li>
													</Fragment>
												}
											/>
											<div className="seperator"></div>
										</Fragment>
									)
								}
								<i data-format="bold" onClick={applyFormat} className="icon-bold action"></i>
								<i data-format="italic" onClick={applyFormat} className="icon-italic action"></i>
								<i data-format="underline" onClick={applyFormat} className="icon-underline action"></i>
								
								<ColorOption
									className={"icon-Text-Color"}
									rawQueryCommandValue={rawQueryCommandValue}
									rawExecCommand={rawExecCommand}
									name="foreColor"
								/>
								<ColorOption
									className={"icon-Bg-Color"}
									rawQueryCommandValue={rawQueryCommandValue}
									rawExecCommand={rawExecCommand}
									name="backColor"
								/>
								
								<i data-format="removeFormat" onClick={applyFormat} className="action icon-Clear-Format"></i>
								<div className="seperator"></div>
								<i
									className={`icon-Link action ${anchorData.url ? 'active' : ''}`}
									onClick={() => setActive(true)}
									ref={target}
								/>
								{
									active && (
										<UrlModal
											rf={menu}
											document={doc}
											rawExecCommand={rawExecCommand}
											setActive={setActive}
											anchorData={anchorData}
										/>
									)
								}
								{/*{
									(props.showImage !== false) && (
										<i
											className="icon-image action"
											onClick={openLibrary}
										/>
									)
								}
								{
									(props.showVideo !== false) && (
										<ModalVideo
											rawExecCommand={rawExecCommand}
											toggler={
												<i
													className="icon-video-1 action"
												/>
											}
										/>
									)
								}*/}
								<div className="seperator"></div>
								<i data-format="insertOrderedList" onClick={applyFormat} className="icon-ListNumber action"></i>
								<i data-format="insertUnorderedList" onClick={applyFormat} className="icon-ListCircle action"></i>
								{/*<Dropdown
									placement="bottom-center"
									label={
										<i className="icon-Table action"></i>
									}
									children={
										<div className="alignContainer">
											<div>
												<i className="icon-Text-Align-Left" data-format="justifyLeft" onClick={applyFormat}/>
											</div>
											<div>
												<i className="icon-Text-Align-Center" data-format="justifyCenter" onClick={applyFormat}/>
											</div>
											<div>
												<i className="icon-Text-Align-Right" data-format="justifyRight" onClick={applyFormat}/>
											</div>
											<div>
												<i className="icon-Text-Align-Justified" data-format="justifyFull" onClick={applyFormat}/>
											</div>
										</div>
									}
								/>*/}
								<Dropdown
									placement="bottom-center"
									label={
										<div className="alignLabel action">
											<i className="icon-Text-Align-Left"/>
											<i className="icon-account-dropdown-down"/>
										</div>
									}
									children={
										<div className="alignContainer">
											<div>
												<i className="icon-Text-Align-Left" data-format="justifyLeft" onClick={applyFormat}/>
											</div>
											<div>
												<i className="icon-Text-Align-Center" data-format="justifyCenter" onClick={applyFormat}/>
											</div>
											<div>
												<i className="icon-Text-Align-Right" data-format="justifyRight" onClick={applyFormat}/>
											</div>
											<div>
												<i className="icon-Text-Align-Justified" data-format="justifyFull" onClick={applyFormat}/>
											</div>
										</div>
									}
								/>
							</Fragment>
						)
					}
					<div className="sep"></div>
					<i
						className="action icon-code"
						onClick={function () {
							setUseCodeMode(!useCodeMode);
						}}
					/>
				</div>
			</div>
			{
				useCodeMode ? (
					<textarea
						className="textarea"
						value={props.value}
						onChange={
							function (event) {
								props.onChange(event.target.value);
							}
						}
					/>
				) : (
					<iframe
						ref={ref}
						className={"iframe " + (focus ? 'active' : '')}
						onFocus={() => setFous(true)}
						onBlur={() => setFous(false)}
					>
						{
							(!doc || !root) ? null : createPortal(
								<ReactContentEditable
									html={props.value}
									onChange={event => props.onChange(event.target.value)}
									className="ql-editor"
									onPaste={
										function (e) {
											e.preventDefault();
											const type = e.clipboardData.types;

											var text = e.clipboardData.getData('text/plain');
											if(type.includes('text/html')){
												text = e.clipboardData.getData('text/html');
											}
											let d = document.createElement('div');
											d.innerHTML = text;
											Array.from(d.querySelectorAll('meta,style,script')).forEach(
												function (e) {
													e.parentNode!.removeChild(e);
												}
											);
									    // (e.target as HTMLDivElement).ownerDocument.execCommand("insertHTML", false, text);
									    let html = d.innerHTML.replace(
									    	new RegExp(
									        '<!--[\\s\\S]*?(?:-->)?'
									        + '<!---+>?'
									        + '|<!(?![dD][oO][cC][tT][yY][pP][eE]|\\[CDATA\\[)[^>]*>?'
									        + '|<[?][^>]*>?',
									        'g'
									      ),
									      ""
									   	);
									    (e.target as HTMLDivElement).ownerDocument.execCommand(
									    	"insertHTML", false, html
									    );
										}
									}
									onSelect={
										(e) => {
											{/* TODO: Changing state here makes the text editor reload and ignore changes */}

											let sel: Selection | null = doc.getSelection(), pointedLiTag;
											if(
												(sel == null) ||
												(sel.anchorNode == null) ||
												!(pointedLiTag = sel.anchorNode.parentNode)
											){
												return;
											}
											
											if(pointedLiTag.tagName === 'A'){
												setAnchorData({
													anchor: pointedLiTag,
													url: pointedLiTag.getAttribute('href'),
													openNew: pointedLiTag.getAttribute('target') === '_blank',
												})
											} else if (anchorData.anchor) {
												setAnchorData({
													anchor: null,
													url: '',
													openNew: false,
												});
											}
										}
									}
								/>,
								root
							)
						}
					</iframe>
				)
			}
		</div>
	)	
}

function ColorOption(props: {className: string, rawQueryCommandValue: (a) => void, rawExecCommand: (a, b?) => void, name: 'foreColor' | 'backColor'}){
	const [refForeColorPickerAction, refForeColorPicker, isForeColorPickerOpen, setIsForeColorPickerOpen] = useToggle4();
	return (
		<Fragment>
			{
				isForeColorPickerOpen && (
					<EditorColorPicker
						rf={refForeColorPicker}
						className="colorPicker"
						name={props.name}
						rawQueryCommandValue={props.rawQueryCommandValue}
						rawExecCommand={props.rawExecCommand}
					/>
				)
			}
			<i ref={refForeColorPickerAction} className={props.className + " action"}></i>
		</Fragment>
	)
}

function EditorColorPicker(props) {
	return(
		<div
			ref={props.rf}
			className={props.className}
			onClick={
				e => {
				if(!e.nativeEvent.canceler){
					e.nativeEvent.canceler = [];
				}
				e.nativeEvent.canceler.push(props.rf.current)
				}
			}
		>
			<Colorable
				name={props.name}
				rawQueryCommandValue={props.rawQueryCommandValue}
				rawExecCommand={props.rawExecCommand}
			/>
		</div>
	)
}

function UrlModal(props){
	const [reset, setReset] = React.useState(false);

	let [state, onChange] = useLocalStore({
		url: props.anchorData.url,
		openNew: props.anchorData.openNew,
	}, [reset]);

	React.useEffect(() => {
		return () => {
			setReset(true);
		}
	}, [])

	return(
		<div className="urlModal" ref={props.rf} onClick={e => {
			// naoufal: needed for toggle4 , lets talke about this later
			if(!e.nativeEvent.canceler){
				e.nativeEvent.canceler = [];
			}
			e.nativeEvent.canceler.push(props.rf.current)
		}} >
			<FormGroup className="linkForm" label="Link to">
				<InputComponent value={state.url} name={'url'} onChange={onChange} placeholder="https://"/>
			</FormGroup>
			<CheckboxComponent label="Open link in new tab" checked={state.openNew} name={'openNew'} onChange={onChange} />
			<div className="urlBtns">
				<Button
					children="Done"
					disabled={state.url === props.anchorData.url && state.openNew === props.anchorData.openNew}
					primary
					onClick={
						() => {
							if(props.anchorData.url) {
						    let range = props.document.createRange();
							  range.selectNode(props.anchorData.anchor);
							  let sel = props.document.getSelection();
							  sel.removeAllRanges();
							  sel.addRange(range);
							  props.rawExecCommand("delete", null);
							}
							let selection = props.document.getSelection().toString();
					   	props.rawExecCommand(
					   		'insertHTML',
					   		'<a style="color:#0085FF" href="' + state.url + (state.openNew ? '" target="_blank"' : '') + '">' +
					   			(
					   				props.anchorData.url ?
				   					props.anchorData.anchor?.innerText :
				   					(selection ? selection : state.url)
			   					) +
					   		'</a>'
				   		);
							props.setActive(false);
						}
					}
				/>
				<Button
					children="Cancel"
					onClick={
						() => {
							props.setActive(false);
						}
					}
				/>
			</div>
		</div>
	)
}

export function Colorable(props) {
	let [value, setValue] = React.useState(
		function () {
			let value = props.rawQueryCommandValue(props.name);
			if("rgba(0, 0, 0, 0)" === value){
				return undefined;
			}
			return value;
		}
	);
	return (
		<NativeColorPicker
			value={value}
			onChange={(value) => {
				setValue(value);
				if(value){
					props.rawExecCommand(props.name, color(value));
				} else {
					props.rawExecCommand('removeFormat', props.name);
				}
			}}
		/>
	)
}


// we removed Modal.Wrapper
// function ModalVideo(props) {
// 	var modalState = Modal.useModalState();
// 	return (
// 		<React.Fragment>
// 			<props.toggler.type {...props.toggler.props} onClick={modalState[1]} />
// 			<Modal.Wrapper {...props} component={ModalVideoContent} state={modalState} />
// 		</React.Fragment>
// 	)
// }

function ModalVideoContent(props) {
	const api = useApi();
	const [state, onChange] = useLocalStore({
		embed: '',
	})

	function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11) ?
    	match[2] :
    	null;
	}

	return (
		<Modal close={props.state[2]} >
			<div className={styles.ModalVideo}>
				<Modal.Title>
					Add Video
					<i className="icon-cancel-music" onClick={props.close}/>
				</Modal.Title>
				<Modal.Body className="modalBody" >
					<FormGroup label="Video embed code or YouTube/Vimeo link">
						<TextAreaComponent
							className="textArea"
							name="embed"
							value={state.embed}
							onChange={onChange}
						/>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer className="modalFooter" >
					<Button className="cancelButton" onClick={props.close} >Cancel</Button>
					<Button
						primary
						disabled={!state.embed}
						children="Add"
						onClick={
							() => {
								if(state.embed.includes('<iframe')){
									props.rawExecCommand('insertHTML', state.embed);
								} else {
									props.rawExecCommand(
										'insertHTML',
										'<br/><div width="100%" class="resizable"><div class="resizeContainer"><iframe frameborder="0" class="video" allowfullscreen src="//www.youtube.com/embed/' + getId(state.embed) + '"/></div></div><br/>'
									);
								}
								props.close();
							}
						}
					/>
				</Modal.Footer>
			</div>
		</Modal>
	)
}