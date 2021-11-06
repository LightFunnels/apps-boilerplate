import React from 'react';
import {createPortal} from 'react-dom'
import hotkeys from 'hotkeys-js';

import styles from './modal.scss';

const modalRoot = document.getElementById('modals');

export function Modal(props) {
  return !(props.active === false) ? (
    createPortal(
      <SubmodalContent {...props} />,
      modalRoot
    )
  ) : null;
}


export function SubmodalContent(props) {
  React.useEffect(
    function () {
      if(!props.close){
        return;
      }
      hotkeys(
        'escape',
        'all',
        function (event) {
          props.close();
        }
      );
    },
    []
  );
  return (
    <div className={styles.modal + ' ' + (props.className || '')} >
      <div className="overlay" onClick={props.close} />
      <props.children.type {...props.children.props} className={(props.children.props.className || '') + ' ' + styles.contentWrapper} />
    </div>
  )
}

// Modal.Wrapper = function (props) {
//   return (
//     props.state[0] ? (
//       <props.component {...props} close={props.state[2]} />
//     ) : null
//   )
// }

Modal.useModalState = function(initState: boolean = false) {

  let [s, ss] = React.useState(initState);

  return [
    s,
    function open () {ss(true)},
    function close () {ss(false)}
  ] as const;
}

Modal.Title = function (props) {
  return (
    <div {...props} className={"modal-title " + (props.className || '')} />
  )
}

Modal.Footer = function (props) {
  return (
    <div {...props} className={'modalFooter' + (props.className ? ' ' + props.className : '')} />
  )
}

Modal.Body = function (props) {
  return (
    <div {...props} className={`${styles.modalBody} ${props.className || ''}`}  />
  )
}

Modal.modalRoot = modalRoot;