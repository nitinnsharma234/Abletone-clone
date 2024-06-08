import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import TopSection from '../components/shared/TopSection.tsx'
import GridBar from '../components/shared/GridBar.tsx';
import MiddleNavBar from '../components/shared/MiddleNavBar.tsx';
import BottomSection from '../components/shared/BottomSection.tsx';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


const HomePage = () => {


  return (
    <div className='max-w-[1600px] mx-auto w-full bg-white mb-20 '>
      <Header />

      <TopSection />
      <GridBar heading={''} />
      <MiddleNavBar />
      <BottomSection />


    </div>

  )
}

export default HomePage