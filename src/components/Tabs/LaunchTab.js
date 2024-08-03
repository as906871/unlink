import React, { useEffect, useState } from "react";
import LaunchCard from "../Launches/LaunchCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPreviousLaunches,
  fetchUpcomingLaunches,
} from "../../Redux/reducer/launches/launchesSlice";
import style from "./launchtab.module.css";
import FacilityCard from "../../Common/FacilityCard";
import spacex3 from "../../assest/spacex3.jpg";
import spacex5 from "../../assest/spacex5.jpg";
import spacex4 from "../../assest/spacex4.jpg";
import satellite from "../../assest//image.png"
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";

const LaunchTab = () => {
  const dispatch = useDispatch();
  const { upcoming, previous, status } = useSelector((state) => state.launches);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(fetchUpcomingLaunches());
    dispatch(fetchPreviousLaunches());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="absolute inset-0 flex items-center sm:mt-10 justify-center">
        <img src={satellite} alt="satellite"
          className={`w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/1 h-auto ${style.animate_float_and_rotate}`}
        />
      </div>
    );
  }

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={`mx-auto p-4 sm:p-6 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 ${style.bg_spacex}`}>
      <div className="bg-black opacity-85 text-white p-4 sm:p-6 md:p-8 lg:p-4 rounded-3xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 font-bold">Upcoming Launch</h3>
        {upcoming.length > 0 && (
          <LaunchCard
            key={upcoming[0].id}
            launch={upcoming[0]}
            isUpcoming={true}
          />
        )}
      </div>
      {/* bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 bg-opacity-55 backdrop-blur-2xl */}
      <div className="bg-black opacity-85 text-white p-4 sm:p-6 md:p-8 lg:p-4 rounded-3xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 font-bold">Launch Facilities</h3>
        <div className="flex flex-wrap -mx-0">
          <FacilityCard
            title="Cape Canaveral"
            subtitle="LC-39A & SLC-40"
            temp={27}
            weather="Clear"
            wind={2}
            region="Florida"
            backgroundImage={spacex4}
          />

          <FacilityCard
            title="Starbase Boca Chica"
            subtitle="Starship Launch Facility"
            temp={27}
            weather="Clear"
            wind={6}
            region="Texas"
            backgroundImage={spacex3}
          />
          {showAll && (
            <FacilityCard
              title="Vandenberg Base"
              subtitle="USSF SLC-4E"
              temp={12}
              weather="Mist"
              wind={3}
              region="California"
              backgroundImage={spacex5}
            />
          )}
        </div>
        <div>
          <button className=" hover:bg-gray-700 text-white font-bold py-1 px-4 rounded-full" onClick={toggleShowAll}>
            {showAll ? (
              <div className="flex items-center gap-2">
                <IoIosArrowDropupCircle className="w-6 h-6" />
                <span>Less</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <IoIosArrowDropdownCircle className="w-6 h-6" />
                <span>More</span>
              </div>
            )}
          </button>
        </div>
      </div>

      <div className="bg-black opacity-85 text-white p-4 sm:p-6 md:p-8 lg:p-4 rounded-3xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl mb-2 font-bold">Previous Launch</h3>
        {previous.length > 0 && (
          <LaunchCard
            key={previous[0].id}
            launch={previous[0]}
            isUpcoming={false}
          />
        )}
      </div>

      <div className="bg-black opacity-85 text-white p-4 sm:p-6 md:p-8 lg:p-4 rounded-3xl">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Starlink</h3>
        <div className="relative w-full h-48 sm:h-55 md:h-65 lg:h-60 overflow-hidden flex items-center justify-center">
          <img
            src={satellite}
            className={`w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/1 h-auto ${style.animate_float_and_rotate}`}
            alt="satellite"
          />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-center font-semibold">
          There are currently 3268 active Starlink satellites on the low Earth orbit.
        </p>
      </div>
    </div>
  );
};

export default LaunchTab;