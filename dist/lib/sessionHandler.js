"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _moment = _interopRequireDefault(require("moment"));

var _checkLastOnline = require("../lib/checkLastOnline");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SESSION = [];

var decode = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _jsonwebtoken["default"].decode(token, {
              complete: true
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function decode(_x) {
    return _ref.apply(this, arguments);
  };
}();

var idleTime = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", parseInt(process.env.SESSION_TIME) * 60 * 1000);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function idleTime() {
    return _ref2.apply(this, arguments);
  };
}();

var createSession = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token) {
    var dc, time, udata, cekSesi, datas;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return decode(token);

          case 2:
            dc = _context3.sent;
            _context3.next = 5;
            return idleTime();

          case 5:
            time = _context3.sent;
            // console.log({dc});
            udata = dc.payload.payload;
            _context3.next = 9;
            return checkSession(udata);

          case 9:
            cekSesi = _context3.sent;

            if (!(cekSesi == true)) {
              _context3.next = 18;
              break;
            }

            datas = {
              udata: udata,
              session: true,
              isOnline: true,
              lastOnline: (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss')
            };
            setTimeout(function () {
              deleteSession(udata);
            }, time);
            SESSION["".concat(udata.id)] = datas; // console.log({token, userId});

            console.log(SESSION, 'on addsession');
            return _context3.abrupt("return", token);

          case 18:
            throw new Error('Anda sedang login di device lain!');

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createSession(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteSession = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(udata) {
    var datas;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            datas = {
              udata: udata,
              session: false,
              isOnline: false,
              lastOnline: (0, _moment["default"])().format('YYYY-MM-DD HH:mm:ss')
            };
            SESSION["".concat(udata.id)] = datas;
            console.log(SESSION, 'sesi berakhir');

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteSession(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var checkSession = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(udata) {
    var sessionData;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            sessionData = SESSION["".concat(udata.id)];
            console.log({
              sessionData: sessionData
            });

            if (!sessionData) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", sessionData.session === true ? false : true);

          case 6:
            return _context5.abrupt("return", true);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function checkSession(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var getSession = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
    var data;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            // console.log({id});
            data = SESSION["".concat(id)];

            if (!(data != undefined)) {
              _context6.next = 12;
              break;
            }

            if (!(data.isOnline == true)) {
              _context6.next = 6;
              break;
            }

            _context6.t0 = "Online";
            _context6.next = 9;
            break;

          case 6:
            _context6.next = 8;
            return (0, _checkLastOnline.getLastOnline)(data.lastOnline);

          case 8:
            _context6.t0 = _context6.sent;

          case 9:
            return _context6.abrupt("return", _context6.t0);

          case 12:
            return _context6.abrupt("return", "Offline");

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getSession(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

module.exports = {
  createSession: createSession,
  getSession: getSession,
  deleteSession: deleteSession
};