var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000
const db = require("./models");

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

db.sequelize.sync().then(function() {

  app.listen(port, function() {
    console.log('Server is running on port: ' + port)
  });

});
