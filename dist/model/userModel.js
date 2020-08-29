"use strict";

var _classModel = _interopRequireDefault(require("../classes/classModel"));

var _users = _interopRequireDefault(require("../schema/users"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _mailer = _interopRequireDefault(require("../lib/mailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var userModel = /*#__PURE__*/function (_Models) {
  _inherits(userModel, _Models);

  var _super = _createSuper(userModel);

  function userModel() {
    var _this;

    _classCallCheck(this, userModel);

    _this = _super.call(this, _users["default"]);
    _this.level = 10;
    return _this;
  }

  _createClass(userModel, [{
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var udata;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                udata = this.udata.payload;
                console.log({
                  udata: this.udata.payload
                }); // if(udata.role != this.role)throw Error('You do not have access!')

                _context.next = 4;
                return this.model.find({}, this.getProjection());

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "insert",
    value: function () {
      var _insert = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(obj) {
        var pass;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.udata.payload.level < this.level)) {
                  _context2.next = 2;
                  break;
                }

                throw Error('Access disable!');

              case 2:
                pass = this.generateCode(6);
                _context2.next = 5;
                return this.sendMail(obj, pass);

              case 5:
                _context2.next = 7;
                return this.model.create(this.doConvertParam(obj, pass));

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function insert(_x) {
        return _insert.apply(this, arguments);
      }

      return insert;
    }()
  }, {
    key: "sendMail",
    value: function () {
      var _sendMail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(body, pass) {
        var html, mail;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                html = this.html(body, pass);
                _context3.next = 3;
                return _mailer["default"].sendMail({
                  to: body.email,
                  subject: 'Email Login System Portal Berita X',
                  html: html
                });

              case 3:
                mail = _context3.sent;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sendMail(_x2, _x3) {
        return _sendMail.apply(this, arguments);
      }

      return sendMail;
    }()
  }, {
    key: "doConvertParam",
    value: function doConvertParam(body, pass) {
      body.createdBy = this.udata.payload.id, body.password = _bcryptjs["default"].hashSync(pass + body.email + process.env.SALT, 10);
      return body;
    }
  }, {
    key: "getProjection",
    value: function getProjection() {
      return 'name email level createdAt';
    }
  }, {
    key: "html",
    value: function html(body, pass) {
      var html = "<pre>Dear , <b>".concat(body.name, "</b>\n\nPlease using the User Identity and Password to Sign in \nPortal Berita X System,  details this below,\n\nEmail    : ").concat(body.email, "\nPassword : ").concat(pass, "\n\nBest Regards\nAdmin\n</pre>");
      return html;
    }
  }, {
    key: "generateCode",
    value: function generateCode(length) {
      var result = '';
      var characters = '0123456789';
      var charactersLength = characters.length;

      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    }
  }]);

  return userModel;
}(_classModel["default"]);

module.exports = userModel;