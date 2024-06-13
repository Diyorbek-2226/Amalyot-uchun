import React, { useState, useEffect } from 'react';
import { PiMedalBold } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import tank1 from '../images/tank1.svg';
import tank2 from '../images/tank2.svg'
import './Times.css';

const Times = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setTime(now);
        }, 1000);

        // Component unmounted bo'lganda intervalni tozalash
        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (unit) => unit.toString().padStart(2, '0');

    return (
        <div className="Times">
            <div className="container">
                <ul className='times_list'>
                    <li>
                        <h3>
                            Срок действия <br />спецпредложения:
                        </h3>
                    </li>
                    <li>
                        <div className="time-card">
                            <div className="time-border">
                                <span className="days">{formatTime(time.getDate())}</span>
                                <p>дня</p>
                            </div>
                            <h1>:</h1>
                            <div className="time-border">
                            <span className="hours">{formatTime(time.getHours())}</span> 
                            <p>часов</p>
                            </div>
                            <h1>:</h1>                          
                               <div className="time-border">
                               <span className="minutes">{formatTime(time.getMinutes())}</span>                                <p>минут</p>
                               </div>
                               <h1>:</h1>
                            <div className="time-border">
                            <span className="seconds">{formatTime(time.getSeconds())}</span>
                            <p>секунд</p>
                            </div>
                            </div>
                    </li>
                    <li>
                        <button className='navbtn btn btn w-100'>Узнать цену с выгодами</button>
                    </li>
                </ul>
                <ul className="list-unstyled d-flex align-items-center justify-content-between gap-3 py-5">
                    <li className='elemet_times d-flex  gap-2'>
                        <p className='logo text-white'><PiMedalBold size={30} /></p>
                        <div className="times-text">
                            <h5>
                            Официальный дилер
                            </h5>
                            <p>Гарантируем высокое качество <br />обслуживания.</p>
                        </div>
                    </li>
                    <li className='elemet_times d-flex  gap-2'>
                        <p className='logo text-white'><IoMdTime size={30} /></p>
                        <div className="times-text"> 
                            <h5>
                            ПОКУПКА АВТО ЗА 1 ДЕНЬ
                            </h5>
                            <p>Удобный  покупки, включая <br /> оформление всех документов.</p>
                        </div>
                     
                    </li>
                    <li className='elemet_times d-flex  gap-2 '>
                        <p className='logo text-white'><BsFillMenuButtonWideFill size={28} /></p>
                        <div className="times-text">
                            <h5>
                            ВСЕ КОМПЛЕКТАЦИИ В НАЛИЧИИ
                            </h5>
                            <p>Широкий выбор комплектаций, <br /> с полным пакетом документов</p>
                        </div>
                    </li>
                   
                </ul>
                <div className="times_text_item text-center text-white">
                    <h2 className='fw-bold'>ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ</h2>
                    <h2 className='ps-5 fw-bold'> ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100 000 ₽</h2>
                    <ul className="tank-times list-unstyled d-flex gap-3 py-5 ">
                        <li>
                            <img src={tank1} alt="tank-1 rasmi" />
                            <p>TANK 300</p>
                        </li>
                        <li>
                            <img src={tank2} alt="tank-1 rasmi" />
                            <p>TANK 500</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Times;
