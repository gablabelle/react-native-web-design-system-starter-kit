"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _native = _interopRequireDefault(require("styled-components/native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledText = _native.default.Text.withConfig({
  displayName: "Button__StyledText",
  componentId: "jsb92n-0"
})(["color:red;"]);

function Button() {
  return _react.default.createElement("button", {
    type: "button"
  }, _react.default.createElement(StyledText, null, "Click me"));
}

var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map