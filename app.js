const Express = require('express')
const App = Express()
const Dotenv = require('dotenv')
const Morgan = require('morgan')
const BodyParser = require('body-parser')
const Cors = require('cors')

const PORT = 7000

App.listen(PORT, () => { console.log(`Server running in port : ${ PORT }`) })

App.use(Cors())

// Routers
const RoutesList = require('./Routes/index')
App.use(RoutesList)


