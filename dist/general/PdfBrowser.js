import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import config from '../config/config';

var PdfBrowser =
/*#__PURE__*/
function (_Component) {
  _inherits(PdfBrowser, _Component);

  function PdfBrowser() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PdfBrowser);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PdfBrowser)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.test =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(config.endpoints.transferenceApi.url);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _this;
  }

  _createClass(PdfBrowser, [{
    key: "render",
    value: function render() {
      var name = this.props.name || this.props.src.replace(/^.*[\\/]/, '');
      var document = '';

      if (this.props.src) {
        document = React.createElement("iframe", {
          src: this.props.src,
          title: name,
          className: "embed-responsive-item"
        });
      }

      return React.createElement("div", null, React.createElement("div", {
        id: "document-browser",
        className: "embed-responsive embed-responsive-1by1"
      }, document, React.createElement("button", {
        onClick: this.test
      }, "testo")));
    }
  }]);

  return PdfBrowser;
}(Component);

export { PdfBrowser as default };