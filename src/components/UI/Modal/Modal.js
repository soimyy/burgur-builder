import React from 'react'

import Aux from '../../../hoc/Aux'
import BackDrop from '../Backdrop/Backdrop'
import styles from './Modal.module.css'

const Modal = (props) => (
    
    <Aux>
        <BackDrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacit: props.show ? '1' : '0'
                }}>
            {props.children}
        </div>   
    </Aux>
)

export default Modal
