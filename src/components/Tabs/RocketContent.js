import React, { useEffect, useState } from 'react'
import { fetchRockets } from "../../Redux/reducer/rockets/rocketsSlice"
import { useDispatch, useSelector } from 'react-redux';
import RocketCard from '../Rocket/RocketCard';
import RocketDetails from '../Rocket/RocketDetails';
import style from "../Tabs/launchtab.module.css"
import satellite from "../../assest//image.png"

const RocketContent = () => {
    const dispatch = useDispatch();
    const { rockets, status } = useSelector((state) => state.rockets);
    const [selectedRocket, setSelectedRocket] = useState(null);
  
    useEffect(() => {
      dispatch(fetchRockets());
    }, [dispatch]);
  
    if (status === "loading") {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={satellite} alt="satellite"
            className={`w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/1 h-auto ${style.animate_float_and_rotate}`}
          />
        </div>
      );
    }
  
    return (
      <div className={`min-h-screen px-12 ${style.bg_spacex}`}>
        <div className={`lg:p-10 lg:grid-cols-4 lg:gap-8 md:p-8 md:grid-cols-2 md:gap-4
                          bg-gradient-to-b from-zinc-900 to-zinc-600 opacity-90 ${style.paddd} grid grid-cols-1 `}>
          {rockets.map((rocket, index) => (
            <RocketCard key={index} rocket={{ ...rocket, index }} onClick={() => setSelectedRocket(rocket)} />
          ))}
        </div>
        {selectedRocket && <RocketDetails rocket={selectedRocket} onClose={() => setSelectedRocket(null)} />}
      </div>
    )
}

export default RocketContent;