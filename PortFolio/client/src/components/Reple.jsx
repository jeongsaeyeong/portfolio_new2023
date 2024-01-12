import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Reple = () => {

    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    }

    // 댓글
    const [content, setContent] = useState('');
    const [password, setPassword] = useState('');

    // 댓글 제출 
    const onSubmit = (e) => {
        e.preventDefault();

        if (content === "" || password === "") {
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
                    setContent('')
                    setPassword('')

                    fetchComments();
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
        fetchComments();
    }, []);

    const fetchComments = () => {
        axios.post("/api/reple/list")
            .then((res) => {
                if (res.data.success) {
                    setList([...res.data.list]);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // 댓글 삭제 

    const [show, setShow] = useState(false);
    const [deletepassword, setDeletepassword] = useState('');
    const [repleId, setRepleId] = useState('')

    useEffect(() => {
        console.log(repleId)
    }, [repleId])

    const onDelete = (e) => {
        e.preventDefault();

        if (deletepassword === '') {
            alert("비밀번호를 입력해주세요.")
        }

        let body = {
            password: deletepassword,
            repleId: repleId
        }

        axios.post("/api/reple/delete", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글 삭제가 완료되었습니다.")
                    setDeletepassword('')
                    fetchComments();
                    setShow(false)
                }
            })
            .catch((err) => {
                console.error(err);
                alert("비밀번호를 확인해주세요.");
            });
    }

    return (
        <motion.div variants={curve} initial="initial" animate="enter" exit="exit" id="section3">
            <div className="comment_wrap">
                <div className="top">
                    <h2>Comment</h2>
                </div>
                <div className="list">
                    {list.map((item, key) => {
                        const isLeft = item.repleNum % 2 === 1;
                        console.log(item)
                        return (
                            <div className={isLeft ? "chatbox boxleft" : "chatbox boxright"} key={key}>
                                <p className={isLeft ? 'left' : 'right'}>
                                    {item.content}
                                    <button
                                        onClick={() => { setRepleId(item._id); setShow(!show); }}
                                    >
                                        <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M905.92 237.76a32 32 0 0 0-52.48 36.48A416 416 0 1 1 96 512a418.56 418.56 0 0 1 297.28-398.72 32 32 0 1 0-18.24-61.44A480 480 0 1 0 992 512a477.12 477.12 0 0 0-86.08-274.24z" fill="#727272" /><path d="M630.72 113.28A413.76 413.76 0 0 1 768 185.28a32 32 0 0 0 39.68-50.24 476.8 476.8 0 0 0-160-83.2 32 32 0 0 0-18.24 61.44zM489.28 86.72a36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 37.12 37.12 0 0 0 10.56-6.72A32 32 0 0 0 544 64a33.6 33.6 0 0 0-9.28-22.72A32 32 0 0 0 505.6 32a20.8 20.8 0 0 0-5.76 1.92 23.68 23.68 0 0 0-5.76 2.88l-4.8 3.84a32 32 0 0 0-6.72 10.56A32 32 0 0 0 480 64a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56zM726.72 297.28a32 32 0 0 0-45.12 0l-169.6 169.6-169.28-169.6A32 32 0 0 0 297.6 342.4l169.28 169.6-169.6 169.28a32 32 0 1 0 45.12 45.12l169.6-169.28 169.28 169.28a32 32 0 0 0 45.12-45.12L557.12 512l169.28-169.28a32 32 0 0 0 0.32-45.44z" fill="#727272" /></svg>
                                    </button>
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
                            type="password"
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
        </motion.div>
    )
}

export default Reple