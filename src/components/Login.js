import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../Provider/UserProvider';

const Login = () => {
    const { setpsychiatrist  } = useContext(userContext);
    const navigate = useNavigate()

    const verifyDoctor = (email, password) => {
        fetch(`https://patient-register-server-nishatroyhana011.vercel.app/Psychiatrist?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.email===email && data.password===password){
                    setpsychiatrist(data)
                    navigate('/')
                }else{
                    alert('Wrong email or pass')
                }
            })
            .catch(err=>{
                alert('Please register first')
                console.log(err)})
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       verifyDoctor(email, password)  
    }

    return (
        <div>
            <p>Psychiatrist Login</p>

            <form onSubmit={handleLogin} className='w-1/2 p-12 pt-20 mx-auto'>                
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
                    <button className='btn my-3' type='submit'> Login </button>
                </div>
            </form>
        </div>
    );
};

export default Login;