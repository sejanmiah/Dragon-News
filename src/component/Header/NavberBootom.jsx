import React from 'react';
import { NavLink } from 'react-router';

const NavberBootom = () => {
    return (
        <div className='flex justify-between items-center text-[#706F6F]'>
            <div></div>
            <div className="nav flex gap-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-1">
                <img src="https://i.postimg.cc/ZnWkDN6k/user.png" alt="" />
                <button className='btn bg-[#403F3F] text-white px-10 rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default NavberBootom;