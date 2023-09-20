/* eslint-disable react/prop-types */

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
  <>
    <div className="py-[30px] px-3 lg:px-5 border shadow-lg shadow-gray-500 rounded-md" style={{background:`${bgColor}` }}>
      <h2 className='text-[26px] leading-9  font-bold' style={{color:`${textColor}`}}>
          {name}
      </h2>
      <p className="text-[16px] leading-7 font-normal text-textColor mt-4">
          {desc}
      </p>

      <div >
      <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
      mt-[30px] mx-auto flex items-center justify-center group hover:bg-hoverColor  hover:border-none' >
          <BsArrowRight className='group-hover:text-white w-6 h-5'/>
      </Link>
      </div>
    </div>
  </>
  );
};

export default ServiceCard;
