import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../Provider/UserProvider';

const Navbar = () => {
    const {psychiatrist  } = useContext(userContext)
    
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex h-16 mx-auto">
                    
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/'>Home</Link>
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/login'>Psychiatrist  Login</Link>
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/register'>Psychiatrist Registration</Link>
                        <Link className='mx-4 text-green-600 text-lg font-semibold' to='/pregister'>Patient Register</Link>
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