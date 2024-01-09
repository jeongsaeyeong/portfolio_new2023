import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from '../../../../js/anim'
import { useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Curve from './Curve/Curve';
import GoLink from './Link/GpLink';

const navItems = [
    {
      title: "GitHub",
      href: "/",
    },
    {
      title: "Notion",
      href: "/",
    },
    {
      title: "Site",
      href: "/",
    }
  ]
  

const Nav = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={'menu'}>
            <div className='body'>
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className='nav'>
                    <div className='header'>
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <GoLink key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></GoLink>
                        })
                    }
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    )
}

export default Nav