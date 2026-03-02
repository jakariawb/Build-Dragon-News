

import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import News from '../Component/News';
import Naver from '../Component/Naver';
import RightAside from '../Component/Pages/RightAside';
import LeftAside from '../Component/Pages/LeftAside';





const HomeLayout = () => {
    return (
        <div>
            <header>
               <Header></Header>
                <section className=' w-11/12 mx-auto'>
                    <News></News>
                </section>
                <nav className=' w-11/12 mx-auto'>
                    <Naver></Naver>
                </nav>
            </header>

            <div>
                <main className=' w-11/12 mx-auto grid grid-cols-12 mt-5 gap-10'>

                    <aside className='right-section col-span-3 h-fit sticky top-0'>
                            <LeftAside></LeftAside>
                    </aside>

                    <section className='main-section col-span-6'>
                        <Outlet></Outlet>
                    </section>

                    <aside className='left-section col-span-3 sticky top-0 h-fit'>
                        <RightAside></RightAside>
                    </aside>
                </main>
            </div>
        </div>
    );
};

export default HomeLayout;