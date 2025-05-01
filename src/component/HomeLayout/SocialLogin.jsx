import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'>Login With</h1>
            <div className='space-y-3 mt-5'>
                <button className='btn btn-outline w-full bg-white'><FcGoogle size={24}/> Login with google</button>
                <button className='btn btn-outline w-full bg-white'> <FaGithub size={24}/>Login with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;