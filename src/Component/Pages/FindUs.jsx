import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="w-full">

            <h1 className="my-6 text-2xl md:text-3xl font-extrabold">
                Find Us On
            </h1>

            <div className="flex flex-col gap-3">

                <a
                    href="https://www.facebook.com/groups/2078358952295455"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full justify-start gap-2 px-6 py-4"
                >
                    <TiSocialFacebook /> Facebook
                </a>

                <a
                    href="https://www.linkedin.com/company/diyatv/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full justify-start gap-2 px-6 py-4"
                >
                    <FaLinkedinIn /> Linkedin
                </a>

                <a
                    href="https://www.instagram.com/jamunatv/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full justify-start gap-2 px-6 py-4"
                >
                    <FaInstagram /> Instagram
                </a>

            </div>

        </div>
    );
};

export default FindUs;