import React from 'react';
import styles from "./error.scss";

const label = "Something Went Wrong";

export function ErrorStripe(props: {message: string, icon?: React.ReactNode, className?: string}){
  return (
    <AlertStripeContent
      {...props}
      label={label}
      icon={props.icon || <i className="icon-Alerts-Info" />}
      error
    />
  )
}

// Alerts rendering
export function AlertStripeContent({ error, warning, info, success, ...props }: AlertStripeContentProps) {
  return(
    <div
      className={`${styles.alertStripe} ${props.theme2 ? 'theme2' : ''} ${props.className || ''} ${errorPropsToClassNames(
        error,
        warning,
        info,
        success
      )}`}
    >
      <div className="iconContentContainer">
        {
          props.icon && (
            <div className="icon-container color">
              {
                props.icon
              }
            </div>
          )
        }
        <div className="text-container">
          {
            props.label && (
              <div className="errTitle color">
                {props.label}
              </div>
            )
          }
          {
            props.message && (
              <div className={`errText ${!props.label ? 'only' : ''}`}>
                {props.message}
              </div>
            )
          }
          {
            props.bottomActions && (
              <div className="bottomActionsContainer">
                {props.bottomActions}
              </div>
            )
          }
        </div>
      </div>
      {
        props.actions ? (
          <div className="stripeActionsContainer">
            {props.actions}
          </div>
        ) : (
          (props.setClose && !props.noClose) && (
            <div
              onClick={
                (e) => {
                  if(props.setClose){
                    props.setClose(true);
                  }
                }
              }
            >
              <i className="icon-cancel-music" />
            </div>
          )
        )
      }
    </div>
  )
}

type AlertStripeContentProps = {
  className?: string

  icon?: React.ReactNode
  actions?: React.ReactNode
  error?: boolean
  success?: boolean
  warning?: boolean
  info?: boolean
  theme2?: boolean

  bottomActions?: React.ReactNode
  
  label?: React.ReactNode
  message: React.ReactNode

  setClose?: (v: boolean) => void
  noClose?: boolean
}

export function errorPropsToClassNames(error, warning, info, success) {
  return `${error ? ' error' : ''} ${warning ? ' warning' : ''} ${info ? ' info' : ''} ${success ? ' success' : ''}`;
}