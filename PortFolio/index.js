const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Reple } = require("./server/model/Reple.js");
const { Counter } = require("./server/model/Counter.js");

app.listen(port, '0.0.0.0', () => {
    mongoose
        .connect('mongodb+srv://jeongsaeyeong:Angel0516!@cluster0.2mnuoqi.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log(`Server is listening at http://0.0.0.0:${port}`);
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error(err);
        });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

app.post("/api/reple/submit", (req, res) => {
    let temp = {
        password: req.body.password,
        content: req.body.content
    }
    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.repleNum = counter.repleNum;
            const RepleSubmit = new Reple(temp)
            RepleSubmit.save()
                .then(() => {
                    Counter.updateOne({ name: "counter" }, { $inc: { repleNum: 1 } }).then(() => {
                        res.status(200).json({ success: true });
                    })
                })
                .catch((err) => {
                    console.log(err)
                    res.status(400).json({ success: false });
                })
        })
})

app.post("/api/reple/list", (req, res) => {
    Reple
        .find()
        .exec()
        .then((result) => {
            res.status(200).json({ success: true, list: result })
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json({ success: false });
        })
})


app.post("/api/reple/delete", (req, res) => {
    const { repleId, password } = req.body;

    // 클라이언트로부터 받은 데이터의 유효성 검사
    if (!repleId || !password) {
        return res.status(400).json({ success: false, error: "Invalid request data" });
    }

    Reple
        .findOne({ _id: repleId })
        .exec()
        .then((reple) => {
            if (reple) {
                // 댓글이 존재하면 비밀번호 확인 후 삭제
                if (reple.password === password) {
                    Reple
                        .deleteOne({ _id: repleId })
                        .exec()
                        .then((result) => {
                            if (result.deletedCount === 1) {
                                res.status(200).json({ success: true });
                            } else {
                                res.status(500).json({ success: false, error: "Failed to delete reple" });
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            res.status(500).json({ success: false, error: "Internal server error" });
                        });
                } else {
                    res.status(401).json({ success: false, error: "Invalid password" });
                }
            } else {
                res.status(404).json({ success: false, error: "Reple not found" });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, error: "Internal server error" });
        });
});
