import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { userContext } from '../Provider/UserProvider';


const Home = () => {
    const hospitals = useLoaderData();
    const {psychiatrist  } = useContext(userContext)
    
    return (
        <div>
            <p className='text-3xl font-semibold my-3'>welcome to Parient register portal</p>
            <p>Current doctor: {psychiatrist.psychiatristName}</p>
            <p>List of Hospitals</p>
            <div className='w-1/2 text-start mx-auto my-5 '>
                {
                    hospitals.map(hospital=><li><Link to={`/hospital/${hospital._id}`}>{hospital.name}</Link> </li> 
                    )
                }
            </div>
        </div>
    );
};

export default Home;