import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

function Card({ card, likedCourses, setLikedCourses, handleLike }) {
  const [show, setShow] = useState('Read More');
  const [des, setDes] = useState(card.description.substring(0, 200) + '...');

  function descriptionHandler() {
    if (show === 'Read More') {
      setDes(card.description);
      setShow('Read Less');
    } else {
      setDes(card.description.substring(0, 200) + '...');
      setShow('Read More');
    }
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-slate-900 text-white rounded-lg shadow-lg overflow-hidden m-2">
      <div className="relative w-full object-cover h-48 sm:h-64 lg:h-48">
        <img
          src={`${card.image.url}`}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
          alt={card.title}
        />
        <button
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex justify-center items-center"
          onClick={() => {
            handleLike(card);
          }}
        >
          {likedCourses.includes(card.id) ? (
            <FcLike className="text-xl" />
          ) : (
            <FcLikePlaceholder className="text-xl" />
          )}
        </button>
      </div>

      <div className="p-4">
        <div className="font-semibold text-lg">{card.title}</div>
        <p className="text-sm py-2">
          {des}{' '}
          <button
            onClick={descriptionHandler}
            className="text-purple-600 hover:underline focus:outline-none"
          >
            {show}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Card;
