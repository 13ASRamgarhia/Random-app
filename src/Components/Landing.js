import React, { useContext } from 'react'
import randomContext from '../Context/randomContext'
import { Link } from 'react-router-dom'

const Landing = () => {
  const context = useContext(randomContext)
  const {darkMode } = context

  return (
    <div>
        <div className="grid h-screen place-items-center">
            <div className='my-auto mx-5 laptop:mx-16 space-y-10'>
              <p className={`text-4xl desktop:text-7xl text-center font-Tahoma font-bold flex ${darkMode ? "text-white" : "text-headingColor"}`}>Welcome to RANDOM app</p>
              <p className={`text-xl desktop:text-4xl text-center font-Tahoma flex ${darkMode ? "text-white" : "text-headingColor"}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat esse eos repellendus, sit iusto dolorem quas voluptatibus, accusamus totam nemo fugit sint suscipit ab. This app is designed using create-react-app and tailwind, to get users from an API</p>
              <div className="mx-auto mt-0 laptop:pt-10 flex">
                  <Link to="/Users" className={`mx-auto getUsers px-6 desktop:px-10 py-2 desktop:py-6 text-xl desktop:text-4xl font-semibold rounded-xl ${darkMode ? "bg-white text-headingColor hover:text-headingColor" : "bg-headingColor text-white hover:text-white"}`}>Get users</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
