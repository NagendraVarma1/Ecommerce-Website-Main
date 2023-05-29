import React, { Fragment } from "react"
// import { Container } from "react-bootstrap"
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
    return (
    <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
    )
}

const Modal = (props) => {
    return (
       <Fragment>
        <ModalOverlay>{props.children}</ModalOverlay>
       </Fragment>
    )
}

export default Modal;