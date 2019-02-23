"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var react_2 = __importDefault(require("react"));
var Welcome_1 = __importDefault(require("./Welcome"));
react_1.storiesOf('Welcome', module).add('to React Native Web', function () { return react_2.default.createElement(Welcome_1.default, null); });
