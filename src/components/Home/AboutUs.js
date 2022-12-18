import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <p className='text-4xl font-semibold text-emerald-600'>About Us</p>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-11/12 mx-auto py-8'>
                <div className='col-span-2'>
                    <div className='flex items-center gap-4'>
                        <div className='w-1/2'>
                            <div className=''>
                                <img src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=740&t=st=1671297651~exp=1671298251~hmac=7c5534341466bb0ec7e49fb9b390757c3e51e21900cd54383746e84622e570b6" alt="" />
                            </div>
                            <div>
                                <img src="https://img.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg?w=826&t=st=1671297722~exp=1671298322~hmac=675421b10aadb743d5b6aca598e64b550079a6c5d8bb20853e294d59cef59256" alt="" />
                            </div>
                        </div>
                        <div className=''>
                            <img src="https://img.freepik.com/free-photo/african-american-black-doctor-man-with-stethoscope-isolated-white-background_231208-2222.jpg?w=360&t=st=1671297408~exp=1671298008~hmac=4b8889fabb2e7ff3e527d0af12035ef6de264f0a555ae2d8f4cfa92c44f3c3e2" alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-span-2 lg:col-span-1 flex items-center'>
                    <div className='text-start'>
                        <p className='text-4xl font-semibold text-emerald-600'>We Ensure Your Healthy Life</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sed minima, eius reprehenderit consequuntur vitae temporibus, magnam voluptates laudantium fugiat culpa ex vel soluta illo expedita, assumenda quas laborum! Rerum.</p>
                        <Link className='border-2 border-emerald-600 text-emerald-600 px-3 py-2 rounded-md shadow-md my-4 inline-block' to='/list'>Lists of Hospitals </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;