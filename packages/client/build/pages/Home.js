"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Home = function Home() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, "Home Page"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return console.log('Boo!');
    }
  }, "Click!"));
};

var _default = Home;
exports["default"] = _default;