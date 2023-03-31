import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import GetUsers from './Components/GetUsers';
import { useContext, useEffect, useState } from 'react';
import randomContext from './Context/randomContext';
import LoadingBar from 'react-top-loading-bar'
import loading from "./Assets/Images/loading.gif"

function App() {
  const context = useContext(randomContext)
  const { darkMode } = context
  const location = useLocation()
  const [progress, setProgress] = useState(0)
  const [isPageLoading, setPageLoading] = useState(true)

  //This useEffect is used to listen for route change, to implement the top loading bar
  useEffect(() => {
    setProgress(10)
    setProgress(100)
  }, [location])

  //This useEffect executes a pre-loader, which is used to hide the pre-animations when the page is loaded
  useEffect(() => {
    setTimeout(() => {setPageLoading(false)}, 1000);
    setTimeout(() => {document.getElementById("loadingBanner").classList.add("hidden")}, 1751)
  }, [])
  
  return (
    <>
        <LoadingBar
        height="3px"
        color={`${darkMode ? "#ff0000" : "#ffffff"}`}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className={`App h-screen  ${darkMode ? "bg-gradient-to-b from-gray-700 via-gray-900 to-black" : "bg-gradient-to-b from-rose-100 to-teal-100"}`}>
      <div className={`absolute h-screen grid items-center justify-center w-screen bg-white z-50 ${isPageLoading ? "flex flex-col" : "animate__animated animate__fadeOut"}`} id="loadingBanner">
        <div className="">
          <img src={loading} alt="Funnel" />
        </div>
      </div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Users" element={<GetUsers />} />
      </Routes>

      <Footer />
    </div>
    </>
  );
}

export default App;