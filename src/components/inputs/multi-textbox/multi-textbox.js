import React from 'react'
import {Input} from "@material-ui/core/index";

const MultiTextBox = ({id, name}) => {
    return (
        <Input
            type='text'
            itemID={name + '-' + id}
            placeholder={name} id={id}
            className='MuiInput-input' />
    )
};

export default MultiTextBox;