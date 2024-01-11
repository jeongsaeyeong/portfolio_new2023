import React from 'react'
import { motion } from 'framer-motion';
import { opacity } from '../../js/anim';

const NavImage = ({ img, isActive }) => {

  return (
    <motion.div variants={opacity} initial="initial" animate={isActive ? "open" : "closed"} className='imageContainer'>
      <img src={img} alt="art" />
    </motion.div>
  )
}

export default NavImage
