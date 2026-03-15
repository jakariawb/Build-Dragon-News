import React from 'react';
import { useNavigate } from 'react-router';
import { FaArrowCircleLeft } from "react-icons/fa";

const NewsDetailsCord = ({ newsCord }) => {

    const { title, thumbnail_url, details } = newsCord || {};
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto p-4">

            <h1 className="text-2xl font-extrabold mb-5">
                Dragon News
            </h1>

            <div className="shadow-2xl p-4 md:p rounded-lg">

                {/* Image Responsive */}
                <img
                    src={thumbnail_url}
                    alt=""
                    className="w-full h-60  md:h-[30rem] object-cover rounded-md mb-5"
                />

                {/* Text Section */}
                <div className="space-y-4">
                    <h1 className="text-xl md:text-2xl font-bold">
                        {title}
                    </h1>

                    <p className="text-sm md:text-base leading-relaxed">
                        {details}
                    </p>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="btn mt-8 bg-secondary text-white flex items-center gap-2"
                >
                    <FaArrowCircleLeft />
                    All News In This Category
                </button>

            </div>
        </div>
    );
};

export default NewsDetailsCord;