/* eslint-disable react/prop-types */

import { useContext } from "react";
import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "./../../config";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const SidePanel = ({ ticketPrice, timeSlots, doctorId }) => {
  const {token,role} = useContext(AuthContext)

  const bookingHandler = async () => {
    if(token){
      if(role==="doctor"){
        toast.error("You are unauthorized to get the appointment")
        return ;
      }
      try {
        const response = await fetch(
          `${BASE_URL}/bookings/checkout-session/${doctorId}`,
          {
            method: "post",
            headers: {
              Authorization: `Bearer ${token} `,
            },
          }
        );
  
        const data = await response.json();
        console.log(data)
  
        if (data.session.url) {
          window.location.href = data.session.url;
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
    else{
      toast.error("Login First");
    }
    
  };

  return (
    <div className=" shadow-panelShadow p-3 lg:p-5 rounded-md bg-white">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}:
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)}
                <span> - </span>
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={bookingHandler} className="px-2 btn w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
