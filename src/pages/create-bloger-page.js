import React from 'react'
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const CreateBlogerPage = ({ menuItemsLink }) => {

    return (
        <div>
            <div className='container'>
                <div  className='row'>
                    <div className='col-12'>
                        <h1>А кто у нас тут новый блогер?</h1>
                        <p>Давай-ка заполним эти поля. Будь аккуратен и вводи информацию корректно, иначе подборку коллегам будет сделать несколько трубнее!</p>
                        <form>
                            <input type='text' placeholder='Имя и фамилия блогера в реальной жизни'/>
                            <input type='text' placeholder='* Название основного канала'/>
                            <h5>Соцсети</h5>
                            <input type='text' placeholder='Instagram'/>
                            <input type='text' placeholder='Youtube'/>
                            <input type='text' placeholder='Другие соцсети (Vk, Twitch, TicTok, Likee, etc.)'/>
                            <p>Как минимум одну соц сеть нужно заполнить обязательно!</p>
                            <h5>Тэги</h5>
                            <textarea placeholder='Внятная и краткая подсказка, как их корректно вводить, чтобы реализовать правильное распределение по кластерам' rows={10} cols={100} />
                            <p>Погодите, у меня есть <Link>ещё данные</Link>!</p>
                        </form>
                    </div>
                </div>
            </div>

            <div className='bg-light'>
                <div className='container '>
                    <div  className='row'>
                        <div className='col-12'>
                            <form>
                                <h5>Контактная иформация</h5>
                                <input type='text' placeholder='Email'/>
                                <input type='text' placeholder=''/>
                                <input type='text' placeholder='Телефон'/>
                                <input type='text' placeholder='Vk ID'/>
                                <h5>Статистика</h5>
                                <input type='text' placeholder='Link на скриншоты со статистикой' />
                                <h5>Охват Instagram</h5>
                                <input type='text' placeholder='Пост' />
                                <input type='text' placeholder='Story' />
                                <p>Просмотры Youtube подгружаются при наличии ссылки на канал в профиле</p>
                                <h5>Стоимость (₽)</h5>
                                <h6>Instagram</h6>
                                <input type='text' placeholder='Пост' />
                                <input type='text' placeholder='Story' />
                                <h6>Youtube</h6>
                                <input type='text' placeholder='Интеграция' />
                                <input type='text' placeholder='Эксклюзив' />
                                <h5>Доп. инфо</h5>
                                <input type='text' placeholder='' />
                                <p>Дата обновления стоимостей подгружается автоматически.</p>
                                <h5>Опыт взаимодействия</h5>
                                <input type='text' placeholder='Продукт' />
                                <textarea placeholder='Оставить комментарий... (Привер: не работает с табачкой; долго отвечает; ответственный и т.д.)' rows={10} cols={100} />
                                <p>Репутационный риск</p>
                                <div className='form-check'>
                                    <input type="radio" className="form-check-input" id={'pages-1'} name='pages' value='Да' />
                                    <label className="form-check-label" htmlFor={'pages-1'} >Да</label>
                                </div>
                                <div className='form-check'>
                                    <input type="radio" className="form-check-input" id={'pages-2'} name='pages' value='Нет' />
                                    <label className="form-check-label" htmlFor={'pages-2'} >Нет</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div  className='row'>
                    <div className='col-12'>
                        <Link>Добавить в базу</Link>
                    </div>
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

export default connect(mapStateToProps)(CreateBlogerPage);