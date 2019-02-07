import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import TransferenceApiService from '../../services/TransferenceApiService';
import DocumentSelector from './Tabs/DocumentSelector';

var TabList =
/*#__PURE__*/
function (_Component) {
  _inherits(TabList, _Component);

  function TabList(props) {
    var _this;

    _classCallCheck(this, TabList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabList).call(this, props));

    _this.getDocumetByTransferenceCode =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(code) {
        var result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return TransferenceApiService.getTransferenceDocuments(code);

              case 2:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.toggleTab = function (tab) {
      if (_this.state.activeTab !== tab) {
        _this.setState({
          activeTab: tab
        });
      }
    };

    _this.state = {
      activeTab: 'documentSelector',
      documentList: []
    };
    return _this;
  }

  _createClass(TabList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = this;
                _context2.next = 3;
                return this.getDocumetByTransferenceCode(this.props.transferenceCode);

              case 3:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  documentList: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", null, React.createElement(Nav, {
        tabs: true,
        className: "sidebar-tabs"
      }, React.createElement(NavItem, null, React.createElement(NavLink, {
        className: this.state.activeTab === 'documentSelector' ? 'active' : '',
        onClick: function onClick() {
          return _this2.toggleTab('documentSelector');
        }
      }, "Documentos"))), React.createElement(TabContent, {
        activeTab: this.state.activeTab
      }, React.createElement(TabPane, {
        tabId: "documentSelector",
        className: "transference-document-list-tab-wrapper"
      }, React.createElement(DocumentSelector, {
        documentList: this.state.documentList,
        onDocumentSelected: this.props.onDocumentSelected
      }))));
    }
  }]);

  return TabList;
}(Component);

export default TabList;