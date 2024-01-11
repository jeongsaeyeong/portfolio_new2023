import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../../js/anim';
import Navbody from './Navbody';
import NavFooter from './NavFooter';
import Image from './NavImage';

import port01 from '../../assets/img/port01.png'
import port02 from '../../assets/img/port02.png'
import port03 from '../../assets/img/port03.png'
import port04 from '../../assets/img/port04.png'
import port05 from '../../assets/img/port05.png'

const Nav = ({ color, showPort, setIsActive, isActive, setColor, setTextColor }) => {
    const links = [
        {
            title: "Port1",
            href: "/",
            img: port01,
            port: 'port01',
            portColor: '#fff',
            textColor: '#000'
        },
        {
            title: "Port2",
            href: "/shop",
            img: port02,
            port: 'port02',
            portColor: '#D9F1F1',
            textColor: '#ff8781'
        },
        {
            title: "Port3",
            href: "/about",
            img: port03,
            port: 'port03',
            portColor: '#CBB4A7',
            textColor: '#fff'
        },
        {
            title: "Port4",
            href: "/lookbook",
            img: port04,
            port: 'port04',
            portColor: '#33392F',
            textColor: '#BA985B'
        },
        {
            title: "Port5",
            href: "/contact",
            img: port05,
            port: 'port05',
            portColor: '#E1E1E1',
            textColor: '#000'
        }
    ]


    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className='nav'>
            <div className='wrapper'>
                <div className='container'>
                    <Navbody
                        links={links} selectedLink={selectedLink}
                        setSelectedLink={setSelectedLink} color={color}
                        showPort={showPort} setIsActive={setIsActive}
                        isActive={isActive} setColor={setColor}
                        setTextColor={setTextColor} />
                    <NavFooter />
                </div>
                <Image img={links[selectedLink.index].img} isActive={selectedLink.isActive} />
            </div>
        </motion.div>
    )
}

export default Nav