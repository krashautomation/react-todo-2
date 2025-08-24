import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

export default function Todo(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        props.onDelete();
    }

    if (show) {
        return (
            <Alert variant="primary" onClose={handleClose} dismissible className="mb-2">
                <p className="mb-0">{props.data}</p>
            </Alert>
        );
    }
    return null;
}