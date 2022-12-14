import React, { useContext, useState } from 'react';
import { userContext } from '../Provider/UserProvider';

const PatientReg = () => {
    const {psychiatrist} = useContext(userContext)
    const [msg, setMsg] = useState() 
    const [emailValidate, setEmailValidate] = useState()
    const [passValidate, setPassValidate] = useState() 
    const {hospital, _id} = psychiatrist;
    const imageKey = process.env.REACT_APP_IMAGEBB_KEY;

    const handlePatientRegister = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.patientName.value;
        const adderss = form.adderss.value;
        if(adderss.length < 10){
            setMsg('Please provide atleast 10 characters for address')
            return
        }
        setMsg('')
        const email = form.email.value;
        if ( !( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)))
        {
            setEmailValidate('Invalid Email')
            return;
        }
        setEmailValidate('')
        const phone = form.phone.value;
        const password = form.password.value;
        if ( !/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password))
        {
            setPassValidate('Password should 1 upper, 1 lower character')
            return;
        }else if(password.length<8 || password.length>15){
            setPassValidate('Type 8 to 15 character')
            return;
        }

        setPassValidate('')
        const image = form.image.files[0]; 
        const formData = new FormData();
        
        formData.append('image',image)
        const uri = `https://api.imgbb.com/1/upload?key=${imageKey}`;
   
        fetch(uri, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(imgData => {

        const patient = {
            patientName : name,
            adderss,
            email,
            phone,
            password,
            photo:imgData.data.url,
            hospital,
            psychiatristId: _id
        }
        fetch('https://patient-register-server-nishatroyhana011.vercel.app/patient', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'  
            },
            body: JSON.stringify(patient)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged) {
                alert('Patient added!')
            } 
            form.reset();
        })
        
    })
    
}
    
    
    return (
        <div>
        <p>Patient Register</p>

        <form onSubmit={handlePatientRegister} className='w-10/12 md:w-9/12 lg:w-1/2 p-12 pt-20 mx-auto'>
       
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
                <p className='text-red-600 font-semibold'>{msg}</p>
                <input type="text" name='adderss' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Patient's Email</span>
                </label>
                <p className='text-red-600 font-semibold'>{emailValidate}</p>
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
                <p className='text-red-600 font-semibold'>{passValidate}</p>
                <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="file" name='image' placeholder="Type here" className="input input-bordered w-full" required/>
            </div>

            <div>
                <button className='btn my-3' type='submit'> Register Patient </button>
            </div>
        </form>
    </div>
    );
};

export default PatientReg;










