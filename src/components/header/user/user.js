import React from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const User = () => {
    return (
        <DropdownButton
            alignRight
            title="Член Команды (гыгы)"
            id="dropdown-menu-align-right"
        >
            <Dropdown.Item eventKey="1">Выход</Dropdown.Item>
        </DropdownButton>
    )
};

export default User;