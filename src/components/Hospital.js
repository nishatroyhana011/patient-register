import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DoctorCard from './DoctorCard';

const Hospital = () => {
    const hospitalDetail = useLoaderData();
    const {hospitalName, doctorsArray, patientArray}= hospitalDetail;
    return (
        <div>
            <p className='text-green-600 font-semibold text-xl my-10'>{hospitalName?.name}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 w-8/12 mx-auto'>
                <div className='text-start mx-5'>
                    <p className='text-green-600 my-4'>At a glance:</p>
                    <p>Total Psychiatrists: {doctorsArray?.length}</p>
                    <p>Total patients: {patientArray?.length}</p>
                </div>
                <div className='text-start mx-5'>
                    <p className='text-green-600 my-4'>Psychiatrist details:</p>
                    {
                        doctorsArray.map(doctor=> <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Hospital;