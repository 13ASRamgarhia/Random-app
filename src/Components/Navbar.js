import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import randomContext from '../Context/randomContext'
import "animate.css";
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
  const context = useContext(randomContext)
  const { darkMode, setDarkMode } = context

  const [isOpen, setOpen] = useState(false)

  const handleHamburgerClick = () => {
    setOpen(!isOpen)
  }

  //Dark mode is implemented in the app using useContext and useState
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    handleHamburgerClick()
  }

  useEffect(() => {
    setTimeout(() => {document.getElementById("brandName").classList.add("animate__fadeInDown")}, 1751)
    setTimeout(() => {document.getElementById("brandName").classList.remove("hidden")}, 1751)
    setTimeout(() => {document.getElementById("brandName").classList.add("block")}, 1751)
  })

  return (
    <div className={`w-screen absolute flex justify-between laptop:justify-around px-5 laptop:px-0 py-4 ${darkMode ? "bg-gradient-to-b from-rose-100 to-teal-100" : "bg-gradient-to-b from-gray-700 via-gray-900 to-black"}`}>
        <div className={`brandDiv ${darkMode ? "text-headingColor" : "text-white"}`}>
            <p className="font-extrabold text-3xl desktop:text-5xl font-Montserrat animate__animated hidden" id="brandName">RANDOM</p>
        </div>

        <div>
            <div className={`navItems hidden laptop:flex h-full space-x-10 desktop:space-x-14 my-auto font-Montserrat ${darkMode ? "text-headingColor" : "text-white"}`}>
                <div className="my-auto hover:scale-110 transition-all duration-100 font-medium text-xl desktop:text-3xl"><Link className='cursor-pointer hover:text-current focus:text-current' to="/"><div>Home</div></Link></div>
                <div className="my-auto hover:scale-110 transition-all duration-100 font-medium text-xl desktop:text-3xl"><Link className='cursor-pointer hover:text-current focus:text-current' to="/Users"><div>Get Users</div></Link></div>
                <div className="my-auto hover:scale-110 transition-all duration-100 font-medium text-xl desktop:text-3xl"><a href="https://www.google.com" target='blank' rel="noopener noreferrer" className='cursor-pointer hover:text-current focus:text-current'><div>Project Link</div></a></div>
                <div className="my-auto hover:scale-110 transition-all duration-100">
                    <button onClick={handleDarkMode}>
                        {
                            darkMode ? 
                            <Icon name="sun" size='large' className='text-headingColor' />
                            :
                            <Icon name="moon" size='large' className='text-white' />
                        }
                    </button>
                </div>
            </div>

            <div onClick={handleHamburgerClick} className="flex flex-col laptop:hidden h-full">
                <div className="my-auto">
                    <div className='flex'>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                    </div>

                    <div className='flex'>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                    </div>

                    <div className='flex'>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                        <div className={`w-1 mx-1 my-1 h-1 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}></div>
                    </div>
                </div>
            </div>

            <div className={`absolute flex laptop:hidden p-6 top-[4.5rem] right-0 mx-1 my-2 min-w-[7rem] rounded-xl z-10 ${darkMode ? "bg-gradient-to-b from-rose-100 to-teal-100" : "bg-gradient-to-b from-gray-700 via-gray-900 to-black"} ${isOpen ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}`}>
                <div className='space-y-3'>
                    <div onClick={handleHamburgerClick} className={`${darkMode ? "text-headingColor" : "text-white"}`}><Link to="/" className='cursor-pointer hover:text-current focus:text-current'><div>Home</div></Link></div>
                    <div onClick={handleHamburgerClick} className={`${darkMode ? "text-headingColor" : "text-white"}`}><Link to="/Users" className='cursor-pointer hover:text-current focus:text-current'><div>Get Users</div></Link></div>
                    <div onClick={handleHamburgerClick} className={`${darkMode ? "text-headingColor" : "text-white"}`}><a href="https://www.google.com" target='blank' rel="noopener noreferrer" className='cursor-pointer hover:text-current focus:text-current'><div>Project Link</div></a></div>
                    <button className='pt-1' onClick={handleDarkMode}>
                        {
                            darkMode ? 
                            <Icon name="sun" size='large' className='text-headingColor' />
                            :
                            <Icon name="moon" size='large' className='text-white' />
                        }
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
