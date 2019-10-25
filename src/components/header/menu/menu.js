import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const itemMenu = ['Завести нового', 'Править базу', 'Сделать подборку', 'Архив поборок'];

const Menu = ({ menuItemsLink }) => {
    return (
        <div className='collapse navbar-collapse justify-content-center'>
        {
            itemMenu.map((item, index) => {
                return (
                    <NavLink key={index} to={'/' + menuItemsLink[index]} activeClassName='active' className='nav-item nav-link'>{ item }</NavLink>
                )
            })
        }
        </div>
    );
};

const mapStateToProps = ({ menuItemsLink }) => {
    return {
        menuItemsLink: menuItemsLink
    };
};

export default connect(mapStateToProps)(Menu);