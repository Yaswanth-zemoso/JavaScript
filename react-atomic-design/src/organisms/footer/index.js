/* @flow */
import * as React from 'react'
import styles from './style.css'



type Props = {
  children?: React.Node,
  className?: string,
  image: string,
}

const Footer = (props: Props): React.Element<*> => (
  <div
    class="footer"
  >
  
  </div>
)

Footer.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Footer;