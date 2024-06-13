import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';  // to'g'ri import qilish
import { Header } from './components/Header/Header';
import Times from './components/Times/Times';
import Tank from './components/Tank/Tank';
import Company from './components/Company/Company';
import Contact from './components/Contact/Contact';
import Futer from './components/Futer/Futer';

const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Times/>
      <Tank/>
      <Company/>
      <Contact/>
      <Futer/>
    </>
  );
}

export default App;
