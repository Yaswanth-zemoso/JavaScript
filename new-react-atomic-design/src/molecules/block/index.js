/* @flow */
import * as React from 'react'
import Icon from '../../atoms/Icon';
import Button from '../../atoms/button';

import styles from './style.css'
import List from '../../atoms/list';



type Props = {
  children?: React.Node,
  className?: string,
  position?: string,
}

const Block = (props: Props): React.Element<*> => {
  return (
    <>
    {props.position == 'left' ?
    (<div class={props.className}>
        <Icon />
    </div> )
    :

    (
    <div class={props.className}>
        <List />
    </div>)
    }
    </>
  );
};

Block.defaultProps = {
  className: '',
  children: '',
  position: '',
}

export default Block
