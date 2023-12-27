import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import axios from 'axios';

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

    // 토글메뉴...인데 좀 고려를,, 수정을,, 
    const toggleMenu = (e) => {
        e.preventDefault();

        const ulElements = document.querySelectorAll('.ham div ul');

        ulElements.forEach((ulElement) => {
            ulElement.style.display = ulElement.style.display === 'block' ? 'none' : 'block';
        });
    };

    // const Split = () => {
    //     const splitText = (element) => {
    //         const text = element.textContent;
    //         const words = text.split(' ');

    //         element.innerHTML = '';

    //         words.forEach((word, index) => {
    //             const wordWrapper = document.createElement('div');

    //             const characters = word.split('');
    //             characters.forEach((char) => {
    //                 const charSpan = document.createElement('span');
    //                 charSpan.textContent = char;
    //                 wordWrapper.appendChild(charSpan);
    //             });

    //             if (index < words.length - 1) {
    //                 wordWrapper.innerHTML += ' ';
    //             }

    //             element.appendChild(wordWrapper);
    //         });
    //     };

    //     const applySplit = (className) => {
    //         const elements = document.querySelectorAll(`.${className}`);
    //         elements.forEach((element) => splitText(element));
    //     };

    //     applySplit('t1');
    //     applySplit('t2');
    //     applySplit('t3');
    //     applySplit('t4');
    // };


    const Repleshow = () => {
        gsap.to('#section3', { height: "100vh", y: "0", opacity: 1, duration: 1, display: "flex" })
    }

    const Replehide = () => {
        gsap.to('#section3', { height: "0", y: "0", opacity: 0, duration: 1, display: "none" })
    }

    // 댓글
    const [content, setContent] = useState('');
    const [password, setPassword] = useState('');

    // 댓글 제출 
    const onSubmit = (e) => {
        e.preventDefault();

        if (content === "" && password === "") {
            return alert("빈칸을 모두 채워주세요!")
        }

        let body = {
            content: content,
            password: password
        }

        axios.post("/api/reple/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글 작성이 완료되었습니다.")
                } else {
                    alert("댓글 작성이 실패하였습니다.")
                }
            })
            .catch((err) => {
                console.error(err);
                alert("댓글 작성 중 에러가 발생했습니다.");
            });
    }

    // 댓글 불러오기
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.post("/api/reple/list")
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setList([...res.data.list]);
                }
            })
            .catch((err) => {
                alert("요청 실패~")
                console.log(err)
            })
    }, []);

    // 댓글 삭제 

    const [show, setShow] = useState(false);
    const [deletepassword, setDeletepassword] = useState('');

    const onDelete = (e) => {

    }


    return (
        <>
            <div id="section1">
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

            <div className="overlayup"></div>
            <div className="overlaydown"></div>
            <div className={black === 'black' ? 'black' : 'black none'}>
                <div className="up"></div>
                <div className="down"></div>
            </div>

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
                <div className={currentPort === 'port05' ? 'port05' : 'port05 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('sixth')}>BACK</button>
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
                        <div className="img portimg05"></div>
                    </div>
                </div>
            </div>

            <div id="section3">
                <div className="comment_wrap">
                    <div className="top">
                        <h2>Comment</h2>
                        <button
                            onClick={() => { Replehide() }}
                        >x</button>
                    </div>
                    <div className="list">
                        {list.map((item, key) => {
                            const isLeft = item.repleNum % 2 === 1;

                            return (
                                <div className={isLeft ? "chatbox boxleft" : "chatbox boxright"} key={key}>
                                    <p className={isLeft ? 'left' : 'right'}>
                                        {item.content}
                                        <button
                                            onClick={() => setShow(!show)}
                                        >x</button>

                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="push">

                        <div className="write">
                            <div>
                                <input
                                    type="text"
                                    id='password'
                                    value={password}
                                    placeholder='비밀번호를 입력해주세요'
                                    onChange={(e) => {
                                        setPassword(e.currentTarget.value)
                                    }}
                                />
                                <input
                                    type="text"
                                    id='content'
                                    value={content}
                                    placeholder='내용을 입력해주세요'
                                    onChange={(e) => {
                                        setContent(e.currentTarget.value)
                                    }}
                                />
                            </div>

                            <button
                                onClick={(e) => {
                                    onSubmit(e);
                                }}
                            >SEND</button>
                        </div>

                        <div className={`delete ${show ? 'show' : 'none'}`}>
                            <input
                                type="text"
                                id='deletepassword'
                                value={deletepassword}
                                placeholder='비밀번호를 입력해주세요'
                                onChange={(e) => {
                                    setDeletepassword(e.currentTarget.value)
                                }}
                            />
                            <div>
                                <button
                                    onClick={(e) => {
                                        onDelete(e);
                                    }}
                                >SEND</button>

                                <button
                                    onClick={() => { setShow(false) }}
                                >NOPE</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Port