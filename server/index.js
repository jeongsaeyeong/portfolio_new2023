const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 2014;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Reple } = require("./model/Reple.js");
const { Counter } = require("./model/Counter.js");

app.listen(port, () => {
    mongoose
        .connect('mongodb+srv://jeongsaeyeong:Angel0516!@cluster0.2mnuoqi.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log("listening --> " + port)
            console.log("connect --> mongoDB")
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
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