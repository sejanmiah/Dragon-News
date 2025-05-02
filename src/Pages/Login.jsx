import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="flex justify-center items-center mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='capitalize text-center text-3xl font-bold my-5'>Loin your account</h2>
                <fieldset className="fieldset">
                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn bg-[#403F3F] text-white mt-4">Login</button>
                </fieldset>
                <p className='text-center font-bold text-[#706F6F]'>Dont’t Have An Account ? <Link to='/auth/registration' className='text-[#F75B5F]'> Register</Link></p>
            </div>
        </div>
    );
};

export default Login;