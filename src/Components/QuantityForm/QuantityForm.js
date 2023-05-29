import React from "react";
import { Form } from "react-bootstrap";

const QuantityForm = () => {
    return (
        <Form>
            <Form.Group className="p-3" >
                <Form.Control type="number" style={{width: '50px'}} defaultValue={1}/>
            </Form.Group>
        </Form>
    )
}

export default QuantityForm;