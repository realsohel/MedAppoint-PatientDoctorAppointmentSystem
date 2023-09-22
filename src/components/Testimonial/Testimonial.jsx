import React from 'react'

import { Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png"
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{clickable:true}}
                breakpoints={{
                    640:{
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768:{
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024:{
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide className=''>
                    <div className="py-[30px] px-5 rounded-3 shadow-lg shadow-gray-400 rounded-md border mb-4">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Mohd Sohel Salmani
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        The services that I received is excellent. Dr.Saluja and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3 shadow-lg shadow-gray-400 rounded-md border mb-4 ">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Birju Yadav
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Great medical office, wonderful and warm experience from start to finish. Appreciate Dr.Farheen taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3 shadow-lg shadow-gray-400 rounded-md border mb-4">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Arvind mera sathi
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Dr.Nannu lal gets it. From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. 
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3 shadow-lg shadow-gray-400 rounded-md border mb-4">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Shyaam Bihari
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Dr. Arvind is extremely professional: he takes time to listen and time to explain. A first rate professional experience. Completely satisfied with Dr. (Name) and all the support staff.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3 shadow-lg shadow-gray-400 rounded-md border mb-4">
                        <div className="flex items-center gap-[13px]">
                            <img src={patientAvatar} alt="patientAvatar" />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    Priya Verma
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                    <HiStar className='text-yellowColor w-[18px] h-5'/>
                                </div>
                            </div>
                        </div>

                        <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                        Really thorough, detailed care. Dr. Zeeshan cares about his patients and even gave me a free visit when I complained of post-op pain and I was transitioning between insurances.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
    
        </div>
    )
}

export default Testimonial
