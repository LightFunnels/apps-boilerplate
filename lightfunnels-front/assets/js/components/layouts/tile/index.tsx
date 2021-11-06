import React from 'react';

import styles from './tile.scss';

type Props = {
  centered?: boolean
  className?: string
  onClick?: (e) => void
  icon?: React.ReactNode
  children?: React.ReactNode
  action?: React.ReactNode
}

export function Tile({ centered, className, ...props }: Props) {
  return (
    <div
    	className={`${centered ? "tile-centered" : ""} ${className || ""} ${styles.tile}`}
    	onClick={props.onClick}
  	>
      {props.icon && <div className="tile-icon">{props.icon}</div>}
      {props.children && <div className="tile-content">{props.children}</div>}
      {props.action && <div className="tile-action">{props.action}</div>}
    </div>
  );
}