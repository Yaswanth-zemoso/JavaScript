/* @flow */
import * as React from 'react'

import styles from './style.css'

type Props = {
    menuitems: Array
}

const List = (props: Props): React.Element<*> => {
 
    const list = props.menuitems ? props.menuitems : ["Explore", "My Libraray", "Heightlights"];
  
    const updatedList = list.map((listItems)=>{
        return <li>{listItems}</li>;
    });
  
    return(
        <ul class="menuitems">{updatedList}</ul>
    );
}

List.defaultProps = {
  menuItems: []
}

export default List;
