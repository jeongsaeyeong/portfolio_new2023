import React from 'react'
import { motion } from 'framer-motion';
import { translate } from '../../js/anim';

const NavFooter = () => {
  return (
    <div className='footer'>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate} initial="initial"
          animate="enter"
          exit="exit">
          <span>Made by:</span>Studio Lumio
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate} initial="initial"
          animate="enter"
          exit="exit">
          <span>College:</span>Sungshin Women University
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate} initial="initial"
          animate="enter"
          exit="exit">
          <span>department:</span> Media Communication
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate} initial="initial"
          animate="enter"
          exit="exit">
          SNS
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate} initial="initial"
          animate="enter"
          exit="exit">
          ooooo0516@naver.com & jeongsaeyeong@gmail.com
        </motion.li>
      </ul>
    </div>
  )
}

export default NavFooter