import React, { useState } from 'react';
import icons from '../images/tankicon.svg';
import { CiLocationOn, CiSettings } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_title d-flex gap-4">
          <div className="nav-img">
            <img src={icons} alt="bizning logomiz" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <GiHamburgerMenu size={24} />
          </div>
          <div className={`lists ${isOpen ? 'open' : ''}`}>
            <ul className="list_item">
              <li className="nav_item d-flex align-items-center gap-2">
                <p className="iconka"><CiLocationOn size={18} /></p>
                <p className="text-secondary">Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)</p>
              </li>
              <li className="nav-items d-flex align-items-center gap-5">
                <div className="text d-flex align-items-center gap-2">
                  <p className="iconka"><CiSettings size={18} /></p>
                  <p>Записаться на сервис</p>
                </div>
                <div className="text2 d-flex align-items-center gap-2">
                  <p className="iconka"><MdOutlineSpeed size={18} /></p>
                  <p>Тест-драйв</p>
                </div>
              </li>
            </ul>

            <ul className="nav_class list-unstyled">
              <li>
                <div className="nav_text d-flex align-items-center gap-3">
                  <h3>АВТОРУСЬ TANK</h3>
                  <p className="pt-3 text-secondary">Официальный дилер</p>
                </div>
              </li>
              <li className="d-flex align-items-center gap-5">
                <div className="nav_texts">
                  <h4>+7 (999) 999-99-99</h4>
                  <p className="psart text-secondary">Мы на связи</p>
                </div>
                <button className="navbtn btn mb-2">Заказать звонок</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
