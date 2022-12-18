import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero h-screen bg-base-200 hero-overlay " style={{ backgroundImage: `url("https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21202.jpg?w=740&t=st=1671292413~exp=1671293013~hmac=ed875b08a3c99ae80194b8912825a7c2ed0cc69407e7c22dadaca86b8bec6baa")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-transparent">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore similique quasi accusamus est impedit dolorem consequatur dolores odit numquam?</p>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body rounded-md text-start">
                       <p className='text-emerald-600 text-4xl font-semibold '>Committed to Trusted Health Care</p>
                        <p className='my-3'>We are hospital hub. Visit our registered hospitals.</p>
                        <div className='flex gap-5'>
                            <Link className='bg-emerald-600 text-white p-2 rounded-md shadow-md ' to='/list'>Hospitals</Link>
                            <Link className='border-2 border-emerald-600 text-emerald-600 px-3 py-2 rounded-md shadow-md ' to='/list'>Contact Us</Link>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;