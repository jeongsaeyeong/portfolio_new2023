import axios from 'axios';
import React, { useEffect, useState } from 'react'
import gsap from 'gsap';

const Reple = () => {
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

    const Replehide = () => {
        gsap.to('#section3', { height: "0", y: "0", opacity: 0, duration: 1, display: "none" })
    }

    useEffect(() => {
        axios.post("/api/reple/list")
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setList([...res.data.list]);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    // 댓글 삭제 

    const [show, setShow] = useState(false);
    const [deletepassword, setDeletepassword] = useState('');

    const onDelete = (e) => {

    }

    return (
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
                                type="password"
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
    )
}

export default Reple