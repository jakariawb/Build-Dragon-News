import { NavLink } from 'react-router';
import usersP from '../assets/user.png';
import { use } from 'react';
import { UsersContext } from './context/CreateContext';

const Naver = () => {
    const { users, userSingOut } = use(UsersContext);

    const signOutHandel = () => {
        userSingOut().then(() => {
            alert('Sign Out successfully done');
        });
    }

    return (
        <div className="w-full px-4 md:px-8 py-4 bg-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                {/* User Email */}
                <div className="text-sm md:text-base font-medium">
                    {users?.email}
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <NavLink to="/" className="hover:text-primary">Home</NavLink>
                    <NavLink to="/about" className="hover:text-primary">About</NavLink>
                    <NavLink to="/career" className="hover:text-primary">Career</NavLink>
                    {users && (
                        <>
                            <NavLink to="/save" className="hover:text-primary">Save News</NavLink>
                            <NavLink to="/career" className="hover:text-primary">All Reporter</NavLink>
                        </>
                    )}
                </div>

                {/* User Profile & Auth */}
                <div className="flex items-center gap-3 md:gap-4">
                    <img
                        className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
                        src={users ? users.photoURL : usersP}
                        alt="user"
                    />
                    {users ? (
                        <button
                            onClick={signOutHandel}
                            className="btn bg-primary text-base-200 text-sm md:text-base"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <NavLink
                            to="/auth/registration"
                            className="btn bg-primary text-base-200 text-sm md:text-base"
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Naver;