import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      alert('xabar muvofaqiyatli yuborildi.');
      return;
    }
    if (!consent) {
      alert('toliq kiriting sizda xatolik bor.');
      return;
    }

    const botToken = '7122251448:AAE4etYRV9AK0V2GgNlfGk2SwQAT-7dfKsc';
    const chatId = '6206390828';
    const message = `Tank.uz saytidan xabar yuborildi:\nPhone: ${phone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('xabar yuborildi ');
        setPhone('');
        setConsent(false);
      } else {
        alert('maydoni toliq kiriting.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('////');
    }
  };

  return (
    <div className="Contact">
      <div className="container">
        <div className="contact_title">
          <h3 className="fw-bold">Оставьте заявку <br />на кредит</h3>
          <p className="text-secondary">и получите одобрение за 1 день!</p>
          <form className="send_contact d-flex gap-4 align-items-center py-4" onSubmit={handleSubmit}>
            <div className="contact_inputs pt-1">
              <label className="text_secondary" htmlFor="phone py-3">Телефон</label> <br />
              <input
                id="phone"
                placeholder="+7 (_)__"
                className="inpElement w-100 bg-dark"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              /> <br />
              <span className="d-flex align-items-center gap-2">
                <input
                  type="checkbox" className='bg-dark'
                  checked={consent}
                  onChange={() => setConsent(!consent)}
                /> 
                <p className="pt-3 text-secondary">Согласен на обработку персональных данных.</p>
              </span>
            </div>
            <button type="submit" className="btn btn navbtn mb-4">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
