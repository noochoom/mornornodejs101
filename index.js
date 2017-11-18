const express = require("express")

const app = express()

app.get("/",(req,res) => {
    res.send("hello eiei")
})

app.get('/user',(req,res) => {
    res.status(200).json({
        name:"Nontawat",
        NickName:"Non"
    })
})

app.listen(3002,() => {
    console.log("listen on port 3002")
})
