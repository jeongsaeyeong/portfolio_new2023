import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from '../../../../js/anim'
import { useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Curve from './Curve/Curve';
import Reple from '../../../Reple';

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={'menu'}>
      <div className='body'>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className='nav'>
          <Reple />
        </div>
        <Footer />
      </div>
    </motion.div>
  )
}

export default Nav