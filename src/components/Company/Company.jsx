import React from 'react';
import './Company.css';
import Tank from '../images/tankCard.svg';
import titlecard from '../images/titles.svg';
import { FaGift } from "react-icons/fa";
import jeep from '../images/jip.svg'


const Company = () => {
  return (
   <div className="Company">
    <div className="container">
        <div className="company_title">
            <h2 className='text-center'>
            ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ
            </h2>
            <ul className="list-unstyled d-flex align-items-center justify-content-between   py-5">
                <li className='company_select'>
                    <div className="campany_select">
                        <p className='ps-2'>Модель</p>
                        <select className='form-control bg-dark text-white' name="" id="">
                            <option value="">Tank-300</option>
                            <option value="">Tank 500</option>
                            <option value="">Tank 400</option>
                        </select>
                    </div>
                </li>
                <li className='company_select'>
                <div className="campany_select">
                        <p className='ps-2'>Комплектация</p>
                        <select className='form-control bg-dark text-white' name="" id="">
                            <option value="">Tank-300</option>
                            <option value="">Tank 500</option>
                            <option value="">Tank 400</option>
                        </select>
                    </div>
                </li>
                <li className='company_select'>
                <div className="campany_select">
                        <p className='ps-2'>Двигатель</p>
                        <select className='form-control bg-dark text-white' name="" id="">
                            <option value="">Tank-300</option>
                            <option value="">Tank 500</option>
                            <option value="">Tank 400</option>
                        </select>
                    </div>
                </li>
            </ul>
            
        </div>
        <ul className='list-unstyled'>
                <li className='tank-card d-flex align-items-center my-3'>
                    <div className="img_campany">
<img src={Tank} alt="" />
                    </div>
                    <div className="title_camp">
                        <h4>
                        TANK 300
                        </h4>
                        <p className='text-sm'>2.0 л. Бензин, Полный, Автоматическая</p>
                        <del className='h4'>3 649 000 ₽</del>
                      <div className="text_item_company d-flex gap-3 pt-4">
                      <div className="pelent d-flex  align-items-center gap-2">
                       <p className='iconka'><FaGift /></p>
                       <p className='box_contact '>Выгода по Trade 450 000 ₽ </p>
                       </div>
                       <div className="pelent d-flex  align-items-center gap-2">
                       <p className='iconka'><FaGift /></p>
                       <p className='box_contact'>Керамическое покрытие  подарок!</p>
                       </div>
                      </div>
                    </div>
                    <div className="tank_button pb-4 ">
              <button className='btn_tank1 btn btn '>
              Получить предложение
              </button>
              <button className='btn_tank btn btn '>Тест-драйв</button>
             
            </div>
                
                </li>
                <li className='tank-card d-flex align-items-center my-3'>
                    <div className="img_campany">
<img src={Tank} alt="" />
                    </div>
                    <div className="title_camp">
                        <h4>
                        TANK 300
                        </h4>
                        <p className='text-sm'>2.0 л. Бензин, Полный, Автоматическая</p>
                        <del className='h4'>3 649 000 ₽</del>
                      <div className="text_item_company d-flex gap-3 pt-4">
                      <div className="pelent d-flex  align-items-center gap-2">
                       <p className='iconka'><FaGift /></p>
                       <p className='box_contact '>Выгода по Trade 450 000 ₽ </p>
                       </div>
                       <div className="pelent d-flex  align-items-center gap-2">
                       <p className='iconka'><FaGift /></p>
                       <p className='box_contact'>Керамическое покрытие  подарок!</p>
                       </div>
                      </div>
                    </div>
                    <div className="tank_button pb-4 ">
              <button className='btn_tank1 btn btn '>
              Получить предложение
              </button>
              <button className='btn_tank btn btn '>Тест-драйв</button>
             
            </div>
                
                </li>
                <li className='tank-card d-flex align-items-center my-3'>
                    <div className="img_campany">
<img src={Tank} alt="" />
                    </div>
                    <div className="title_camp">
                        <h4>
                        TANK 300
                        </h4>
                        <p className='text-sm'>2.0 л. Бензин, Полный, Автоматическая</p>
                        <del className='h4'>3 649 000 ₽</del>
                      <div className="text_item_company d-flex gap-3 pt-4">
                      <div className="pelent d-flex  align-items-center gap-2">
                       <p className='iconka'><FaGift /></p>
                       <p className='box_contact '>Выгода по Trade 450 000 ₽ </p>
                       </div>
                       <div className="pelent d-flex  align-items-center gap-2">
                       <p className='iconka'><FaGift /></p>
                       <p className='box_contact'>Керамическое покрытие  подарок!</p>
                       </div>
                      </div>
                    </div>
                    <div className="tank_button pb-4 ">
              <button className='btn_tank1 btn btn '>
              Получить предложение
              </button>
              <button className='btn_tank btn btn '>Тест-драйв</button>
             
            </div>
                
                </li>
            </ul>
            <div className="comp_btn text-center py-5">
                <button className='btn_camp btn btn '> Загрузить еще</button>
            </div>
            <ul className="list-unstyled d-flex align-items-center justify-content-around gap-5 py-4">
                <li>
                    <img src={jeep} alt="" />
                </li>
                <li>
                    <div className="compt_text">
                        <h3>ОБМЕН ПО TRADE-IN <br />НА ВЫГОДНЫХ УСЛОВИЯХ</h3>
                        <button className='btn btn navbtn my-5'>
                        Отправить заявку  
                        </button>
                    </div>
                </li>
            </ul>
    </div>
   </div>
  )
}

export default Company
