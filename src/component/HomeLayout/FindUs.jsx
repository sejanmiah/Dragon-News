import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"><BsTwitter></BsTwitter> Twitter</button>
                    <button className="btn bg-base-100 justify-start join-item"><BsInstagram></BsInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;