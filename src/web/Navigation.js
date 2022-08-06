import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Navbar from '../pages/Navbar';
import './Navigation.css';

export default function Navigation() {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}
