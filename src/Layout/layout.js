// components/Layout.js
import React from 'react';
import Menu from "./Menu"
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    return (
        <div >
            <div>
                <Menu />
            </div>
            <div className="container mt-3">
                <Outlet /> {/* Nội dung các route con sẽ hiển thị ở đây */}
            </div>
            <div className='mt-2'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;
