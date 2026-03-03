


import React from "react";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  return (
    <div className="bg-base-100 shadow-md rounded-lg p-4 mb-6">

      {/* Author Section */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full h-80 object-cover rounded-md mb-3"
      />

      {/* Details */}
      <p className="text-gray-600 text-sm">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link to={`/news/${id}`}>
               <span className="text-orange-500 cursor-pointer ml-1">
              Read More
            </span>
            </Link>
          </>
        ) : (
          details
        )}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">

      <div className="flex items-center gap-2">

  <div className="flex">
    {
      [...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={
            index < rating.number
              ? "text-orange-400"
              : "text-gray-300"
          }
        />
      ))
    }
  </div>

  <span className="text-gray-700">{rating.number}</span>

</div>

        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;