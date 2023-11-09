// import json server
const jsonserver=require('json-server')


//server creation
const server=jsonserver.create()


//parse json data to js (we use an in built middleware)

const middleware=jsonserver.defaults()

//create a router to send data to db,json (import this after middleware)
const router=jsonserver.router("db.json")

//port
const PORT=process.env.PORT || 4000

//use
server.use(middleware)
server.use(router)

//listen
server.listen(PORT,()=>{
    console.log(`Json Server Started at Port Number ${PORT}`);
})