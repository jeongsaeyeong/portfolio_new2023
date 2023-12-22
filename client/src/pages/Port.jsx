import React, { useEffect, useState } from 'react'
import gsap from 'gsap';

const Port = () => {
    const [currentSection, setCurrentSection] = useState('first');
    const [currentPort, setCurrentPort] = useState('port01');
    const [none, setNone] = useState('none')

    const showPort = (port) => {
        setNone('block')
        setCurrentPort(port);
    };

    const backPage = (port) => {
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
    }

    return (
        <>
            <div id="section1">
                <div className={currentSection === 'first' ? 'first' : 'first none'}>
                    {/* <header>
                        <p>PortFolio</p>
                    </header> */}
                    <div className="center__text">
                        <div className="split t1"><span>DIG</span> WHERE THE</div>
                        <div className="split t2">GOLD<span>IS UNLESS</span></div>
                        <div className="split t3"><span>YOU</span> NEED<span></span></div>
                        <div className="split t4"> SOME<span>EXERCISE</span></div>
                        <div className="img i1" onClick={() => showPort('port01')}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => showPort('port02')}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => showPort('port03')}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => showPort('port04')}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => showPort('port05')}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'three' ? 'three' : 'three none'}>
                    <div className="center__text">
                        <div className="split t1"><span>DIG</span> WHERE THE</div>
                        <div className="split t2">GOLD<span>IS UNLESS</span></div>
                        <div className="split t3"><span>YOU</span> NEED<span></span></div>
                        <div className="split t4"> SOME<span>EXERCISE</span></div>
                        <div className="img i1" onClick={() => showPort('port01')}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => showPort('port02')}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => showPort('port03')}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => showPort('port04')}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => showPort('port05')}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'forth' ? 'forth' : 'forth none'}>
                    <div className="center__text">
                        <div className="split t1"><span>DIG</span> WHERE THE</div>
                        <div className="split t2">GOLD<span>IS UNLESS</span></div>
                        <div className="split t3"><span>YOU</span> NEED<span></span></div>
                        <div className="split t4"> SOME<span>EXERCISE</span></div>
                        <div className="img i1" onClick={() => showPort('port01')}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => showPort('port02')}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => showPort('port03')}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => showPort('port04')}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => showPort('port05')}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'fifth' ? 'fifth' : 'fifth none'}>
                    <div className="center__text">
                        <div className="split t1"><span>DIG</span> WHERE THE</div>
                        <div className="split t2">GOLD<span>IS UNLESS</span></div>
                        <div className="split t3"><span>YOU</span> NEED<span></span></div>
                        <div className="split t4"> SOME<span>EXERCISE</span></div>
                        <div className="img i1" onClick={() => showPort('port01')}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => showPort('port02')}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => showPort('port03')}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => showPort('port04')}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => showPort('port05')}><div><span>youtube</span></div></div>
                    </div>
                </div>
                <div className={currentSection === 'sixth' ? 'sixth' : 'sixth none'}>
                    <div className="center__text">
                        <div className="split t1"><span>DIG</span>WHERE THE</div>
                        <div className="split t2">GOLD<span>IS UNLESS</span></div>
                        <div className="split t3"><span>YOU</span> NEED<span></span></div>
                        <div className="split t4"> SOME<span>EXERCISE</span></div>
                        <div className="img i1" onClick={() => showPort('port01')}><div><span>youtube</span></div></div>
                        <div className="img i2" onClick={() => showPort('port02')}><div><span>youtube</span></div></div>
                        <div className="img i3" onClick={() => showPort('port03')}><div><span>youtube</span></div></div>
                        <div className="img i4" onClick={() => showPort('port04')}><div><span>youtube</span></div></div>
                        <div className="img i5" onClick={() => showPort('port05')}><div><span>youtube</span></div></div>
                    </div>
                </div>
            </div>

            <div id='section2' className={none === 'none' ? 'none' : 'block'}>
                <div className={currentPort === 'port01' ? 'port01' : 'port01 none'}>
                    <p>첫 번째</p>
                    <button onClick={() => backPage('first')}>뒤로가기</button>
                </div>
                <div className={currentPort === 'port02' ? 'port02' : 'port02 none'}>
                    <p>두 번째</p>
                    <button onClick={() => backPage('three')}>뒤로가기</button>
                </div>
                <div className={currentPort === 'port03' ? 'port03' : 'port03 none'}>
                    <p>세 번째</p>
                    <button onClick={() => backPage('forth')}>뒤로가기</button>
                </div>
                <div className={currentPort === 'port04' ? 'port04' : 'port04 none'}>
                    <p>네 번째</p>
                    <button onClick={() => backPage('fifth')}>뒤로가기</button>
                </div>
                <div className={currentPort === 'port05' ? 'port05' : 'port05 none'}>
                    <p>다섯 번째</p>
                    <button onClick={() => backPage('sixth')}>뒤로가기</button>
                </div>
            </div>
        </>
    )
}

export default Port