import React from 'react';
import style from '../components/Tabs/launchtab.module.css';

const FacilityCard = ({ title, subtitle, temp, weather, wind, region, backgroundImage }) => {
  return (
    <div className={`${style.facility_card} w-full sm:w-full md:w-full lg:w-full`}>
      <img src={backgroundImage} alt={title} className="object-cover w-full h-full" />
      <div className={`${style.facility_overlay} p-4 flex flex-col justify-between`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`${style.facility_title}`}>{title}</h3>
            <h4 className={`${style.facility_subtitle} text-gray-200`}>{subtitle}</h4>
          </div>
          <div className="text-right">
            <p className="text-gray-200 font-semibold text-xs">REGION</p>
            <p className="font-bold text-white">{region}</p>
          </div>
        </div>
        <div className={`${style.facility_info} flex justify-between mt-2`}>
          <div>
            <p className="text-gray-200 font-semibold text-xs">TEMP</p>
            <p className="font-bold text-white">{temp}°C</p>
          </div>
          <div>
            <p className="text-gray-200 font-semibold text-xs">WEATHER</p>
            <p className="font-bold text-white">{weather}</p>
          </div>
          <div>
            <p className="text-gray-200 font-semibold text-xs">WIND</p>
            <p className="font-bold text-white">{wind} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
