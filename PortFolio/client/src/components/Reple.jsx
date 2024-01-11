import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { slide, curve } from '../js/anim';
import gsap from 'gsap';
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