import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import SplitType from 'split-type';
import Header from '../components/Header/Header';
import ChatHeader from '../components/Chat/chat/Header';

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

        gsap.set(".box .header", { opacity: 0, zIndex: -1 });

        gsap.set(".main h2", { zIndex: 1, top: 0, position: "relative", opacity: 0, height: "0", duration: 0.8, ease: "power2.inOut" });
        gsap.set(".main p", { zIndex: 1, top: 0, position: "relative", height: "0px", opacity: 0, duration: 0.8, ease: "power2.inOut" });

        gsap.set(".overlayup", { height: "0px", y: "0", opacity: 1, backgroundColor: color, zIndex: 900 });
        gsap.set(".overlaydown", { height: "0px", y: "100%", opacity: 1, backgroundColor: color, zIndex: 900 });

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

        gsap.to('.box .header', { opacity: 1, duration: 0.8, ease: "power4.inOut", zIndex: 1000 });

        gsap.to(".overlayup", { height: "0", y: "0", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".overlaydown", { height: "0", y: "0", duration: 0.8, ease: "power2.inOut" });

        gsap.to(".main h2", { zIndex: 1, top: 0, position: "relative", height: "100%", opacity: 1, display: "block", delay: 1, duration: 0.5, ease: "power2.inOut" });
        gsap.to(".main p", { zIndex: 1, top: 0, position: "relative", height: "100%", opacity: 1, display: "block", delay: 1.8, duration: 0.5, ease: "power2.inOut" });
        gsap.set(".bod .header", { zIndex: 1, position: "relative", height: "0px", duration: 0.8, ease: "power2.inOut" });

    };

    // 뒤로가기
    const backPage = (port) => {
        setShow(false)

        gsap.to(".box .header", { opacity: 0, duration: 0.8, ease: "power4.inOut", zIndex: -1 });
        gsap.to(".main h2", { zIndex: 1, top: 0, position: "relative", opacity: 0, height: "0", display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".main p", { zIndex: 1, top: 0, position: "relative", height: "0px", opacity: 0, display: "none", duration: 0.8, ease: "power2.inOut" });
        gsap.to(".overlayup", { height: "50%", duration: 0.8, ease: "power2.inOut" });
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

            gsap.set(chars, { color: "#BA985B" });

            chars.forEach(function (char, index) {
                gsap.to(char, {
                    color: "#73e469",
                    duration: 2,
                    delay: index * 0.1,
                    repeat: -1,
                    yoyo: true,
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
            <Header backgroundColor={color} color={textcolor} showPort={showPort} setColor={setColor} setTextColor={setTextColor} backPage={backPage} />
            <div id="section1">
                <div className={currentSection === 'first' ? 'first' : 'first none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>Node.js</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>Youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>PHP</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#BA985B"); setChatColor("#BA985B") }}><div><span>Port04</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>Port05</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'second' ? 'second' : 'second none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>Node.js</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>Youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>PHP</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>Port04</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>Port05</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'third' ? 'third' : 'third none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>Node.js</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>Youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>PHP</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>Port04</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>Port05</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'forth' ? 'forth' : 'forth none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERE THE</div>
                        <div className="split t2">GOLD IS UNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4"> SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>Node.js</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>Youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>PHP</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>Port04</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>Port05</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'fifth' ? 'fifth' : 'fifth none'}>
                    <div className="center__text">
                        <div className="split t1">DIG WHERETHE</div>
                        <div className="split t2">GOLDISUNLESS</div>
                        <div className="split t3">YOU NEED</div>
                        <div className="split t4">SOME EXERCISE</div>
                        <div className="img i1" onClick={() => { showPort('port01'); setColor('#fff'); setTextColor("#000"); setChatColor("#cccccc") }}><div><span>Node.js</span></div></div>
                        <div className="img i2" onClick={() => { showPort('port02'); setColor('#D9F1F1'); setTextColor("#ff8781"); setChatColor("#fff") }}><div><span>Youtube</span></div></div>
                        <div className="img i3" onClick={() => { showPort('port03'); setColor('#CBB4A7'); setTextColor("#fff"); setChatColor("#444032") }}><div><span>PHP</span></div></div>
                        <div className="img i4" onClick={() => { showPort('port04'); setColor('#33392F'); setTextColor("#fff"); setChatColor("#BA985B") }}><div><span>Port04</span></div></div>
                        <div className="img i5" onClick={() => { showPort('port05'); setColor('#E1E1E1'); setTextColor("#000"); setChatColor("#fff") }}><div><span>Port05</span></div></div>
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
                                <button onClick={() => backPage('first')} style={{ color: textcolor }}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader color={textcolor} backPage={backPage} />
                            </div>
                        </div>
                        <div className="main">
                            <h2>ADD PLUS</h2>
                            <p>대학, 어디든 갈 수 있다!</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg01">
                            <ul className='button'>
                                <li><a href="https://github.com/jeongsaeyeong/ADD-PLUS">GitHub</a></li>
                                <li><a href="/">Site</a></li>
                                <li><a href="https://www.notion.so/ADD-00c0a95e984644ae88acf7a657367ffe?pvs=4">Notion</a></li>
                            </ul>
                            <p className="imgtext">
                                MAKE: React, sass, Node.js, MongoDB, Firebase<br />
                                Position: 회원가입, 로그인, 커뮤니티 개발<br /><br />
                                <span>
                                    ADD PLUS는 3인 1조로 제작한 사이트로, 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.
                                    Node.js와 MongoDB, Firebase를 사용하여 client와 server를 구축하였습니다.
                                    저는 ADD-PLUS를 직접 기획하여 능동적으로 팀원을 모았으며, 전체 디렉팅과 업무 분담도 맡았습니다.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={currentPort === 'port02' ? 'port02' : 'port02 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('second')} style={{ color: textcolor }}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader color={textcolor} backPage={backPage} />
                            </div>
                        </div>
                        <div className="main">
                            <h2>Silence Youtube</h2>
                            <p>가사 없는 노래들을 추천하는 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg02">
                            <ul className='button'>
                                <li><a href="https://github.com/jeongsaeyeong/ADD-PLUS">GitHub</a></li>
                                <li><a href="https://main--sunny-tanuki-99438d.netlify.app/">Site</a></li>
                            </ul>
                            <p className="imgtext">
                                MAKE: React, sass, YoutubeApI<br />
                                Position: 기획, 개발<br /><br />
                                <span>
                                    Silence Youtube는 가사 없는 음악을 다루는 사이트입니다.
                                    Youtube API를 사용하여 검색, 유튜브 채널 등의 기능을 구현하였습니다.
                                    React, sass, YoutubeAPI 등을 사용합니다.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={currentPort === 'port03' ? 'port03' : 'port03 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('third')} style={{ color: textcolor }}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader color={textcolor} backPage={backPage} />
                            </div>
                        </div>
                        <div className="main">
                            <h2>CJJD</h2>
                            <p>취중진담은 알코올 커뮤니티입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg03">
                            <ul className='button'>
                                <li><a href="https://github.com/jeongsaeyeong/CJJD">GitHub</a></li>
                                <li><a href="http://zeroin01.dothome.co.kr/php03-CJJD/php/main/main.php">Site</a></li>
                                <li><a href="https://www.notion.so/331be5929e64497f82d578cf1fd949fb?pvs=4">Notion</a></li>
                            </ul>
                            <p className="imgtext">
                                MAKE: PHP, HTML, CSS, SQL<br />
                                Position: 기획, 마이페이지, 로그인, 회원가입 등<br /><br />
                                <span>
                                    취중진담은 3인 1조로 제작한 사이트로, 알코올 커뮤니티의 기능을 갖춘 사이트입니다.
                                    SQL을 사용하여 데이터베이스에 데이터를 올리고 불러와 적절히 사용하였습니다.
                                    저는 기획서를 작성 및 일정관리를 주도했으며, 마이페이지 제작과 로그인, 회원가입을 제작하였습니다.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={currentPort === 'port04' ? 'port04' : 'port04 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('forth')} style={{ color: textcolor }}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader color={textcolor} backPage={backPage} />
                            </div>
                        </div>
                        <div className="main">
                            <h2>ADD PLUS</h2>
                            <p>ADD PLUS 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg04">
                            <ul className='button'>
                                <li><a href="/">GitHub</a></li>
                                <li><a href="/">Site</a></li>
                            </ul>
                            <p className="imgtext"></p>
                        </div>
                    </div>
                </div>
                <div className={currentPort === 'port05' ? 'port05' : 'port05 none'}>
                    <div className="box">
                        <div className="header">
                            <div>
                                <button onClick={() => backPage('fifth')} style={{ color: textcolor }}>BACK</button>
                            </div>
                            <div className='button'>
                                <ChatHeader color={textcolor} backPage={backPage} />
                            </div>
                        </div>
                        <div className="main">
                            <h2>ADD PLUS</h2>
                            <p>ADD PLUS 대학 종합 정보 포털 및 커뮤니티의 기능을 갖춘 사이트입니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="img portimg05">
                            <ul className='button'>
                                <li><a href="/">GitHub</a></li>
                                <li><a href="/">Site</a></li>
                            </ul>
                            <p className="imgtext"></p>
                        </div>
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