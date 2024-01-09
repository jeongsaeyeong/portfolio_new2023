import React, { useEffect, useState } from 'react'
import Nav from './Nav/Nav';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ChatHeader = ({ color, backPage }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname, backPage])

  return (
    <>
      <div id="section04">
        <div className='main'>
          <div className='header'>
            <div onClick={() => { setIsActive(!isActive) }} className='chatbutton'>
              <div className='text' style={{ color: color }}>Chat</div>
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

export default ChatHeader