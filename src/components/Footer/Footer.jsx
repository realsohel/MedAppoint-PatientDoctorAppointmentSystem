import React from 'react'

import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {RiLinkedinFill} from "react-icons/ri";
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillTwitterCircle} from 'react-icons/ai';

const socialmediaLinks = [
    {
        path:"https://github.com/realsohel",
        icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
    },
    {
        path:"https://www.linkedin.com/in/mohd-sohel-salmani-957603226/",
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
    },
    {
        path:"https://www.youtube.com/@salmaniproductions1104",
        icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
    },
    {
        path:"https://www.instagram.com/sohail.salmani.400054/",
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
    },
    {
        path:"https://twitter.com/real_sohel_",
        icon: <AiFillTwitterCircle className='group-hover:text-white w-4 h-5' />
    },
]

const quickLinks01 = [
    {
        path:"/home",
        display: "Home",
    },
    {
        path:"/",
        display: "About US",
    },
    {
        path:"/services",
        display: "Services",
    },
    {
        path:"/",
        display: "Blog",
    },
];

const quickLinks02 = [
    {
        path:"/find-a-doctor",
        display: "Find a Doctor",
    },
    {
        path:"/home",
        display: "Home",
    },
    {
        path:"/",
        display: "Request an Appointment",
    },
    {
        path:"/",
        display: "Get an Opinion",
    },
]

const quickLinks03 = [
    {
        path:"/",
        display: "Donate",
    },
    {
        path:"/contact",
        display: "Contact Us",
    },
]
const Footer = () => {

    const year = new Date().getFullYear();
    return (
    <footer className='pb-16 pt-10 bg-white px-2'>
        <div className="container">
            <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                <div>
                    <img src={logo} alt="logo" />
                    <p className="text-[16px] leading-7 font-medium text-textColor mt-4">
                        Copyright © {year} developed by Mohd Sohel Salmani, all right reserved. 
                    </p>

                    <div className="flex items-center gap-3 mt-4 ">
                        {
                            socialmediaLinks.map((link,index)=>{return(
                                <Link
                                    to={link.path}
                                    key={index}
                                    className='w-9 h-9 border-solid border border-[#181A1E] rounded-full flex
                                    items-center justify-center group hover:bg-buttonBgColor hover:border-hoverColor '
                                >
                                    {link.icon}
                                </Link>
                            )})
                        }
                    </div>
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-headingColor">
                        Quick Links
                    </h2>

                    <ul>
                        {
                            quickLinks01.map((item,index)=>{return(
                                <li key={index} className='mb-4'>
                                    <Link to={item.path} className='text-[16px] leading-7 font-medium text-textColor'>
                                        {item.display}
                                    </Link>
                                </li>
                            )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-headingColor">
                        I want to:
                    </h2>

                    <ul>
                        {
                            quickLinks02.map((item,index)=>{return(
                                <li key={index} className='mb-4'>
                                    <Link to={item.path} className='text-[16px] leading-7 font-medium text-textColor'>
                                        {item.display}
                                    </Link>
                                </li>
                            )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-bold mb-6 text-headingColor">
                        Support
                    </h2>

                    <ul>
                        {
                            quickLinks03.map((item,index)=>{return(
                                <li key={index} className='mb-4'>
                                    <Link to={item.path} className='text-[16px] leading-7 font-medium text-textColor'>
                                        {item.display}
                                    </Link>
                                </li>
                            )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>


    </footer>
    )
}

export default Footer
