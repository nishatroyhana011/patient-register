import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { userContext } from '../Provider/UserProvider';

const HospitalList = () => {
    const hospitals = useLoaderData();
    const {psychiatrist } = useContext(userContext)

    return (
        <div className='w-full md:w-10/12 xl:w-1/2 mx-auto'>
            <p className='text-2xl font-semibold my-2'>welcome to Parient register portal</p>
            <p>Current doctor: {psychiatrist.psychiatristName}</p>
            <p>List of Hospitals</p>
            <div className='w-11/12 md:w-8/12 xl:w-2/3 text-start mx-auto my-10'>
                {
                    hospitals?.map(hospital=><li><Link to={`/hospital/${hospital._id}`}>{hospital.name}</Link> </li> 
                    )
                }
            </div>
        </div>
    );
};

export default HospitalList;