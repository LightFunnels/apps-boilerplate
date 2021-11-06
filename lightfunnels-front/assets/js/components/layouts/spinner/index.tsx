import React from 'react';

import styles from './spinner.scss';

export function Spinner(props: {className?: string}) {
  return (
    <div className={styles.spinning + ' ' + (props.className || '')} />
  )
}