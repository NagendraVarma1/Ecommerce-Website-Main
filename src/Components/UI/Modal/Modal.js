import React, { Fragment } from "react"
// import { Container } from "react-bootstrap"
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const ModalOverlay = (props) => {
    return (
    <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
       <Fragment>
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
       </Fragment>
    )
}

export default Modal;