import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'

function Navbar() {

    const [open, setOpen] = useState(false)
  return (
    <>
    <div className='flex justify-between'>
   
    
        <div className="font-bold text-2xl">Aanchal Sharma</div>
        <ul className='gap-7 hidden md:flex text-xl font-bold'>
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
                        <div className="div">
                        <button
                        onClick={() => setOpen(!open)} 
                        className="border pt-1 pb-1 pl-5 pr-5 rounded-md font-bold text-black bg-yellow-300">Deployed Projects</button>

                        {open && (
                        <ul className='bg-black p-4 w-52 shadow-lg mt-5'>
                            <li className='mt-2 hover:text-yellow-300 cursor-pointer'><a href='https://aanchal-shrma.github.io/Amazon-UI-clone/' target='_blank' >Amazon UI clone</a></li>

                            <li className='mt-2 hover:text-yellow-300 cursor-pointer'><a href='https://aanchal-shrma.github.io/tic-tac-toe-game/' target='_blank'
                            >Tic Tac Toe game</a></li>

                            <li className='mt-2 hover:text-yellow-300 cursor-pointer'><a href='https://aanchal-shrma.github.io/stone-paper-scissor-/'
                           >Stone paper scissor</a>
                             </li>
                        </ul>
                        )}
                        </div>
        </div>
    </>
  )
}

export default Navbar
