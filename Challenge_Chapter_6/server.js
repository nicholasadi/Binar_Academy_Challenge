const express = require("express")
const app = express()
const port = 3000
const {router} = require("./router/router")

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/",(req,res)=>{
  res.render("home")
})
app.get("/play-game",(req,res) =>{
  res.render("play-game")
})


app.use("/users",router)

app.listen(port,()=>{
  console.log(`this challenge execute on http://localhost:${port}`);
})