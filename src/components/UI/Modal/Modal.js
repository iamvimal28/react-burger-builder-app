import React from 'react';
import './Modal.scss';

const modal = (props) => (
    <div className="Modal">
        {props.children}
    </div>
);

export default modal;