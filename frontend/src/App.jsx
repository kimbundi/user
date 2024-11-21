import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home/Home'
import Sms from './pages/sms/Sms'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './components/config/Firebase'
import Smsexplore from './components/smsexplore/Smsexplore'


const App = () => {
  const navigate = useNavigate();


  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
if(user) {
  navigate('/home')


}
else {
  navigate('/')

}
    })
  },[])
  return (

    <>
    <div className='app'>
      <ToastContainer/>
      

      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/sms' element={<> <Navbar/>   <Smsexplore/>  </>} />
        <Route path='/contact' element ={ <> <Navbar/>   <Footer/> </>}/>



      </Routes>


    </div>
    <Footer/>
    </>
  )
}

export default App