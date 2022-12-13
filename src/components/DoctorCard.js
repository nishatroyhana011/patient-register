import React, { useEffect, useState } from 'react';

const DoctorCard = ({doctor}) => {
   const [pcount, setPcount] = useState([])
    const {_id, psychiatristName} = doctor;

    useEffect(()=>{
        fetch(`http://localhost:5000/patient?psychiatristId=${_id}`)
            .then(res => res.json())
            .then(data => {
                 console.log(data)
               setPcount(data)
            })
            .catch(err=>{
            console.log(err)})
    }, [])
    
    
    return (
        <div className='p-3 shadow-md'>
            <p>Id: {_id}</p>
            <p>Name: {psychiatristName}</p>
            <p>{pcount}</p>
        </div>
    );
};

export default DoctorCard;