import React, { useState } from 'react'
import gsap from 'gsap';

const Main01 = () => {
    const [currentSection, setCurrentSection] = useState('first');
    const [currentPort, setCurrentPort] = useState('port01');
    const [none, setNone] = useState('none')
    const [black, setBlack] = useState('none')
    const [color, setColor] = useState('white')
    const [textcolor, setTextColor] = useState('#000')
    const [chatcolor, setChatColor] = useState('#fff')

    // port 들어가기 
    const showPort = (port) => {
        const getRandomDirection = () => (Math.random() * 1 - 1);

        gsap.to('.split.t1', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0 });
        gsap.to('.split.t2', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0.5 });
        gsap.to('.split.t3', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0.5 });
        gsap.to('.split.t4', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0 });

        gsap.to('.i1', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0 });
        gsap.to('.i2', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0.5 });
        gsap.to('.i3', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0.5 });
        gsap.to('.i4', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0 });
        gsap.to('.i5', { x: getRandomDirection() * 100, y: getRandomDirection() * 100, opacity: 0, duration: 1, delay: 0 });

        gsap.to(".overlayup", { height: "50%", duration: 0.8, delay: 1, ease: "power2.inOut" });
        gsap.to(".overlaydown", {
            height: "50%", y: "0", duration: 0.8, delay: 1, ease: "power2.inOut",
            onComplete: () => {
                setTimeout(() => {
                    setBlack('black');
                    showPort01(port);
                }, 200);
            }
        });
    };

    const showPort01 = (port) => {
        setNone('block');
        setCurrentPort(port);
        setBlack('none');

        gsap.to(".overlaydown", { height: "0", y: "0", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".header button", { zIndex: 1, top: 0, position: "relative", height: "40px", display: "block", delay: 0.5, duration: 0.3, ease: "power2.inOut" });
        gsap.to(".button ul li", { zIndex: 1, top: 0, position: "relative", height: "40px", display: "flex", delay: 0.5, duration: 0.3, ease: "power2.inOut" });
        gsap.to(".ham", { zIndex: 1, top: 0, position: "relative", height: "30px", delay: 0.5, duration: 0.5, ease: "power2.inOut" });

        gsap.to(".main h2", { zIndex: 1, top: 0, position: "relative", height: "100%", opacity: 1, display: "block", delay: 1, duration: 0.5, ease: "power2.inOut" });
        gsap.to(".main p", { zIndex: 1, top: 0, position: "relative", height: "100%", opacity: 1, display: "block", delay: 1.8, duration: 0.5, ease: "power2.inOut" });
    };


    return (
        <div className={currentSection === 'first' ? 'first' : 'first none'}>
            <div className="center__text">
                <div className="split t1"><span>DIG</span> WHERE THE</div>
                <div className="split t2">GOLD<span>IS UNLESS</span></div>
                <div className="split t3"><span>YOU</span> NEED<span></span></div>
                <div className="split t4"> SOME<span>EXERCISE</span></div>
                <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>youtube</span></div></div>
                <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>youtube</span></div></div>
                <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>youtube</span></div></div>
                <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
            </div>
        </div>
    )
}

export default Main01