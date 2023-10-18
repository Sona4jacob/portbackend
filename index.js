//import json server
const jsonserver = require('json-server')

//create a server app using jsonserver
const server = jsonserver.create()

//set up path for db.json file
const router = jsonserver.router('db.json')

//retuen a middleware used by json server
const middleware = jsonserver.defaults()

//setup a port number
const port = process.env.PORT || 4000

//middleware to use with the server
server.use(middleware)
server.use(router)

//to run the port
server.listen(port, () => {
    console.log(`Server is running on ${port}`)
    })