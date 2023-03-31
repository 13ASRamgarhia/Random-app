import React, { useContext } from 'react'
import randomContext from '../Context/randomContext'

const User = (props) => {
  const { first_name, last_name, email, avatar } = props

  const context = useContext(randomContext)
  const { darkMode } = context
  return (
    <div>
        <div className={`card card-side p-1 desktop:p-3 ${darkMode ? "bg-base-100" : "bg-cardLightBG"} shadow-xl`}>
            <figure><img src={avatar} className='aspect-square w-28 desktop:w-32 h-28 desktop:h-32 rounded-full' alt="Movie"/></figure>
            <div className="card-body">
                <h2 className={`card-title text-lg desktop:text-2xl ${darkMode ? "text-white" : "text-subHeadingColor"}`}>{first_name} {last_name}</h2>
                <p className={`text-base desktop:text-xl ${darkMode ? "text-white" : "text-subHeadingColor"}`}>{email}</p>
            </div>
        </div>
    </div>
  )
}

export default User
