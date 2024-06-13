import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import './Tank.css';
import rasm1 from '../images/slide1.svg';
import rasm2 from '../images/slide2.svg';
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import t1 from '../images/sv1.svg';
import t2 from '../images/sv2.svg';
import t3 from '../images/sv3.svg';
import t4 from '../images/sv4.svg';
import t5 from '../images/sv5.svg';
import v1 from '../images/v1.svg';
import v2 from '../images/v2.svg';
import v3 from '../images/v3.svg';
import v4 from '../images/v4.svg';
import v5 from '../images/v5.svg';

const Tank = () => {
  return (
    <div className="Tank">
      <div className="container">
        <div className="tank_title">
          <div className="tank_left w-100">
            <p className='tank_color fw-bold'>Только в АВТОРУСЬ!</p>
            <h3 className='fw-bold'>TANK 300</h3>
            <h4>Выгода по TRADE-IN <br />ДO 450 000 ₽ </h4>
            <div className="tank_button">
              <button className='btn_tank1 btn btn'>
                Узнать стоимость по акции
              </button>
              <button className='btn_tank btn btn'>Тест-драйв</button>
              <button className='btn_tank btn btn'>Рассчитать кредит</button>
            </div>
          </div>
          <div className="tank_right w-100">
            <Swiper
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={rasm1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm2} alt="" />
              </SwiperSlide>
              <SwiperSlide>  <img src={rasm1} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={rasm2} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={rasm2} alt="" /></SwiperSlide>
            
            </Swiper>
          </div>
        </div>
        <ul className="list-unstyled d-flex align-items-center justify-content-between gap-3">
        <li className='tank_list'>
        <p className='iconka'><BsFileEarmarkCodeFill size={24} /></p>
        <p>Автомобили в наличии <br />с ПТС</p>
        </li>
        <li className='tank_list'>
        <p className='iconka'><IoShieldCheckmarkOutline size={24} /></p>
        <p>Сервисная поддержка <br />до 5 лет / 150 000 км</p>
        </li>
        <li className='tank_list'>
        <p className='iconka'><FaMedal  size={24}/></p>
        <p>Улучшим любое <br />предложение</p>
        </li>
        <li className='tank_list'>
        <p className='iconka'><IoSettingsOutline size={24} /></p>
        <p>Кредит 0,01%</p>
        </li>
        </ul>
        <ul className="tanklar d-flex align-items-center justify-content-between list-unstyled gap-3 ">
            <li>
                <img className='mw-100' src={t1} alt="" />
            </li>
            <li> <img className='mw-100' src={t2} alt="" /></li>
            <li> <img className='mw-100' src={t3} alt="" /></li>
            <li> <img className='mw-100' src={t4} alt="" /></li>
            <li> <img className='mw-100' src={t5} alt="" /></li>
        </ul>
        <div className="tank_title">
          <div className="tank_left w-100">
          <Swiper
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={rasm2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm1} alt="" />
              </SwiperSlide>
              <SwiperSlide>  <img src={rasm2} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={rasm1} alt="" /></SwiperSlide>
              <SwiperSlide> <img src={rasm2} alt="" /></SwiperSlide>
            
            </Swiper>
          </div>
          <div className="tank_right w-100 text-white">
          <p className='tank_color fw-bold'>Только в АВТОРУСЬ!</p>
            <h3 className='fw-bold'>TANK 300</h3>
            <h4>Выгода по TRADE-IN <br />ДO 450 000 ₽ </h4>
            <div className="tank_button">
              <button className='btn_tank1 btn btn'>
                Узнать стоимость по акции
              </button>
              <button className='btn_tank btn btn'>Тест-драйв</button>
              <button className='btn_tank btn btn'>Рассчитать кредит</button>
            </div>
          </div>
        </div>
        <ul className="list-unstyled d-flex align-items-center justify-content-between gap-3">
        <li className='tank_list'>
        <p className='iconka'><BsFileEarmarkCodeFill size={24} /></p>
        <p>Автомобили в наличии <br />с ПТС</p>
        </li>
        <li className='tank_list'>
        <p className='iconka'><IoShieldCheckmarkOutline size={24} /></p>
        <p>Сервисная поддержка <br />до 5 лет / 150 000 км</p>
        </li>
        <li className='tank_list'>
        <p className='iconka'><FaMedal  size={24}/></p>
        <p>Улучшим любое <br />предложение</p>
        </li>
        <li className='tank_list'>
        <p className='iconka'><IoSettingsOutline size={24} /></p>
        <p>Кредит 0,01%</p>
        </li>
        </ul>
        <ul className="tanklar d-flex align-items-center justify-content-between list-unstyled gap-3 ">
            <li>
                <img className='mw-100' src={v1} alt="" />
            </li>
            <li> <img className='mw-100' src={v2} alt="" /></li>
            <li> <img className='mw-100' src={v3} alt="" /></li>
            <li> <img className='mw-100' src={v4} alt="" /></li>
            <li> <img className='mw-100' src={v5} alt="" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Tank;
