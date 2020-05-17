import React from 'react'

import styled from './Backdrop.module.css'

const BackDrop = (props) => (
    props.show ? <div className={styled.BackDrop} onClick={props.clicked}></div> : null
)

export default BackDrop