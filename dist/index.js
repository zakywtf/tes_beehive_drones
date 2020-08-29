"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _db = require("./config/db");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _validateToken = _interopRequireDefault(require("./lib/validateToken"));

var _moment = _interopRequireDefault(require("moment"));

var _usersCtrl = _interopRequireDefault(require("./controller/usersCtrl"));

var _login = _interopRequireDefault(require("./controller/login"));

var _categoryCtrl = _interopRequireDefault(require("./controller/categoryCtrl"));

var _articleCtrl = _interopRequireDefault(require("./controller/articleCtrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  req.io = io;
  next();
});
app.get('/', function (req, res) {
  var message = 'Hello World. This is my articles.!!';
  res.send(message);
});
app.get('/tes', function (req, res) {
  var message = (0, _moment["default"])();
  res.send(message);
}); // app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/api/login', _login["default"]);
app.use('/api/v1/', _validateToken["default"]);
app.use('/api/v1/users', _usersCtrl["default"]);
app.use('/api/v1/category', _categoryCtrl["default"]);
app.use('/api/v1/article', _articleCtrl["default"]);
io.on('connection', function (socket) {
  socket.emit('tes');
});
(0, _db.connectDb)().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.listen(process.env.PORT, '127.0.0.1', function () {
            return console.log("Server connet on port ".concat(process.env.PORT));
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));