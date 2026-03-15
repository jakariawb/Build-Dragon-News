import React, { use } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import News from '../Component/News';
import Naver from '../Component/Naver';
import RightAside from '../Component/Pages/RightAside';
import LeftAside from '../Component/Pages/LeftAside';
import Loading from '../Component/Pages/Loading';
import { UsersContext } from '../Component/context/CreateContext';

const HomeLayout = () => {
    const {state } = useNavigation()
    const {users} = use(UsersContext)
    return (

        <div>
            <header>
                <div className=''>
                    <Header />
                </div>

                <section className='w-11/12 mx-auto'>
                    <News />
                </section>

                <nav className='w-11/12 mx-auto'>
                    <Naver />
                </nav>
            </header>

            <main className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-5'>

                {/* Left Aside */}
                <aside className='lg:col-span-3 md:col-span-1 sticky top-0 h-fit'>
                    <LeftAside />
                </aside>

                {/* Main Content */}
                <section className={`${users ? 'lg:col-span-9' : 'lg:col-span-6'} md:col-span-2`}>
                  {state == 'loading' ? <Loading></Loading> :  <Outlet />} 
                </section>

                {/* Right Aside */}
                {
                    !users && <aside className='lg:col-span-3 md:col-span-2 sticky top-0 h-fit'>
                    <RightAside />
                </aside> 
                }

            </main>
        </div>
    );
};

export default HomeLayout;