import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../component/Header/navber';
import LatestNews from '../component/Marquee/LatestNews';
import NavberBootom from '../component/Header/NavberBootom';
import LeftAside from '../component/HomeLayout/LeftAside';
import RightAside from '../component/HomeLayout/RightAside';

const MainLaoyout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <NavberBootom></NavberBootom>
                </nav>
            </header>
            
            <main className='w-11/12 mx-auto my-10 gap-5 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                   <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default MainLaoyout;