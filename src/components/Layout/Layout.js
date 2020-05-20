import React from 'react';

import Aux from '../../hoc/Aux'
import Toolbar from '../Navgation/Toolbar/Toolbar'
import styles from './Layout.module.css'

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={styles.main}>{props.children}</main>
    </Aux>
);

export default layout;
