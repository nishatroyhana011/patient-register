import React, { useEffect, useState } from 'react';

const DoctorCard = ({doctor}) => {
   const [pcount, setPcount] = useState([])
    const {_id, psychiatristName} = doctor;

    useEffect(()=>{
        fetch(`https://patient-register-server-nishatroyhana011.vercel.app/patient?psychiatristId=${_id}`)
            .then(res => res.json())
            .then(data => {
               setPcount(data)
            })
            .catch(err=>{
            console.log(err)})
    }, [])
    
    
    return (
        <div className='p-3 shadow-md'>
            <p>Id: {_id}</p>
            <p>Name: {psychiatristName}</p>
            <p>Number of Patient: {pcount}</p>
        </div>
    );
};

export default DoctorCard;