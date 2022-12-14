import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Register = () => {

    const { data: hospitals } = useQuery({
        queryKey: ['hospitals'],
        queryFn: async () => {
            const res = await fetch('https://patient-register-server-nishatroyhana011.vercel.app/hospitals')
            const data = await res.json()
            return data;
        }
    })

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const hospital = form.hospital.value;
        const email = form.email.value;
        const password = form.password.value;

        const psychiatrist = {
            psychiatristName : name,
            hospital,
            email,
            password
        }
        fetch('https://patient-register-server-nishatroyhana011.vercel.app/Psychiatrist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'  
            },
            body: JSON.stringify(psychiatrist)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged) {
                alert('Please Login Now!')
            } 
            form.reset();
        })
    }

    return (
        <div>
            <p>Psychiatrist register</p>

            <form onSubmit={handleSignUp} className='w-10/12 md:w-9/12 lg:w-1/2 p-12 pt-20 mx-auto'>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Psychiatrist Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Pick your Hospital</span>
                    </label>
                    <select name='hospital' className="select w-full">  
                    {
                        hospitals?.map(hospital=><option value={hospital._id}>{hospital.name}</option>) 
                    }   
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Psychiatrist Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div>
                    <button className='btn my-3' type='submit'> Submit </button>
                </div>
            </form>
        </div>
    );
};

export default Register;