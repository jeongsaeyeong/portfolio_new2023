import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import Portbutton from '../components/Etc/Portbutton'
import Reple from '../components/Reple';
import Overlay from '../components/Etc/Overlay';
import SplitType from 'split-type'

<script src="https://unpkg.com/split-type"></script>

const Port = () => {
    // GSAP 용
    const [currentSection, setCurrentSection] = useState('first');
    const [currentPort, setCurrentPort] = useState('port01');
    const [none, setNone] = useState('none')
    const [black, setBlack] = useState('none')
    const [color, setColor] = useState('white')
    const [textcolor, setTextColor] = useState('#000')
    const [chatcolor, setChatColor] = useState('#fff')

    // color 바뀔 때마다 색이 바뀜
    useEffect(() => {
        gsap.set('.split.t1', { y: 0, x: 0, opacity: 1 });
        gsap.set('.split.t2', { y: 0, x: 0, opacity: 1 });
        gsap.set('.split.t3', { y: 0, x: 0, opacity: 1 });
        gsap.set('.split.t4', { y: 0, x: 0, opacity: 1 });

        gsap.set('.i1', { y: 0, x: 0, opacity: 1 });
        gsap.set('.i2', { y: 0, x: 0, opacity: 1 });
        gsap.set('.i3', { y: 0, x: 0, opacity: 1 });
        gsap.set('.i4', { y: 0, x: 0, opacity: 1 });
        gsap.set('.i5', { y: 0, x: 0, opacity: 1 });

        gsap.set(".header button", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.set(".button ul li", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.set(".ham", { zIndex: 1, top: 0, position: "relative", height: "0px", duration: 0.8, ease: "power2.inOut" });

        gsap.set(".main h2", { zIndex: 1, top: 0, position: "relative", opacity: 0, height: "0", duration: 0.8, ease: "power2.inOut" });
        gsap.set(".main p", { zIndex: 1, top: 0, position: "relative", height: "0px", opacity: 0, duration: 0.8, ease: "power2.inOut" });

        gsap.set(".overlayup", { height: "0px", y: "0", opacity: 1, backgroundColor: color });
        gsap.set(".overlaydown", { height: "0px", y: "100%", opacity: 1, backgroundColor: color });

        // chat 바꾼 거 

        gsap.set("#section3", { height: "0", y: "0", opacity: 0, display: "none" });
        gsap.set(".comment_wrap", { backgroundColor: color })
        gsap.set(".top h2", { color: textcolor })
        gsap.set(".top", { borderBottom: `1px solid ${textcolor}` })
        gsap.set(".list", { borderBottom: `1px solid ${textcolor}` })
        gsap.set(".top button", { color: textcolor })
        gsap.set(".chatbox p", { backgroundColor: chatcolor, color: textcolor })
        gsap.set(".chatbox p button", { color: textcolor })
        gsap.set(".push div button", { backgroundColor: chatcolor, color: textcolor })
        gsap.set(".push input", { color: textcolor })
        gsap.set("#deletepassword", { backgroundColor: color })

        const targets = gsap.utils.toArray(".split");

        targets.forEach(target => {
            let SplitClient = new SplitType(target, { type: "lines, words, chars" });
            let lines = SplitClient.lines;
            let words = SplitClient.words;
            let chars = SplitClient.chars;
        })

    }, [color]);

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

    // port 들어가기 애니메이션 
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

    // 뒤로가기
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

    const Repleshow = () => {
        gsap.to('#section3', { height: "100vh", y: "0", opacity: 1, duration: 1, display: "flex" })
    }

    const [show, setShow] = useState(false);



    return (
        <>
            <div id="section1">
                <div className={currentSection === 'first' ? 'first' : 'first none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLDIS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4"> SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'three' ? 'three' : 'three none'}>
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
                <div className={currentSection === 'forth' ? 'forth' : 'forth none'}>
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
                <div className={currentSection === 'fifth' ? 'fifth' : 'fifth none'}>
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
                <div className={currentSection === 'sixth' ? 'sixth' : 'sixth none'}>
                    <div className="center__text">
                        <div className="split t1"><span>DIG</span>WHERE THE</div>
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
            </div>

            <Overlay black={black} />

            <div id='section2' className={none === 'none' ? 'none' : 'block'}>
                <div className={currentPort === 'port01' ? 'port01' : 'port01 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('first')}>BACK</button>
                                <button
                                    onClick={() => { Repleshow() }}
                                >Reple</button>
                            </div>
                            <Portbutton />
                        </div>
                        <div className="main">
                            <h2>ADD PLUS</h2>
                            <p>ADD PLUS 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg01"></div>
                    </div>
                </div>
                <div className={currentPort === 'port02' ? 'port02' : 'port02 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('three')}>BACK</button>
                                <button
                                    onClick={() => { Repleshow() }}

                                >Reple</button>
                            </div>
                            <Portbutton />
                        </div>
                        <div className="main">
                            <h2>ADD PLUS</h2>
                            <p>ADD PLUS 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg02"></div>
                    </div>
                </div>
                <div className={currentPort === 'port03' ? 'port03' : 'port03 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('forth')}>BACK</button>
                                <button
                                    onClick={() => { Repleshow() }}

                                >Reple</button>
                            </div>
                            <Portbutton />
                        </div>
                        <div className="main">
                            <h2>ADD PLUS</h2>
                            <p>ADD PLUS 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg03"></div>
                    </div>
                </div>
                <div className={currentPort === 'port04' ? 'port04' : 'port04 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('fifth')}>BACK</button>
                                <button
                                    onClick={() => { Repleshow() }}

                                >Reple</button>
                            </div>
                            <Portbutton />
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
                <div className={currentPort === 'port05' ? 'port05' : 'port05 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('sixth')}>BACK</button>
                                <button
                                    onClick={() => { Repleshow() }}

                                >Reple</button>
                            </div>
                            <Portbutton />
                        </div>
                        <div className="main">
                            <h2>ADD PLUS</h2>
                            <p>ADD PLUS 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg05"></div>
                    </div>
                </div>
            </div>

            <div id="section3">
                <Reple />
            </div>
        </>
    )
}

export default Port