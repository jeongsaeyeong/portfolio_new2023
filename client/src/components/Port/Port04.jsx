import gsap from 'gsap';
import React, { useState } from 'react'

const Port04 = (porps) => {
    const [currentSection, setCurrentSection] = useState('first');
    const [none, setNone] = useState('none')
    
    const [show, setShow] = useState(false);

    const backPage = (port) => {
        setShow(false)

        gsap.to(".header button", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".button ul li", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".ham", { zIndex: 1, top: 0, position: "relative", height: "0px", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".main h2", { zIndex: 1, top: 0, position: "relative", opacity: 0, height: "0", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".main p", { zIndex: 1, top: 0, position: "relative", height: "0px", opacity: 0, display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".overlaydown", { height: "50%", duration: 0.8, ease: "power2.inOut" });

        gsap.to(".overlayup", { height: "0px", y: "0", opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.inOut" });
        gsap.to(".overlaydown", { height: "0px", y: "0", opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.inOut" });

        gsap.to('.split.t1', { y: 0, x: 0, opacity: 1 });
        gsap.to('.split.t2', { y: 0, x: 0, opacity: 1 });
        gsap.to('.split.t3', { y: 0, x: 0, opacity: 1 });
        gsap.to('.split.t4', { y: 0, x: 0, opacity: 1 });

        gsap.to('.i1', { y: 0, x: 0, opacity: 1 });
        gsap.to('.i2', { y: 0, x: 0, opacity: 1 });
        gsap.to('.i3', { y: 0, x: 0, opacity: 1 });
        gsap.to('.i4', { y: 0, x: 0, opacity: 1 });
        gsap.to('.i5', { y: 0, x: 0, opacity: 1 });

        setTimeout(() => {
            switch (port) {
                case 'first':
                    setNone('none')
                    setCurrentSection('first');
                    break;

                case 'three':
                    setNone('none')
                    setCurrentSection('three');
                    break;

                case 'forth':
                    setNone('none')
                    setCurrentSection('forth');
                    break;

                case 'fifth':
                    setNone('none')
                    setCurrentSection('fifth');
                    break;

                case 'sixth':
                    setNone('none')
                    setCurrentSection('sixth');
                    break;

                default:
                    setCurrentSection('first');
            }
        }, 800)
    }
    // 토글메뉴...인데 좀 고려를,, 수정을,, 
    const toggleMenu = (e) => {
        e.preventDefault();

        const ulElements = document.querySelectorAll('.ham div ul');

        ulElements.forEach((ulElement) => {
            ulElement.style.display = ulElement.style.display === 'block' ? 'none' : 'block';
        });
    };

    const Repleshow = () => {
        gsap.to('#section3', { height: "100vh", y: "0", opacity: 1, duration: 1, display: "flex" })
    }

    return (
        <div className={porps.currentPort === 'port04' ? 'port04' : 'port04 none'}>
            <div className="box">
                <div className="header">
                    <div>
                        <button onClick={() => backPage('fifth')}>BACK</button>
                        <button
                            onClick={() => { Repleshow() }}

                        >Reple</button>
                    </div>
                    <div className='button'>
                        <ul>
                            <li><a href="/">SITE</a></li>
                            <li><a href="/">GITHUB</a></li>
                            <li><a href="/">NOTION</a></li>
                        </ul>
                    </div>
                    <div className="ham" onClick={(e) => toggleMenu(e)}>
                        <div>
                            <ul>
                                <li><a href="/">SITE</a></li>
                                <li><a href="/">GITHUB</a></li>
                                <li><a href="/">NOTION</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <h2>ADD PLUS</h2>
                    <p>ADD PLUS 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.</p>
                </div>
            </div>
            <div>
                <div className="img portimg04"></div>
            </div>
        </div>
    )
}

export default Port04