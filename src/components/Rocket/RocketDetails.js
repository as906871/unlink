import React, { useState } from 'react';
import { GiCrossMark } from "react-icons/gi";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RocketDetails = ({ rocket, onClose }) => {
  const [showOverview, setShowOverview] = useState(true);

  const handleOverviewClick = () => {
    setShowOverview(true);
  };

  const handlePhotosClick = () => {
    setShowOverview(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-4xl mx-4">
        <button onClick={onClose} className="float-right text-2xl"><GiCrossMark /></button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4">

            {showOverview ? (
              <img src={rocket.flickr_images[0]} alt={rocket.name} className="w-full lg:h-[300px] md:h-[250px] object-cover rounded-lg" />
            ) : (
              <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
                {rocket.flickr_images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${rocket.name} ${index}`} className="w-full lg:h-[300px] md:h-[250px] object-cover rounded-lg" />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-3xl font-bold mb-4">{rocket.name}</h2>
            <div className="flex mb-4">
              <span
                className={`text-xl font-medium mr-4 cursor-pointer ${showOverview ? 'border-b-2 border-black' : ''}`}
                onClick={handleOverviewClick}
              >
                Overview
              </span>
              <span
                className={`text-xl font-medium cursor-pointer ${!showOverview ? 'border-b-2 border-black' : ''}`}
                onClick={handlePhotosClick}
              >
                Photos
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">DESCRIPTION</h3>
              <p className="mt-2 text-gray-700">{rocket.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketDetails;