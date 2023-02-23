import React from 'react'
import Advert from '../components/Advert'
import Card from '../components/Card'
import Explore from '../components/Explore'
import HeroSection from '../components/HeroSection'
import Startup from '../components/Startup'

function HomePage() {
  // if the url contains intRoW, then redirect to external link
  if (window.location.href.includes('intRoW')) {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScI-3ZtEu3aNkp1lYTscSNAGHgrgjSm3BiWpcePZaZ3blHztw/viewform'
  }
  return (
    <>
      <HeroSection/>
      <Explore/>
      <Startup/>
      <Advert/>


    </>
  )
}

export default HomePage
