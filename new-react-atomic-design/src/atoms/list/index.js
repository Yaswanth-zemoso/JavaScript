/* @flow */
import React, { useState }   from 'react';
import { SvgIcon } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchRounded from  '@mui/icons-material/SearchRounded';
import Menu from '../menu';

import styles from './style.css'

type Props = {
    menuitems: Array
}




const List = (props: Props): React.Element<*> => {
 
const [menu, setMenu] = useState(false);
    
    return(
       <div class="header-content">
            <div class="header-content__section header-content__section--left">
                <div class="header-menu header-menu--search search">
                    <div class="search__header">
                        <button class="search__trigger">
                        <SearchRounded />
                        </button> 
                    </div> 
                    <div class="header-menu__menu-wrapper"></div>
                </div>
                <div class="discover-menu header-menu header-menu--full header-menu--discover">
                    <a href="javascript:void(0)" onClick={() => setMenu(menu => !menu)} class="header-menu__trigger header-link header-link--discover header-link--main">
                        <span >Explore</span>
                        <ExpandMoreOutlinedIcon />

                    </a>
                    {menu && <Menu />}
                </div> 
                <a href="/en/nc/library" class="header-content__link header-content__link--library header-link header-link--library header-link--main">
                    <span>My Library</span> 
                </a>
                <a href="/en/nc/highlights" class="header-content__link header-content__link--highlights header-link header-link--highlights header-link--main">
                    <span>Highlights</span> 
                </a>
            </div> 
            <div class="header-content__section header-content__section--right">
                    
                <div class="user-menu header-menu header-menu--right header-menu--user-menu">
                    <button class="header-menu__trigger header-link header-link--user-menu header-link--main">
                        <span>Account</span> 
                        <SvgIcon viewBox="0 0 24 24" class="header-link__menu-sprite sprite-vue sprite-vue--app sprite-vue--arrow-down-small">
                            <use xlinkhref="#app/arrow-down-small"></use>
                        </SvgIcon>
                    </button>
                    <div class="header-menu__menu-wrapper">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

List.defaultProps = {
  menuItems: []
}

export default List;
