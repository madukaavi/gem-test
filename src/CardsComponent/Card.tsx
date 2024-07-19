// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  buttonText: string;
  additionalText: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, buttonText, additionalText }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-80 flex flex-col relative ">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4" />
      <div className="flex flex-col flex-grow">
        <p className="flex-grow relative bottom-20 font-sans  font-lg font-semibold">{content}</p>
      </div>
      <div className="absolute bottom-6 left-4 flex flex-col space-y-2 ">
        <span className="text-gray-600">{additionalText}</span>
        <button className="bg-gradient-to-r hover:bg-pink-200 font-sans  from-pink-500 to-pink-800 text-white font-sm px-4 py-2 shadow-md rounded-full focus:outline-none">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
