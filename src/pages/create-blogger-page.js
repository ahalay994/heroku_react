import React, {Suspense} from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Input, OutlinedInput } from '@material-ui/core';
import MultiTextBox from "../components/inputs/multi-textbox";
import './pages.css'
import {Button} from "react-bootstrap";
import ChipField from "../components/inputs/chip-field";
import SelectDropdown from "../components/inputs/select-dropdown";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { database } from "../config/firebase";
import firebase from "../config/firebase"
import Add from "../functions/add";

let length = [1,1,1];

const socialName = [
    'Instagram',
    'Youtube',
    'Другие соцсети (Vk, Twitch, TicTok, Likee, etc.)',
    'Оставить комментарий',
    'Link на NDA (при наличии)',
    'Клиент',
    'Продукт',
    'Оставить комментарий',
];

const names = [
    '#liver Hansen',
    '#Van Henry',
    '#April Tucker',
    '#Ralph Hubbard',
    '#Omar Alexander',
    '#Carlos Abbott',
    '#Miriam Wagner',
    '#Bradley Wilkerson',
    '#Virginia Andrews',
    '#Kelly Snyder',
];

class CreateBloggerPage extends React.Component {

    state = {
        components: {},
        toggleOpen: false,
        toggleClass: '',
        // blogger's fields
        name: '',
        chanel: ''
    };

    componentWillMount(): void {
        let obj = {};
        socialName.map((item, idx) => {
            obj[item] = [{id: idx, name: socialName[idx]}];
        });
        this.setState({
            components: obj
        });
    }

    addChild = (id) => {
        let state =  this.state.components;
        state[socialName[id]] = state[socialName[id]].concat([{ id:length[id]++, name: socialName[id]}]);

        this.setState({
            components: state
        });
    };
    addChildInst = () => {this.addChild(0)};
    addChildYoutube = () => {this.addChild(1)};
    addChildOther = () => {this.addChild(2)};

    onToggleOpen = () => {
        let toggleState = this.state.toggleOpen;
        if (toggleState === true) {
            this.setState({
                toggleOpen: !this.state.toggleOpen,
                toggleClass: ''
            });
        }
        else {
            this.setState({
                toggleOpen: !this.state.toggleOpen,
                toggleClass: 'toggle-open'
            });
        }
        // Add(1, this.state.name, this.state.chanel);
        // console.log(firebase.database().get());
    };

    onChangeName = e => {
        this.setState({
            name: e.target.value
        });
    };
    onChangeChanel = e => {
        this.setState({
            chanel: e.target.value
        });
    };

    render() {
        const { components } = this.state;
        return (
                <div>
                    <form>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <h1>А кто у нас тут новый блогер?</h1>
                                <p>Давай-ка заполним эти поля. Будь аккуратен и вводи информацию корректно, иначе
                                    подборку коллегам будет сделать несколько трубнее!</p>

                                    <div className='Main-information'>
                                        <Input
                                            type='text'
                                            placeholder='Имя и фамилия блогера в реальной жизни'
                                            className='MuiInput-input'
                                            onChange={this.onChangeName}/>
                                        <Input
                                            type='url'
                                            placeholder='Название основного канала'
                                            className='MuiInput-input'
                                            required={true}
                                            onChange={this.onChangeChanel}/>
                                    </div>

                                    <div className='Social-Networks'>
                                        <h5>Соцсети</h5>
                                        <div className='Instagram-fields'>
                                        {
                                            components[socialName[0]].map((item) => (
                                                <MultiTextBox key={item.id} name={item.name} />
                                            ))
                                        }
                                            <Link onClick={this.addChildInst} to={() => {return 0}}>Добавить</Link>
                                        </div>
                                        <div className='Youtube-fields'>
                                            {
                                                components[socialName[1]].map((item) => (
                                                    <MultiTextBox key={item.id} name={item.name} />
                                                ))
                                            }
                                            <Link onClick={this.addChildYoutube} to={() => { return 0 }}>Добавить</Link>
                                        </div>
                                        <div className='Other-fields'>
                                            {
                                                components[socialName[2]].map((item) => (
                                                    <MultiTextBox key={item.id} name={item.name} />
                                                ))
                                            }
                                            <Link onClick={this.addChildOther} to={() => { return 0 }}>Добавить</Link>
                                            <p>Как минимум одну соц сеть нужно заполнить обязательно!</p>
                                        </div>
                                    </div>

                                    <h5>Тэги</h5>
                                    <ChipField names={names} />

                                    <p>Погодите, у меня есть <Link onClick={this.onToggleOpen} to={() => { return 0 }}>ещё данные</Link>!</p>
                            </div>
                        </div>
                    </div>

                    <div className={'bg-light second-block ' + this.state.toggleClass}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <form>
                                        <h5>Контактная иформация</h5>
                                        <Input type='email' placeholder='Email' className='MuiInput-input' />
                                        <SelectDropdown id='region' label='Регион' list={names}/>
                                        <Input type='text' placeholder='Телефон' className='MuiInput-input' />
                                        <Input type='text' placeholder='Vk ID' className='MuiInput-input' />
                                        <h5>Статистика</h5>
                                        <Input type='text' placeholder='Link на скриншоты со статистикой' className='MuiInput-input' />
                                        <h5>Охват Instagram</h5>
                                        <Input type='text' placeholder='Пост' className='MuiInput-input' />
                                        <Input type='text' placeholder='Story' className='MuiInput-input' />
                                        <p>Просмотры Youtube подгружаются при наличии ссылки на канал в профиле</p>
                                        <h5>Стоимость (₽)</h5>
                                        <h6>Instagram</h6>
                                        <Input type='text' placeholder='Пост' className='MuiInput-input' />
                                        <Input type='text' placeholder='Story' className='MuiInput-input' />
                                        <h6>Youtube</h6>
                                        <Input type='text' placeholder='Интеграция' className='MuiInput-input' />
                                        <Input type='text' placeholder='Эксклюзив' className='MuiInput-input' />
                                        <h5>Доп. инфо</h5>
                                        <Input type='text' placeholder='' className='MuiInput-input' />
                                        <p>Дата обновления стоимостей подгружается автоматически.</p>
                                        <h5>Опыт взаимодействия</h5>
                                        <Input type='text' placeholder='Продукт' className='MuiInput-input'/>
                                        <TextareaAutosize aria-label="minimum height" rows={10} cols={100} placeholder="Оставить комментарий... (Привер: не работает с табачкой; долго отвечает; ответственный и т.д.)" />
                                        <p>Репутационный риск</p>

                                        <RadioGroup aria-label="gender" name="pages">
                                            <FormControlLabel
                                                value="Да"
                                                control={<Radio color="primary" />}
                                                label="Да"
                                            />
                                            <FormControlLabel
                                                value="Нет"
                                                control={<Radio color="primary" />}
                                                label="Нет"
                                            />
                                        </RadioGroup>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <Button>Добавить в базу</Button>
                            </div>
                        </div>
                    </div>

                    </form>
                </div>
        )
        // }
    }
}

const mapStateToProps = ({ menuItemsLink }) => {
    return {
        menuItemsLink: menuItemsLink
    };
};

export default connect(mapStateToProps)(CreateBloggerPage);