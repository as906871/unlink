import { IoLogoReddit } from "react-icons/io5";
import { RiYoutubeLine } from "react-icons/ri";
import { TbBrandWikipedia } from "react-icons/tb";

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleString('en-US', options);
  };

export const wikipedia = <TbBrandWikipedia className="w-8 h-6 p-1 border border-gray-400 rounded-full" />
export const youtube= <RiYoutubeLine className="w-8 h-6 border border-gray-400 rounded-full" />
export const reddit =  <IoLogoReddit className="w-6 h-6 border border-gray-400 rounded-full" />


export const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');