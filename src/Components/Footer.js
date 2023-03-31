import React, { useContext } from 'react'
import randomContext from '../Context/randomContext'
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  const context = useContext(randomContext)
  const { darkMode } = context

  return (
    <div className={`w-screen px-5 flex justify-between laptop:justify-around laptop:px-0 py-4 ${darkMode ? "bg-gradient-to-b from-teal-100 to-rose-100" : "bg-gradient-to-b from-black via-gray-900 to-gray-700"}`}>
        <div className="copyrightDiv my-auto">
          <p className={`${darkMode ? "text-headingColor" : "text-white"} text-base desktop:text-xl`}>Copyright &#169; 2023 Amandeep Singh</p>
        </div>

        <div className="contactDiv space-x-2 my-auto">
          <a href="https://www.linkedin.com/in/13asr/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' size='large' className={`${darkMode ? "text-headingColor" : "text-white"}`} /></a>
          <a href="https://github.com/13ASRamgarhia" target="_blank" rel="noopener noreferrer"><Icon name='github' size='large' className={`${darkMode ? "text-headingColor" : "text-white"}`} /></a>
        </div>
    </div>
  )
}

export default Footer
