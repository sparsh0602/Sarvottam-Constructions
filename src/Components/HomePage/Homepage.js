import React from 'react'

import Banner from './HomePageComps/Banner/Banner'
import Collection from './HomePageComps/OurCollection/Collection'
import { useRef } from 'react'
import RealEstates from './HomePageComps/RealEstates/RealEstates'
import SupportiveHousing from './HomePageComps/SupportiveHousing/SupportiveHousing'
import Footer from './HomePageComps/Footer/Footer'
export default function Homepage() {

  const targetRef = useRef(null);

  const scrollToSection = () => {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}} id="home">
        
        <Banner/>
        <Collection ref={targetRef}/>
        <RealEstates/>
        <SupportiveHousing/>
        <Footer/>
    </div>
  )
}
