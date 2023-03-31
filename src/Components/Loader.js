import React from 'react'
import spinner from '../Assets/Images/spinner.gif'

const Loader = () => {
  return (
    <div className='flex justify-center h-full'>
      <img src={spinner} alt="Loading..." className='w-auto h-24 block m-auto'/>
    </div>
)
}

export default Loader;