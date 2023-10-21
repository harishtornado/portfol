import React from 'react'
import back from "./assets/icons/back.png";
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='container'>
            <Link to="/about">
                <div className="back_btn">
                    <img src={back} alt="left-arrow" width={20} height={20} />
                </div>
            </Link>
            <Outlet />
        </div>
    )
}

export default Layout