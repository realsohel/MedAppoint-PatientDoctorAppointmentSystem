import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About.jsx";
import { BsArrowRight } from "react-icons/bs";

import ServicesList from "../components/Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import DoctorsList from "../components/Doctors/DoctorsList";
import Testimonial from "../components/Testimonial/Testimonial";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      {/* {Hero section} */}   
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ====== hero content ========== */}
            <div>
              <div className=" lg:w-[570px]">
                <h1 className="fade-in text-headingColor text-[36px] leading-[46px] md:text-[60px] md:leading-[70px] font-[800] ">
                  All doctors treat, but a good doctor lets nature heal.
                </h1>
                <p className="  text__para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Natus quaerat cumque fugit, perspiciatis cum nemo aperiam, aut
                  quia earum amet architecto, modi odio. Soluta unde ducimus
                  perferendis?
                </p>
                <Link to="/doctors">
                  <button className="btn fade-in">Request an Appointment </button>
                </Link>
              </div>

              {/* {Counter} */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="typewriter text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    25+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-purpleColor block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="typewriter text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-irisBlueColor block mt-[-14px]"></span>
                  <p className="text__para">Clinic available all over the India</p>
                </div>

                <div>
                  <h2 className="typewriter text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
              {/* {content} */}
            </div>


            {/* =========== hero img ============ */}
            <div className="flex gap-[30px] justify-end">
              <div className="slide-right">
                <img className=" w-full" src={heroImg01} alt="hero_img" />
              </div>
              <div className="mt-[2px]">
                <img
                  className="fade-in w-full mb-[30px]"
                  src={heroImg02}
                  alt="hero_img"
                />
                <img className="slide-left w-full" src={heroImg03} alt="hero_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {Hero section} end*/}   

      <section>
        <div className="container ">
          <div className="lg:w-[880px] mx-auto">
            <h2 className="heading text-center">
              Providing comprehensive care to patients
            </h2>
            <p className="text__para w-full text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-buttonBgColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {====ABOUT SECTION START====} */}
      <About />
        {/* {====ABOUT SECTION END====} */}

      
      {/* {====Services SECTION Start====} */}
      <section>
        <div className="container">
          <div className="lg:w-[880px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <ServicesList />
        </div>
      </section>
      {/* {====Services SECTION end====} */}


      {/* {====Feature SECTION Start====} */}
      <section>
        <div className="container">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            {/* =========== feature content ============ */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para ">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para ">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/home">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ========= feature img ======== */}
            {/* {img} */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className='w-3/4' alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/* {====Feature SECTION end====} */}

      {/* {====Doctors SECTION start====} */}
      <section>
        <div className="container">
          <div className="lg:w-[880px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className=" text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <DoctorsList />
        </div>
      </section>
      {/* {====Doctors SECTION end====} */}

      {/* Testimonial starts */}
      <section>
        <div className="container">
          <div className="lg:w-[880px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* Testimonial ends */}
    </>
  );
};

export default Home;
