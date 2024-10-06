import React from 'react'

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'


function Contact() {
  return (
    <>
    
    <div className="contact-icon flex justify-center mt-20 md:mt-52 mb-10 flex-col gap-10 items-center">
    <ul className='gap-7 flex flex-row md:flex text-xl font-bold'>
                            <li>
                                <NavLink
                                to={'/'}
                                    className={({isActive}) =>
                                        ` ${!isActive ?"text-white" : "text-yellow-300"} hover:text-yellow-300 `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to={'/project'}
                                    className={({isActive}) =>
                                        ` ${!isActive ? "text-white" : "text-yellow-300"} hover:text-yellow-300`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to={'/skills'}
                                    className={({isActive}) =>
                                        ` ${!isActive ? "text-white" : "text-yellow-300"} hover:text-yellow-300`
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to={'/about'}
                                    className={({isActive}) =>
                                        ` ${!isActive ? "text-white" : "text-yellow-300"} hover:text-yellow-300`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                          
                          
                            
                        </ul>
      <div className="icons gap-10 md:flex">
        <a href='https://www.linkedin.com/in/aanchal-sharma01/' target='_blank' className="icon text-4xl bg-black h-20 w-20 flex justify-center items-center rounded-full mb-4">
            {/* <CiLinkedin /> */}
            <FaLinkedin />


        </a>
        <a href='https://www.instagram.com/rha_shrma/' target='_blank'
        className="icon text-4xl bg-black h-20 w-20 flex justify-center items-center rounded-full mb-4">
        <FaInstagram />
        </a>

        <div className="icon text-4xl bg-black h-20 w-20 flex justify-center items-center rounded-full mb-4">
        <FaPhoneAlt />

        </div>
        <div className="icon text-4xl bg-black h-20 w-20 flex justify-center items-center rounded-full mb-4">
        <CiMail />

        </div>
        <a href='https://github.com/Aanchal-shrma' target='_blank'
        className="icon text-4xl bg-black h-20 w-20 flex justify-center items-center rounded-full mb-4">
        <FaGithub />


        </a>
      </div>
      
      
                        </div>
    </>
  )
}

export default Contact
