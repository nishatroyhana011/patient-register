import React, { useContext } from 'react';
import { userContext } from '../Provider/UserProvider';

const PatientReg = () => {
    const {psychiatrist} = useContext(userContext)
    const {hospital, _id} = psychiatrist;

    const handlePatientRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.patientName.value;
        const adderss = form.adderss.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const patient = {
            patientName : name,
            adderss,
            email,
            phone,
            password,
            photo,
            hospital,
            psychiatristId: _id
        }
        fetch('http://localhost:5000/patient', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'  
            },
            body: JSON.stringify(patient)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.acknowledged) {
                alert('Patient added!')
            } 
            form.reset();
        })
    }
    
    return (
        <div>
        <p>Patient Register</p>

        <form onSubmit={handlePatientRegister} className='w-1/2 p-12 pt-20 mx-auto'>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Patient Name</span>
                </label>
                <input type="text" name='patientName' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Patient's Adderss</span>
                </label>
                <input type="text" name='adderss' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Patient's Email</span>
                </label>
                <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Patient's Phone no</span>
                </label>
                <input type="phone" name='phone' placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="text" name='photo' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>

            <div>
                <button className='btn my-3' type='submit'> Register </button>
            </div>
        </form>
    </div>
    );
};

export default PatientReg;










