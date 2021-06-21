//npm i sequelize-cli -g
//npm i sequelize
// sequelize init
// sequelize cli commands we executed:--
// sequelize db:create <-- takes development config for database creation
// sequelize model:generate --name User --attributes name:string,role:string,email:integer

// async function main()
// {
//     await sequelize.sync({alter:true})
// }
// main()


const {sequelize} = require('./models')
const express = require('express')
const homeRoute =  require('./routes/router')
const postRoute =  require('./routes/router')
const specificUserRoute =  require('./routes/router')
const createPostRoute =  require('./routes/router')
// import router from './routes/router'
// const Router = express.Router()
// const homeRoute = Router.get("/",async (req,res)=>{
//     res.send("<h1>Home Route</h1>")
//     return
// })
// const postRoute = Router.get("/post",async (req,res)=>{
//     res.send("<h1>Post Route</h1>")
//     return
// }).post("/post",async (req,res)=>{
//     console.log(req.body)
//     res.json({msg:"message receivded"})
//     return
// })
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(homeRoute)
app.use(postRoute)
app.use(specificUserRoute)
app.use(createPostRoute)



app.listen(5000,async ()=>{
    console.log("server running on port 5000---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    await sequelize.sync({alter:true})
    console.log("Database synced")
})
