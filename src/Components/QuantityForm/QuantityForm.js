import React from "react";

const QuantityForm = (props) => {
    
    return (
        <div className="my-2 px-3 py-2" style={{border: '2px solid rgb(29, 50, 245)',borderRadius: '3px', width: '45px', height: '45px', textAlign:'center'}}>
            <h1 style={{fontSize: 'large'}}>{props.itemQuantity}</h1>
        </div>
    )
}

export default QuantityForm;