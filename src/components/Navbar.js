import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../Provider/UserProvider';

const Navbar = () => {
    const {psychiatrist  } = useContext(userContext)
    
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className='flex md:hidden'>
                    <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn bg-green-600 border-green-600 m-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box text-start w-80">
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/'>Home</Link>
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/list'>Hospitals</Link>
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/login'>Psychiatrist  Login</Link>
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/register'>Psychiatrist Registration</Link>
                        {
                            psychiatrist?.email? <>
                            <Link className='mx-6 text-green-600 text-lg font-semibold' to='/pregister'>Patient Register</Link>
                            </> : <>
                            <p></p>
                            </>
                        } 
                    </div>
                    </div>
                </div> 
                <div className="container hidden md:flex h-16 mx-auto">
                    <Link className='mx-4 text-green-600 text-lg font-semibold' to='/'>Home</Link>
                    <Link className='mx-4 text-green-600 text-lg font-semibold' to='/list'>Hospitals</Link>
                    <Link className='mx-4 text-green-600 text-lg font-semibold' to='/login'>Psychiatrist  Login</Link>
                    <Link className='mx-4 text-green-600 text-lg font-semibold' to='/register'>Psychiatrist Registration</Link>
                    {
                        psychiatrist?.email? <>
                        <Link className='mx-6 text-green-600 text-lg font-semibold' to='/pregister'>Patient Register</Link>
                        </> : <>
                        <p></p>
                        </>
                    }        
                </div>   
            </header>
            
        </div>
    );
};

export default Navbar;