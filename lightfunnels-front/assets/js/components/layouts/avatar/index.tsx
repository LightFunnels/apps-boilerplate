import React, { Fragment } from 'react';
import styles from './avatar.scss';

type Props = {
  // src must be passed anyways
  src: string|undefined|null
  rounded?: boolean
  hasTransparent?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: (e) => void
  // avatar: any // I don't know what is this doing here
}

export function Avatar({/*avatar, */rounded, src, children, hasTransparent, ...props}: Props) {
  return (
    <div
      {...props}
      className={styles.avatar + ' ' + (rounded ? 'rounded' : '') + ' ' + (props.className||'')}
    >
      <img
        className={'placeHolder'}
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8+R8AAvcB+vBGZskAAAAASUVORK5CYII='
      />
      {
        src ? (
          <Fragment>
            {
              hasTransparent && <img className={'visualPlaceHolder'} src={require('./transparent_indicator.svg')} />
            }
            {/* TODO: add random image from hosted svgs */}
            <img src={src} className={'image'} />
          </Fragment>
        ) : (
          <i className="icon-placeholder-image"/>
        )
      }
      {children}
    </div>
  )
}