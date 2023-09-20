/* eslint-disable react/prop-types */

import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    averageRating,
    totalRating,
    // totalPatients,
    specialization,
    photo,
    experiences,
  } = doctor;

  return (
    <div className="p-3 lg:p-5 border bg-white shadow-panelShadow rounded-md">
      <div className="mb-2">
        <img className="w-full h-[380px]" src={photo} alt="" />
      </div>
      <hr />
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 font-[700] text-headingColor mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-[600]">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-headingColor">
            <img src={starIcon} alt="" /> {averageRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          {/* <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-[600] text-headingColor">
            +{totalPatients} Patients
          </h3> */}
          <p className="text-[14px] leading-[24px] font-[400] text-textColor">
            At {experiences[0].hospital}
          </p>
        </div>

        <Link
          to={`/doctors/${doctor._id}`}
          className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex  items-center justify-center  group hover:bg-[#0067FF] hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
