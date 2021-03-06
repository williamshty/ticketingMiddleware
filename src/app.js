const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')
// const Op = sequelize.Op

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routs')(app)
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log('Server Started on port ' + config.port)
  })
