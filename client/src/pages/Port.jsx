import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import SplitType from 'split-type';
import Header from '../components/Header/Header';
import ChatHeader from '../components/Chat/chat/Header';
import NavHeader from '../components/Chat/Nav/NavHeader';

const Port = () => {
    // GSAP 용
    const [currentSection, setCurrentSection] = useState('first');
    const [currentPort, setCurrentPort] = useState('port01');
    const [none, setNone] = useState('none')
    const [black, setBlack] = useState('none')
    const [color, setColor] = useState('white')
    const [textcolor, setTextColor] = useState('#000')
    const [chatcolor, setChatColor] = useState('#fff')
    const [show, setShow] = useState(false);

    const Setting = () => {
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
        gsap.set(".button #section04 .chatbutton", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.set(".button #section5 .button", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
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
        gsap.set(".top button ", { color: textcolor })
        gsap.set(".chatbox p", { backgroundColor: chatcolor, color: textcolor })
        gsap.set(".chatbox p button", { color: textcolor })
        gsap.set(".push div button", { backgroundColor: chatcolor, color: textcolor })
        gsap.set(".push input", { color: textcolor })
        gsap.set("#deletepassword", { backgroundColor: color })
    }

    // color 바뀔 때마다 색이 바뀜
    useEffect(() => {
        Setting();
    }, [color]);

    // port 들어가기 
    const showPort = (port) => {

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
        gsap.to(".button #section04 .chatbutton", { zIndex: 1, top: 0, position: "relative", height: "40px", display: "flex", delay: 0.5, duration: 0.3, ease: "power2.inOut" });
        gsap.to(".button #section5 .button", { zIndex: 1, top: 0, position: "relative", height: "40px", display: "flex", delay: 0.5, duration: 0.3, ease: "power2.inOut" });
        gsap.to(".ham", { zIndex: 1, top: 0, position: "relative", height: "30px", delay: 0.5, duration: 0.5, ease: "power2.inOut" });

        gsap.to(".main h2", { zIndex: 1, top: 0, position: "relative", height: "100%", opacity: 1, display: "block", delay: 1, duration: 0.5, ease: "power2.inOut" });
        gsap.to(".main p", { zIndex: 1, top: 0, position: "relative", height: "100%", opacity: 1, display: "block", delay: 1.8, duration: 0.5, ease: "power2.inOut" });
    };

    // 뒤로가기
    const backPage = (port) => {
        setShow(false)

        gsap.to(".header button .chatbutton", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".button #section04 .chatbutton", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".button #section5 .button", { zIndex: 1, top: 0, position: "relative", height: "0px", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".ham", { zIndex: 1, top: 0, position: "relative", height: "0px", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".main h2", { zIndex: 1, top: 0, position: "relative", opacity: 0, height: "0", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".main p", { zIndex: 1, top: 0, position: "relative", height: "0px", opacity: 0, display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".overlaydown", { height: "50%", duration: 0.8, ease: "power2.inOut" });

        gsap.to(".overlayup", { height: "0px", y: "0", opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.inOut" });
        gsap.to(".overlaydown", { height: "0px", y: "0", opacity: 1, duration: 0.8, delay: 1.2, ease: "power2.inOut" });

        setTimeout(() => {
            switch (port) {
                case 'first':
                    setNone('none')
                    setCurrentSection('first');
                    SplitText01()
                    break;

                case 'second':
                    setNone('none')
                    setCurrentSection('second');
                    SplitText02()
                    break;

                case 'third':
                    setNone('none')
                    setCurrentSection('third');
                    SplitText03()
                    break;

                case 'forth':
                    setNone('none')
                    setCurrentSection('forth');
                    SplitText04()
                    break;

                case 'fifth':
                    setNone('none')
                    setCurrentSection('fifth');
                    SplitText05()
                    break;

                default:
                    setCurrentSection('first');
            }
        }, 1000)

    }

    // 토글메뉴...인데 좀 고려를,, 수정을,, 
    const toggleMenu = (e) => {
        e.preventDefault();

        const ulElements = document.querySelectorAll('.ham div ul');

        ulElements.forEach((ulElement) => {
            ulElement.style.display = ulElement.style.display === 'block' ? 'none' : 'block';
        });
    };

    const SplitText01 = () => {
        const targets = gsap.utils.toArray(".split");

        targets.forEach(target => {
            let SplitClient = new SplitType(target, { type: "lines, words, chars" });
            let chars = SplitClient.chars;

            // 초기 상태 설정
            gsap.set(chars, { opacity: 0, scale: 2, color: "#000000" });

            chars.forEach(function (char) {
                gsap.to(char, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: Math.random() // 랜덤 딜레이 설정
                });
            });
        }, []);
    }

    const SplitText02 = () => {
        const targets = gsap.utils.toArray(".split");

        targets.forEach(target => {
            let SplitClient = new SplitType(target, { type: "lines, words, chars" });
            let chars = SplitClient.chars;

            gsap.set(chars, { opacity: 0, scale: 2, y: 30, x: 30, rotation: 3, color: "#FFB4B0" });

            chars.forEach(function (char, index) {
                gsap.to(char, {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: () => Math.sin(index * 0.6) * 30,
                    rotation: 360,
                    duration: 2,
                    ease: "elastic.out(1, 0.75)",
                    delay: Math.random() * 1
                });
            });
        }, []);
    };

    const SplitText03 = () => {
        const targets = gsap.utils.toArray(".split");

        targets.forEach(target => {
            // 부모 엘리먼트에 position: relative 추가
            gsap.set(target, { position: "relative" });

            let SplitClient = new SplitType(target, { type: "lines" });
            let lines = SplitClient.lines;

            lines.forEach(function (line, index) {
                gsap.set(line, { position: "relative" });

                gsap.to(line, {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4.out",
                    delay: index * 0.5,
                });
            });

            gsap.to(target, {
                backgroundPosition: "0% 100%",
                color: "#ffffff",
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5,
                onComplete: () => {
                    gsap.to(target, {
                        color: chatcolor,
                        duration: 1.5,
                        ease: "power4.out",
                    });
                },
            });
        });
    };

    const SplitText04 = () => {
        const targets = gsap.utils.toArray(".split");

        targets.forEach(target => {
            let SplitClient = new SplitType(target, { type: "lines, words, chars" });
            let chars = SplitClient.chars;

            // 초기 상태 설정
            gsap.set(chars, { color: "#BA985B" });

            chars.forEach(function (char, index) {
                gsap.to(char, {
                    color: "#73e469", // 시작 색상을 투명으로 설정
                    duration: 2,
                    delay: index * 0.1, // 각 글자마다 0.1초씩 지연
                    repeat: -1, // 무한 반복
                    yoyo: true, // 역방향으로도 재생되도록 설정
                });
            });
        }, []);
    };

    const SplitText05 = () => {
        const targets = gsap.utils.toArray(".split");

        targets.forEach(target => {
            let SplitClient = new SplitType(target, { type: "lines, words, chars" });
            let chars = SplitClient.chars;

            gsap.set(chars, { transformOrigin: "left center", rotationY: -90, opacity: 0, color: "#000000" });

            chars.forEach(function (char) {
                gsap.to(char, {
                    rotationY: 0,
                    opacity: 1,
                    duration: 1.5,
                    delay: Math.random(),
                });
            });
        }, []);
    }

    useEffect(() => {
        SplitText01();
    }, []);

    return (
        <>
            <Header backgroundColor={color} color={textcolor} showPort={showPort} setColor={setColor} setTextColor={setTextColor} />
            <div id="section1">
                <div className={currentSection === 'first' ? 'first' : 'first none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#BA985B"); setChatColor("#BA985B") }}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'second' ? 'second' : 'second none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'third' ? 'third' : 'third none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'forth' ? 'forth' : 'forth none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4"> SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'fifth' ? 'fifth' : 'fifth none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERETHE</div>
                        <div className="split t2">GOLDISUNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>youtube</span></div></div>
                    </div>
                </div>
            </div>

            <div className="overlayup"></div>
            <div className="overlaydown"></div>

            <div id='section2' className={none === 'none' ? 'none' : 'block'}>
                <div className={currentPort === 'port01' ? 'port01' : 'port01 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('first')}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader />
                                <NavHeader />
                            </div>
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
                                <button onClick={() => backPage('second')}>BACK</button>
                            </div>
                            <ChatHeader />
                            <NavHeader />
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
                                <button onClick={() => backPage('third')}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader />
                                <NavHeader />
                            </div>
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
                                <button onClick={() => backPage('forth')}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader />
                                <NavHeader />
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
                <div className={currentPort === 'port05' ? 'port05' : 'port05 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('fifth')}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader />
                                <NavHeader />
                            </div>
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
            {/* <div>
                <div className={heart === 'content' ? 'content' : 'content none'}>
                    <Heart />
                </div>
            </div> */}
        </>
    )
}

export default Port