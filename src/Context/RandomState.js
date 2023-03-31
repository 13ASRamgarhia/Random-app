import React, { useState } from "react";
import randomContext from "./randomContext";

const RandomState = (props) => {
    const [page, setPage] = useState(1)
    const endpoint = `https://reqres.in/api/users?page=${page}`
    const [isLoading, setLoading] = useState(false)

    const [darkMode, setDarkMode] = useState(false)

    return(
        <randomContext.Provider value={{page, setPage, endpoint, darkMode, setDarkMode, isLoading, setLoading}}>
            {props.children}
        </randomContext.Provider>
    )
}

export default RandomState;