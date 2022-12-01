import xpress from 'express'
import dotenv from 'dotenv'
// import { connectDb } from './config/db';
import bodyParser from 'body-parser'
import validateToken from './lib/validateToken';
import moment from 'moment';

import users from './controller/usersCtrl'
import login from './controller/login'
import positions from './controller/positionsCtrl'
import employees from './controller/employeesCtrl'
import sallarys from './controller/sallarysCtrl'

// const xpress = require("express")
// const dotenv = require("dotenv")
// const { connectDb } = require("./config/db")
// const bodyParser = require("body-parser")
// const validateToken = require("./lib/validateToken")
// const moment = require("moment")

// const users = require("./controller/usersCtrl")
// const login = require("./controller/login")
// const positions = require("./controller/positionsCtrl")
// const employees = require("./controller/employeesCtrl")
// const sallarys = require("./controller/sallarysCtrl")


let app = xpress()
dotenv.config()

var server   = require('http').Server(app);
var io       = require('socket.io')(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
  req.io = io;
  next();
});

let MONGODB_URL = process.env.MONGO_URL;

mongoose.Promise = global.Promise;
mongoose
    .connect(MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        if (process.env.NODE_ENV == 'development') {
            console.log("%s Connected to", chalk.green('✓'), MONGODB_URL);
            console.log('Press CTRL + C to stop the process\n');
        }
    })
    .catch((err) => {
        console.error("App starting error:", err.message);
        process.exit(1);
    });

mongoose.set('debug', process.env.NODE_ENV == 'development' ? true : false);

app.get('/', (req, res)=>{
  var message = 'API Works!!'
  res.send(message);
})

app.get('/tes', (req, res)=>{
  var message = moment()
  res.send(message);
})
// app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/api/login', login)

app.use('/api/v1/', validateToken)

app.use('/api/v1/users', users)
app.use('/api/v1/positions', positions)
app.use('/api/v1/employees', employees)
app.use('/api/v1/sallarys', sallarys)

io.on('connection', function (socket) {
  socket.emit('tes')
});

var server = app.listen(process.env.PORT || 5400, function () { 
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  