
import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const FindUs = () => {
    return (
        <div>
            <h1 className='my-6 text-3xl font-extrabold'>Find Us On</h1>


            <div className="join join-vertical space-y-3">
                <button className="btn flex justify-start px-10 py-6 join-item"> <TiSocialFacebook /> Facebook</button>
                <button className="btn flex justify-start px-10 py-6 join-item"> <FaSquareTwitter /> Twitter</button>
                <button className="btn flex justify-start px-10 py-6 join-item"><FaInstagram />Instagram</button>
            </div>

        </div>
    );
};

export default FindUs;