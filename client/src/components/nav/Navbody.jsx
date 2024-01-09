import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import { blur, translate } from '../../js/anim';

const Navbody = ({ links, selectedLink, setSelectedLink, color, showPort, setIsActive, isActive, setColor, setTextColor }) => {


  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate} initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}>
          {char}
        </motion.span>
      )
    })
    return chars;
  }

  return (
    <div className='body'>
      {
        links.map((link, index) => {
          const { title, href } = link;
          return <Link key={`l_${index}`} href={href}>
            <motion.p
              style={{ color: color }}
              onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
              onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
              variants={blur}
              animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
              onClick={() => { showPort(`${link.port}`); setIsActive(!(isActive)); setColor(link.portColor); setTextColor(link.textColor) }}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        })
      }
    </div>
  )
}

export default Navbody