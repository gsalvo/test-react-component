import _classCallCheck from "C:\\Users\\gusta\\Desktop\\Tests\\ReactJs\\react-components\\node_modules\\@babel\\runtime/helpers/esm/classCallCheck";
import _createClass from "C:\\Users\\gusta\\Desktop\\Tests\\ReactJs\\react-components\\node_modules\\@babel\\runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "C:\\Users\\gusta\\Desktop\\Tests\\ReactJs\\react-components\\node_modules\\@babel\\runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "C:\\Users\\gusta\\Desktop\\Tests\\ReactJs\\react-components\\node_modules\\@babel\\runtime/helpers/esm/getPrototypeOf";
import _inherits from "C:\\Users\\gusta\\Desktop\\Tests\\ReactJs\\react-components\\node_modules\\@babel\\runtime/helpers/esm/inherits";
import React, { Component } from 'react';

var PdfBrowser =
/*#__PURE__*/
function (_Component) {
  _inherits(PdfBrowser, _Component);

  function PdfBrowser() {
    _classCallCheck(this, PdfBrowser);

    return _possibleConstructorReturn(this, _getPrototypeOf(PdfBrowser).apply(this, arguments));
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
      }, document));
    }
  }]);

  return PdfBrowser;
}(Component);

export { PdfBrowser as default };