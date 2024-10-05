import React from 'react'
import Header from '../components/Header'
import SpecalityMenu from '../components/SpecalityMenu'
import TopDoctor from '../components/TopDoctor'
import Banner from '../components/Banner'
const Home = () => {
  return (
    <div>
      <Header/>
      <SpecalityMenu/>
      <TopDoctor/>
      <Banner/>
    </div>
  )
}

export default Home