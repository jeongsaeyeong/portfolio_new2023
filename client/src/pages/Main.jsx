import React from 'react'

const Main = () => {
    return (
        <div id="port_Wrap">
            <header id="haeder">
                <h3>Portfolio</h3>
                <div>
                    <ul>
                        <li><a href="/">Article</a></li>
                        <li><a href="/">Github</a></li>
                        <li><a href="/">Notion</a></li>
                    </ul>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="/">1</a></li>
                        <li><a href="/">2</a></li>
                        <li><a href="/">3</a></li>
                        <li><a href="/">4</a></li>
                        <li><a href="/">5</a></li>
                        <li><a href="/">6</a></li>
                    </ul>
                </div>
                <div className='connect'>
                    <ul>
                        <li><a href="/">connect : jeongsaeyeong@gmail.com</a></li>
                    </ul>
                </div>
            </header>
            <main id="main">
                <div className="intro">
                    <div className="intro_text regular">YOUTUBE</div>
                    <div className="intro_img img01"></div>
                    <div className="intro_text regular">MUSIC</div>
                    <div className="intro_text">ADDPLUS</div>
                    <div className="intro_img img02"></div>
                    <div className="intro_text">PHPSITE</div>
                    <div className="intro_img img03"></div>
                    <div className="intro_text thin">CJJD</div>
                    <div className="intro_text">NODE</div>
                    <div className="intro_img img04"></div>
                    <div className="intro_text thin">BLOG</div>
                    <div className="intro_img img05"></div>
                    <div className="intro_text">CHAT STIE</div>
                    <div className="intro_img img06"></div>
                </div>
            </main>
        </div>
    )
}

export default Main