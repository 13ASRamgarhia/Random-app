import React, { useContext, useEffect, useState } from 'react'
import User from './User'
import randomContext from '../Context/randomContext'
import axios from 'axios'
import Loader from './Loader'
import "animate.css"

const GetUsers = () => {
  document.title = "Random | Our users"

  const context = useContext(randomContext)
  const { darkMode, page, setPage, endpoint, isLoading, setLoading } = context

  const [users, setUsers] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  //On clicking previous button, this function will make decrement in the page no in the endpoint
  const handlePreviousClick = () => {
    setPage(page - 1)
    fetchUsers()
  }

  //On clicking previous button, this function will make increment in the page no in the endpoint
  const handleNextClick = () => {
    setPage(page + 1)
    fetchUsers()
  }

  //Fetch users from endpoint. Endpoint is stored in RandomState file and accessed using useContext
  const fetchUsers = async () => {
    setLoading(true)
    const res = await axios.get(`${endpoint}`)
    setTotalPages(res.data.total_pages)
    const userData = res.data.data
    setUsers(userData)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <div className={`min-h-screen h-fit pt-16 pb-1 ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}>
        <div className="mx-5 my-5 laptop:mx-16">
            <div className="headingDiv mb-10">
                <div className={`headingDiv font-bold text-3xl desktop:text-4xl font-Tahoma ${darkMode ? "text-white" : "text-headingColor"}`}>Our users</div>

                <div className='space-y-1'>
                    <div className={`h-1 w-32 desktop:w-40 rounded-lg ${darkMode ? "bg-white" : "bg-headingColor"}`}></div>
                    <div className={`h-1 w-24 desktop:w-32 rounded-lg ${darkMode ? "bg-white" : "bg-headingColor"}`}></div>
                </div>
            </div>

            {
            isLoading ?
            <Loader />
            :
            <div className='grid grid-cols-autofit gap-10'>
            {
                users.map((user) => {
                    return(
                        <div className="box grid grid-cols-autofit gap-[15px]" key={user.id}>
                                <User first_name={user.first_name} last_name={user.last_name} email={user.email} avatar={user.avatar} />
                        </div>
                    )
                })
            }
            </div>
            }

            <div className="paginationDiv flex mt-10 mx-auto justify-center">
                <div className="btn-group grid grid-cols-2 gap-1">
                    <button onClick={handlePreviousClick} className={`btn btn-outline text-base desktop:text-xl ${isLoading ? "btn-disabled" : ""} ${page === 1 ? "btn-disabled" : ""} ${darkMode ? "text-white" : "text-headingColor"}`}>Previous page</button>
                    <button onClick={handleNextClick} className={`btn btn-outline text-base desktop:text-xl ${isLoading ? "btn-disabled" : ""} ${page === totalPages ? "btn-disabled" : ""} ${darkMode ? "text-white" : "text-headingColor"}`}>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetUsers
