/* @flow */
import * as React from 'react'
import styles from './style.css'


type Props = {
  type: string
}

const Button = (props: Props): React.Element<*> => {
  
  return (
    <button class="button">
      {props.type == 'search' &&
      <svg viewBox="0 0 24 24" class="sprite-vue sprite-vue--app sprite-vue--search"><use xlinkHref="#app/search"></use></svg>}
      
    </button>
  )
}

Button.defaultProps = {
  type: ''
}

export default Button
