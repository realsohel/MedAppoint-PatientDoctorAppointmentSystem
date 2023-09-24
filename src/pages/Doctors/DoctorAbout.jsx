import { formatDate } from "../../utils/formatDate";

/* eslint-disable react/prop-types */
const DoctorAbout = ({ about, name, qualifications, experiences }) => {

  const capitalizeFirstLetter=(str)=>{
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
  }
  return (
    <div className="bg-white rounded-md">
      <div className="px-4 mt-4">
        <h3 className="mt-4 text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          About 
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text__para">{about}</p>
      </div>

      <hr className="mt-4 bg-irisBlueColor px-2"/>

      <div className="mt-12 px-4">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="flex sm:justify-between sm:items-end flex-col sm:flex-row  md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate, { year: "numeric" })}-
                  {formatDate(item.endingDate, { year: "numeric" })}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {capitalizeFirstLetter(item.degree)}
                </p>
              </div>
              <p className="text-[16px] leading-6 font-semibold text-headingColor">
                {capitalizeFirstLetter(item.university)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <hr className="mt-4 bg-irisBlueColor px-2"/>

      <div className="mt-12 px-4">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Experience
        </h3>
        <ul className="pt-4 md:p-5 grid sm:grid-cols-2  gap-[30px]">
          {experiences?.map((item, index) => (
            <li key={index}>
              <div className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                  {formatDate(item.startingDate, { year: "numeric" })}-
                  {formatDate(item.endingDate, { year: "numeric" })}
                </span>
                <p className="text-[16px] leading-6 font-medium text-headingColor mt-3">
                  {capitalizeFirstLetter(item.position)}
                </p>
                <p className="text-[14px] leading-6 font-medium text-textColor">
                  {capitalizeFirstLetter(item.hospital)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
