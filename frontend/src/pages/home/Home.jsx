import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Smsexplore from '../../components/smsexplore/Smsexplore'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Header/>
        <Smsexplore/>
    </div>
  )
}

export default Home