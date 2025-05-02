import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div className="flex justify-center items-center mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='capitalize text-center text-3xl font-bold my-5'>Loin your account</h2>
                <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Namr" />
                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    {/* Photo Url */}
                    <label className="label">Your photo</label>
                    <input type="text" className="input" placeholder="Photo Url" />
                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn bg-[#403F3F] text-white mt-4">Register</button>
                </fieldset>
                <p className='text-center font-bold text-[#706F6F]'>Already Have An Account ? <Link to='/auth/login' className='text-[#F75B5F]'>Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;