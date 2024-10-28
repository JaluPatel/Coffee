import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Home/About';
import Menu from './Home/Menu';
import Testimonials from './Home/Testimonials';
import Gallery1 from './Home/Gallery1';
import Main from './Home/Main';
import Header from './Header';
import Contact from './Home/Contact';
import Footer from './Footer';
import Login from './Home/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />

    <Routes>


      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/gallery1' element={<Gallery1 />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
    <Footer />
  </BrowserRouter>




);


