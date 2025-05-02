import React from 'react';
import NavberBootom from '../component/Header/NavberBootom';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] min-h-screen'>
            <div className='pt-5 w-11/12 mx-auto'>
                    <NavberBootom></NavberBootom>
            </div>
            <main className='w-11/12 py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;