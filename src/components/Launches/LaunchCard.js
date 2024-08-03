import React, { useEffect, useState } from 'react';
import { formatDate, reddit, wikipedia, youtube,rgx } from '../../Common/common';
import { LAUNCHPAD, ROCKET } from '../../Api/api';

const LaunchCard = ({ launch, isUpcoming }) => {
  const [rocketName, setRocketName] = useState('');
  const [launchpadName, setLaunchpadName] = useState('');

let name = launch.name;
let initials = [...name.matchAll(rgx)] || [];
initials = (
  (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
).toUpperCase();

  useEffect(() => {
    const fetchRocketName = async () => {
      try {
        const response = await fetch(`${ROCKET}/${launch.rocket}`);
        const data = await response.json();
        setRocketName(data.name);
      } catch (error) {
        console.error('Error fetching rocket name:', error);
      }
    };

    const fetchLaunchpadName = async () => {
      try {
        const response = await fetch(`${LAUNCHPAD}/${launch.launchpad}`);
        const data = await response.json();
        setLaunchpadName(data.name);
      } catch (error) {
        console.error('Error fetching launchpad name:', error);
      }
    };
    fetchRocketName();
    fetchLaunchpadName();
  }, [launch.rocket, launch.launchpad]);

  const renderCrewImages = () => {
    const elements = [];
    for (let i = 0; i < 4; i++) {
      elements.push(<img key={i} src="https://img.icons8.com/ios-glyphs/30/FFFFFF/user-male.png" alt="Crew" className="w-6 h-6 mr-1" />);
    }
    return elements;
  };

  const iamgesFuncton= () =>{
    if(launch.links.patch.small){
      return <img src={launch.links.patch.small} alt={launch.name} className="w-[120px] bg-gray-700 rounded-2xl p-2 h-[120px] mt-2" />
    }else{
      return (
        <div className="w-[120px] h-[120px] p-2 bg-gray-700 opacity-70 mt-2 rounded-2xl flex justify-center items-center">
        <p className="font-bold text-white text-4xl">{initials}</p>
      </div>
      );
    }
  }

  return (
    <div className="p-4 text-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex-1">
          <p className="text-sm text-gray-500 font-semibold">MISSION NAME</p>
          <p className="text-lg font-bold">{launch.name}</p>
          <p className="text-sm mt-2 text-gray-500 font-semibold">ROCKET</p>
          <p className="text-lg font-bold">{rocketName || launch.rocket}</p>
          <p className="text-sm mt-2 text-gray-500 font-semibold">FLIGHT NUMBER</p>
          <p className="text-lg font-bold">{launch.flight_number}</p>
          <p className="text-sm mt-2 text-gray-500 font-semibold">TIME (UTC)</p>
          <p className="text-lg font-bold">{formatDate(launch.date_utc)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-semibold flex justify-center items-center">{isUpcoming ? "ROCKET LOGO " : "MISSION PATCH" }</p>
          {iamgesFuncton()}
        </div>
      </div>
      <div className='inline-block w-full'>
      {isUpcoming ? (
            <div className="float-right">
              <p className="text-sm text-gray-500 font-semibold">LAUNCHPAD</p>
              <p className="text-lg font-bold">{launchpadName || launch.launchpad}</p>
            </div>
          ) : null}
        {!isUpcoming && (
          <div className="float-right">
            <p className="text-sm mb-1 text-gray-500 font-semibold">CREW</p>
            <div className="flex">{renderCrewImages()}</div>
          </div>
        )}
        <div className="float-left">
          <p className="text-sm mb-2 text-gray-500 font-semibold">LINKS</p>
          <div className="flex">
            {launch.links.wikipedia && (
              <a href={launch.links.wikipedia} target="_blank" rel="noopener noreferrer">
                {wikipedia}
              </a>
            )}
            {launch.links.webcast && (
              <a href={launch.links.webcast} className="ml-2" target="_blank" rel="noopener noreferrer">
                {youtube}
              </a>
            )}
            {launch.links.reddit.campaign && (
              <a href={launch.links.reddit.campaign} className="ml-2" target="_blank" rel="noopener noreferrer">
               {reddit}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;