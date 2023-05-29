import React, { Fragment } from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <Fragment>
        <Backdrop
            show={props.show}
        />
        <div
            className="Modal"
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            <div className="ModalHeader-box">
                <p className="ModalHeader-title">{props.title}</p>
                <button onClick={props.closed} className="ModalHeader-closeBtn">X</button>
            </div>
            {props.children}
        </div>
    </Fragment>
);

export default Modal;
