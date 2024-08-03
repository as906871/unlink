import React from 'react';
import style from "../../components/Tabs/launchtab.module.css"

const RocketCard = ({ rocket, onClick }) => {
  const getStatus = (rocket) => {
    const statuses = ['Active', 'Inactive', 'In development'];
    return statuses[rocket.index % statuses.length];
  };
  const status = getStatus(rocket);

  return (
    <div className={`${style.rocket_card} relative rounded-lg overflow-hidden cursor-pointer`} onClick={onClick}>
  <img src={rocket.flickr_images[0]} alt={rocket.name} className="w-full lg:h-[350px] md:h-[200px] object-cover" />
  <div className="absolute top-0 left-0 w-full p-4 ">
    <h3 className="text-xl text-white mb-2">{rocket.name}</h3>
  </div>
  <div className="absolute bottom-0 left-0 w-full p-4">
    <div className={`mt-2 inline-block px-2 opacity-85 py-1 rounded ${status === 'Active' ? 'bg-green-600' : status === 'Inactive' ? 'bg-yellow-600' : 'bg-blue-600'}`}>
      <span className="text-white text-sm font-popins font-bold">STATUS: {status}</span>
    </div>
  </div><br/>
</div>

  );
};

export default RocketCard;