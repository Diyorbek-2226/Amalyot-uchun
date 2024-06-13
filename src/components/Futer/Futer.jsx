import React from 'react';
import opacha from '../images/opacha.svg';
import './Futer.css';
import Ifreme from '../images/ifreme.svg';
import { CiSettings } from "react-icons/ci";
import { IoMdSpeedometer } from "react-icons/io";


const Futer = () => {
  return (
   <div className="Futer py-5">
    <div className="container">
        <div className="futer_title d-flex align-items-center justify-content-between">
            <div className="futer_left">
                <h3>Индивидуальное предложение <br />для корпоративных клиентов</h3>
                <button className='btn btn navbtn my-3'>
                Отправить заявку
                </button>
            </div>
            <div className="futer_light bg-dark">
                <img src={opacha} alt="" />
            </div>
        </div>
        <div className="futer_map px-2">
            <ul className=" list_futer list-unstyled d-flex align-items-center justify-content-between gap-3">
                <li>
                    <p className='text-secondary'>Адрес</p>
                    <h4>Ярославское шоссе, владение 2 В, <br />строение 3 (МКАД, 95 км)</h4>
                </li>
                <li>
                    <p className='text-secondary'>Телефон</p>
                    <h4>+7 (999) 999-99-99</h4>
                    <p className='text-secondary'>Мы на связи</p>
                </li>
                <li>
                    <p className='text-secondary'>Режим работы</p>
                    <h4>Ежедневно  <br />с 09:00 до 21:00</h4>
                </li>
                <li> <button className='btn btn navbtn'>
                Заказать звонок
                    </button></li>
            </ul>
        </div>
        <div className="futer_text_item">
<h5 className='py-3 '>
Дисклеймер 
</h5>
<p className='text-secondary'>TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом выгоды по трейд-ин 300 000 рублей. В трейд-ин принимаются автомобили с пробегом со сроком владения и регистрации (постановки на учет) в органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда TANK, Haval, Great Wall – 3 месяца) до сдачи автомобиля в трейд-ин. В качестве документов, подтверждающих срок владения сдаваемого в трейд-ин автомобиля, собственнику необходимо предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с печатью и подписью. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г.
TANK 500 за 5 349 000 руб с учетом поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации Adventure (Эдвенчер) с двигателем 3,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом прямой выгоды в 950 000 рублей. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой и действует с 01.04.2024г.</p>
        </div>
        <hr className='text-white my-5'/>
        <div className="futer_top d-flex align-items-center justify-content-between">
            <div className="futer_left_top">
<h5>АВТОРУСЬ TANK Лосиный Остров</h5>
<p className='text-secondary'>Официальный дилер</p>
<p className='py-3 text-secondary'>Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
<small className='text-secondary py-2'>Официальный дилер</small>
<p className='h5'>ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903</p>
            </div>
            <div className="futer_right_top  gap-5 pb-4">
<div className="ong">
    <h4>+7 (999) 999-99-99</h4>
    <small className='ps-5 text-secondary'>Мы на связи</small>
</div>
<div className="chap">
    <button className='btn btn navbtn'>
    Заказать звонок
    </button>
</div>
<div className="menu_futer d-flex align-items-center gap-5 pt-3 ">
    <span className='d-flex align-items-center gap-2'>
        <p className='iconka'>
        <CiSettings />
        </p>
        <p> Записаться на сервис</p>
    </span>
    <span className='d-flex align-items-center gap-2'>
        <p className='iconka'>
        <IoMdSpeedometer />
        </p>
        <p>Тест-драйв</p>
    </span>
</div>
            </div>
        </div>
<hr  className='text-white my-3 mt-5'/>
<div className="futer_bottom">
    <ul className='list-unstyled d-flex align-items-center justify-content-between'>
<li className='text-secondary'>
© 2024, АВТОРУСЬ ТАНК
</li>
<li className='d-flex align-items-center gap-3'>
    <p className='text-secondary'>Правовая информация</p>
    <p className='text-secondary'> Условия акции</p>
</li>

    </ul>
</div>
    </div>
   </div>
  )
}

export default Futer
