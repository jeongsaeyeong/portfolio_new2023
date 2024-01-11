import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slide, scale } from '../../../../../js/anim';

const GoLink = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div className='link' onMouseEnter={() => { setSelectedIndicator(href) }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className='indicator'></motion.div>
      <Link to={href}>{title}</Link>
    </motion.div>
  )
}

export default GoLink;
