import React from 'react'
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom'

const listItem = [
    'Добавить нового блогера',
    'Внести изменения в базе',
    'Подобрать идеального',
    'Порыться в подборках'
];
let checkID = -1;
let list = [];
const onClickRadioButton = (event) => { checkID = listItem.indexOf(event.currentTarget.value) };

const buttonCLick = () => {
    if (list[checkID] ) return '/' + list[checkID];
    else {}
};

const HomePage = ({ menuItemsLink }) => {
    list = menuItemsLink;

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Привет, _username_!</h1>
                    <h5>Я не сомневался, что это ты. Над чем будем работать?</h5>
                    <form>
                        {
                            listItem.map((item, index) => {
                                return (
                                    <div className='form-check' key={index}>
                                        <input type="radio" className="form-check-input" id={'pages-' + index} name='pages' value={ item } onChange={ onClickRadioButton } />
                                        <label className="form-check-label" htmlFor={'pages-' + index} >{ item }</label>
                                    </div>
                                )
                            })
                        }
                    </form>
                    <Link to={ buttonCLick }>Приступим</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({ menuItemsLink }) => {
    return {
        menuItemsLink: menuItemsLink
    };
};

export default connect(mapStateToProps)(HomePage);