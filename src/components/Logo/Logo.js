import React from 'react'

import burgerLogo from '../../assets/image/original.png'
import styles from './Logo.module.css'

const Logo = (props) => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="MyburgerLogo"/>
    </div>
)

export default Logo