"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _native = _interopRequireDefault(require("styled-components/native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledText = _native.default.Text.withConfig({
  displayName: "Welcome__StyledText",
  componentId: "sc-13g6phe-0"
})(["background-color:gray;color:black;"]);

function Welcome() {
  return _react.default.createElement(StyledText, null, "Welcome");
}

var _default = Welcome;
exports.default = _default;
//# sourceMappingURL=Welcome.js.map