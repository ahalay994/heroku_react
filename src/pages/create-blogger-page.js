import React, {Suspense} from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Input, OutlinedInput } from '@material-ui/core';
import MultiTextBox from "../components/multi-textbox";
import './pages.css'
import {Button} from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import Select from "@material-ui/core/Select";
import ChipField from "../components/chip-field";

let lenght = [1,1,1];

const socialName = [
    'Instagram',
    'Youtube',
    'Другие соцсети (Vk, Twitch, TicTok, Likee, etc.)'
];

class CreateBloggerPage extends React.Component {

    state = {
        components: {}

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
        state[socialName[id]] = state[socialName[id]].concat([{ id:lenght[id]++, name: socialName[id]}]);

        this.setState({
            components: state
        });
    };

    addChildInst = () => {this.addChild(0)};
    addChildYoutube = () => {this.addChild(1)};
    addChildOther = () => {this.addChild(2)};


    render() {
        const { components } = this.state;
        return (
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <h1>А кто у нас тут новый блогер?</h1>
                                <p>Давай-ка заполним эти поля. Будь аккуратен и вводи информацию корректно, иначе
                                    подборку коллегам будет сделать несколько трубнее!</p>
                                <form>
                                    <div className='Main-information'>
                                        <Input
                                            type='text'
                                            placeholder='Имя и фамилия блогера в реальной жизни'
                                            className='MuiInput-input'/>
                                        <Input
                                            type='text'
                                            placeholder='Название основного канала'
                                            className='MuiInput-input'
                                            required={true}/>
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
                                    <ChipField />

                                    <p>Погодите, у меня есть <Link to={() => {
                                        return 0
                                    }}>ещё данные</Link>!</p>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='bg-light'>
                        <div className='container '>
                            <div className='row'>
                                <div className='col-12'>
                                    <form>
                                        <h5>Контактная иформация</h5>
                                        <Input type='email' placeholder='Email' className='MuiInput-input' />
                                        <Input type='text' placeholder='' className='MuiInput-input' />
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
                                        <textarea
                                            placeholder='Оставить комментарий... (Привер: не работает с табачкой; долго отвечает; ответственный и т.д.)'
                                            rows={10} cols={100}/>
                                        <p>Репутационный риск</p>
                                        <div className='form-check'>
                                            <input type="radio" className="form-check-input" id={'pages-1'}
                                                   name='pages' value='Да'/>
                                            <label className="form-check-label" htmlFor={'pages-1'}>Да</label>
                                        </div>
                                        <div className='form-check'>
                                            <input type="radio" className="form-check-input" id={'pages-2'}
                                                   name='pages' value='Нет'/>
                                            <label className="form-check-label" htmlFor={'pages-2'}>Нет</label>
                                        </div>
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
                </div>
        )
        // }
    }
}

// const CreateBlogerPage = ({ menuItemsLink }) => {

// return (
//     <div>
//         <div className='container'>
//             <div  className='row'>
//                 <div className='col-12'>
//                     <h1>А кто у нас тут новый блогер?</h1>
//                     <p>Давай-ка заполним эти поля. Будь аккуратен и вводи информацию корректно, иначе подборку коллегам будет сделать несколько трубнее!</p>
//                     <form>
//                         <input type='text' placeholder='Имя и фамилия блогера в реальной жизни'/>
//                         <input type='text' placeholder='* Название основного канала'/>
//                         <h5>Соцсети</h5>
//                         <form>
//                             <input type='text' placeholder='Instagram'/>
//                             {
//                                 this.state.components.map((item) => (
//                                     <MultiTextbox key={item.id} name={item.name} />
//                                 ))
//                             }
//                             <Link onClick={addNewField} to={() => {return 0}}>Добавить</Link>
//                         </form>
//                         <input type='text' placeholder='Youtube'/>
//                         <input type='text' placeholder='Другие соцсети (Vk, Twitch, TicTok, Likee, etc.)'/>
//                         <p>Как минимум одну соц сеть нужно заполнить обязательно!</p>
//                         <h5>Тэги</h5>
//                         <textarea placeholder='Внятная и краткая подсказка, как их корректно вводить, чтобы реализовать правильное распределение по кластерам' rows={10} cols={100} />
//                         <p>Погодите, у меня есть <Link to={() => {return 0}}>ещё данные</Link>!</p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//
//         <div className='bg-light'>
//             <div className='container '>
//                 <div  className='row'>
//                     <div className='col-12'>
//                         <form>
//                             <h5>Контактная иформация</h5>
//                             <input type='text' placeholder='Email'/>
//                             <input type='text' placeholder=''/>
//                             <input type='text' placeholder='Телефон'/>
//                             <input type='text' placeholder='Vk ID'/>
//                             <h5>Статистика</h5>
//                             <input type='text' placeholder='Link на скриншоты со статистикой' />
//                             <h5>Охват Instagram</h5>
//                             <input type='text' placeholder='Пост' />
//                             <input type='text' placeholder='Story' />
//                             <p>Просмотры Youtube подгружаются при наличии ссылки на канал в профиле</p>
//                             <h5>Стоимость (₽)</h5>
//                             <h6>Instagram</h6>
//                             <input type='text' placeholder='Пост' />
//                             <input type='text' placeholder='Story' />
//                             <h6>Youtube</h6>
//                             <input type='text' placeholder='Интеграция' />
//                             <input type='text' placeholder='Эксклюзив' />
//                             <h5>Доп. инфо</h5>
//                             <input type='text' placeholder='' />
//                             <p>Дата обновления стоимостей подгружается автоматически.</p>
//                             <h5>Опыт взаимодействия</h5>
//                             <input type='text' placeholder='Продукт' />
//                             <textarea placeholder='Оставить комментарий... (Привер: не работает с табачкой; долго отвечает; ответственный и т.д.)' rows={10} cols={100} />
//                             <p>Репутационный риск</p>
//                             <div className='form-check'>
//                                 <input type="radio" className="form-check-input" id={'pages-1'} name='pages' value='Да' />
//                                 <label className="form-check-label" htmlFor={'pages-1'} >Да</label>
//                             </div>
//                             <div className='form-check'>
//                                 <input type="radio" className="form-check-input" id={'pages-2'} name='pages' value='Нет' />
//                                 <label className="form-check-label" htmlFor={'pages-2'} >Нет</label>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//         <div className='container'>
//             <div  className='row'>
//                 <div className='col-12'>
//                     <Link>Добавить в базу</Link>
//                 </div>
//             </div>
//         </div>
//     </div>
//
// )
// };

const mapStateToProps = ({ menuItemsLink }) => {
    return {
        menuItemsLink: menuItemsLink
    };
};

export default connect(mapStateToProps)(CreateBloggerPage);