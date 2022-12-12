import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex h-16 mx-auto">
                    
                        <Link className='mx-6 text-green-600 text-lg font-semibold' to='/'>Home</Link>

                        <Link className='mx-6 text-green-600 text-lg font-semibold' to='/preg'>Patient Register</Link>
                   
                        <Link className='mx-6 text-green-600 text-lg font-semibold' to='/login'>Psychiatrist  Login</Link>
                    
                        <Link className='mx-6 text-green-600 text-lg font-semibold' to='/register'>Psychiatrist Registration</Link>
   
                </div>
                
            </header>
        </div>
    );
};

export default Navbar;