import React from 'react';
import { format } from 'date-fns';
import { FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const { title, image_url, details, author, total_view, rating } = news;

  return (
    <div className="card bg-base-100 shadow-md p-4 space-y-4">
      {/* Author Info */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={author?.img} alt="Author" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold">{author?.name}</p>
            <p className="text-sm text-gray-500">{format(new Date(author?.published_date), 'yyyy-MM-dd')}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 cursor-pointer">
          <span>🔗</span>
          <span>🔄</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold">{title}</h2>

      {/* Image */}
      <img src={image_url} alt="News" className="w-full h-60 object-cover rounded" />

      {/* Description */}
      <p className="text-sm text-gray-700">
        {details.length > 200 ? details.slice(0, 200) + '...' : details}
        <span className="text-red-500 font-semibold cursor-pointer"> Read More</span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} className="text-orange-500" />
          ))}
          <span className="ml-1">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
