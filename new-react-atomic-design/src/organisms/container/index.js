/* @flow */
import * as React from 'react'
import styles from './style.css'

import Block from '../../molecules/block'
import { Grid } from '@mui/material'
import BookCard from '../../atoms/BookCard'
type Props = {
  children?: React.Node,
  className?: string,
  image: string,
}

const Container = (props: Props): React.Element<*> => (
  <div
    className={props.className}
  >
   <div class="middle-container">
        <div class="libraryV2">
            <div class="row libraryV2__header">
                <div class="col-xs-6 col-sm-4 libraryV2__header__section">
                <a class="js-library-v2-link libraryV2__header__link--active" data-target="libraryV2__section__reading" href="#">Currently reading</a>
                </div>

                <div class="col-xs-6 col-sm-4 libraryV2__header__section">
                <a class="js-library-v2-link libraryV2__header__link--inactive" data-target="libraryV2__section__finished" href="#">Finished</a>
                </div>
            </div>

            
            <div class="libraryV2__section__reading libraryV2__section--active">
                <div class="middle-container">
                    <div class="row">
                        <div class="col-xs-12 libraryV2__books-grid">
                        
                            <div class="card-grid">
                              <Grid container spacing={{ xs: 3, md: 3 }}>
                                    <Grid item>
                                      <BookCard />
                                    </Grid>
                                    <Grid item>
                                    <BookCard />
                                    </Grid>
                                    <Grid item>
                                    <BookCard />
                                    </Grid>
                              </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
)

Container.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Container

