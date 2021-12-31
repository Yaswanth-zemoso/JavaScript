/* @flow */
import * as React from 'react'
import styles from './style.css'

import Block from '../../molecules/block'
type Props = {
  children?: React.Node,
  className?: string,
  image: string,
}

const Header = (props: Props): React.Element<*> => (
  <div
    className={props.className}
  >
    <div class="header__inner">
      <div class="header__container">
        <Block position="left" className="header_left" />
        <Block position="right" className="header_right" />
      </div>
    </div>
  </div>
)

Header.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Header

