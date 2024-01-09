import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'
import { opacity, background } from '../../js/anim';
import Nav from '../nav/Nav';


const Header = ({ backgroundColor, color, showPort, setColor, setTextColor }) => {
    const [isActive, setIsActive] = useState(false);
    const [BackgroundColor, setBackgroundColor] = useState(backgroundColor);
    const [textColor, settextColor] = useState(color);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setBackgroundColor(backgroundColor);
            settextColor(color);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [backgroundColor]);

    return (
        <div className='nav_header' style={{ backgroundColor: BackgroundColor, color: textColor }}>
            <div className='bar'>
                <Link href="/" style={{ color: textColor }}>PortFolio</Link>
                <div onClick={() => { setIsActive(!isActive) }} className='el'>
                    <div className='label'>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className='shopContainer'>
                    <p className='shop'>Shop</p>
                    <div className='el'>
                        <p>Jeongsaeyeong</p>
                    </div>
                </motion.div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className='background'></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav color={textColor} showPort={showPort} setIsActive={setIsActive} isActive={isActive} setColor={setColor} setTextColor={setTextColor} />}
            </AnimatePresence>
        </div>
    )
}

export default Header