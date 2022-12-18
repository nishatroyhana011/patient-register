import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className='my-16'>
            <p className='text-4xl font-semibold text-emerald-600'>Our Services</p>
            <div className='card-body grid grid-cols-1 xl:grid-cols-4 gap-4 text-white'>
                <div className='bg-emerald-300 rounded-md p-5 text-start rounded-tr-3xl rounded-bl-3xl text-emerald-900'>
                    <p className='text-xl'>Appoinments</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.</p>
                    <Link className='border-2 border-emerald-600 text-emerald-600 px-4 py-3 rounded-md shadow-md my-4 inline-block' to='/list'>Appoinment Now</Link>
                </div>

                <div className='bg-emerald-600  rounded-md p-5 text-start rounded-tr-3xl rounded-bl-3xl'>
                    <p className='text-xl'>Doctor's Schedule</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.</p>
                    <Link className='border-2 border-white text-white px-3 py-2 rounded-md shadow-md my-4 inline-block' to='/list'>Appoinment Now</Link>
                </div>

                <div className='bg-emerald-300 rounded-md p-5 text-start rounded-tr-3xl rounded-bl-3xl text-emerald-900'>
                    <p className='text-xl'>Emergency Case</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.</p>
                    <Link className='border-2 border-emerald-600 text-emerald-600 px-3 py-2 rounded-md shadow-md my-4 inline-block' to='/list'>Appoinment Now</Link>
                </div>
            
                <div className='bg-emerald-600 rounded-md p-5 text-start rounded-tr-3xl rounded-bl-3xl'>
                    <p className='text-xl'>Pathology and Test</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed.</p>
                    <Link className='border-2 border-white text-white px-3 py-2 rounded-md shadow-md my-4 inline-block' to='/list'>Appoinment Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Cards;