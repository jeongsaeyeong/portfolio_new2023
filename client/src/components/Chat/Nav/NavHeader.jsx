import React, { useEffect, useState } from 'react'
import Nav from './Nav/Nav';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const NavHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div id="section5">
        <div className='main'>

          <div className='header'>
            <div onClick={() => { setIsActive(!isActive) }} className='button'>
              <div className={`${'burger'} ${isActive ? 'burgerActive' : ""}`}></div>
            </div>
          </div>

        </div>
        <AnimatePresence mode="wait">
          {isActive && <Nav />}
        </AnimatePresence>
      </div>
    </>
  )
}

export default NavHeader