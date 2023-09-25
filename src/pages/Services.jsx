import { useEffect } from "react";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <section>
      <div className="container">
        <div className="mx-auto  w-[55%]">
          <h2 className="heading typewriter  mx-auto w-[50%] text-center ">Our Services</h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] flex-wrap my-12">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
