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
                {/* <div className="intro">
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
                </div> */}

                <section className="content__Wrap">
                    <div className="content">
                        <div className="content__img img01">
                            <div className="content__img-inner"></div>
                        </div>
                        <div className="content__text">
                            <div className='head'>
                                <div className="content__back unbutton">버튼</div>
                                <span className="conent__desc thin">
                                    json 파일에서 정보를 가져오는 리액트 사이트입니다.
                                    카페 음료 추천을 주제로 랜덤 선택, 기분에 따른 추천 및 검색 기능을 구현하였고,
                                    앞서 제작한 유튜브 사이트를 참고하였습니다. 저는 전체적인
                                    디자인 작업을 맡았으며 json 데이터 파일 및
                                    검색 페이지를 제작하였습니다.
                                </span>
                                <h2 className="content__title thin">Youtube Site</h2>
                            </div>
                            <div className="content__info">
                                <div className="content__skill"></div>
                                <div className="content__made"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Main