import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../Assets/marvel.png';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menu = <>
        {
            user?.uid
                ?
                <>
                    <li><span className="text-white">{user?.displayName}</span></li>
                    <li><Link to='/' onClick={handleLogOut} className="text-red-600">Log Out</Link></li>
                </>
                :
                <>
                    <li><Link className="hover:text-red-600" to='/login'>Login</Link></li>
                    <li><Link className="hover:text-red-600" to='/register'>Sign Up</Link></li>
                </>
        }

    </>

    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content text-black">
                            {menu}
                        </ul>
                    </div>
                    <div>
                        <img className='mx-3' style={{ height: 50 }} src={Logo} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;