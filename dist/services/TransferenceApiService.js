import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _get from "@babel/runtime/helpers/esm/get";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import { endpoints } from '../config/config';
import BaseApiService from "./BaseApiService";
var API_BASE_URL = endpoints.transferenceApi.url;
var VERSION = endpoints.transferenceApi.version;
var API_URL = "".concat(API_BASE_URL).concat(VERSION, "/");
var defaultFetchParams = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

var TransferenceApiService =
/*#__PURE__*/
function (_BaseApiService) {
  _inherits(TransferenceApiService, _BaseApiService);

  function TransferenceApiService() {
    _classCallCheck(this, TransferenceApiService);

    return _possibleConstructorReturn(this, _getPrototypeOf(TransferenceApiService).apply(this, arguments));
  }

  _createClass(TransferenceApiService, null, [{
    key: "getTransferenceDocuments",
    value: function () {
      var _getTransferenceDocuments = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(code) {
        var apiResponse;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(API_URL, "document/").concat(code), defaultFetchParams);

              case 2:
                apiResponse = _context.sent;
                _context.next = 5;
                return _get(_getPrototypeOf(TransferenceApiService), "processApiResponseSingle", this).call(this, apiResponse);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTransferenceDocuments(_x) {
        return _getTransferenceDocuments.apply(this, arguments);
      }

      return getTransferenceDocuments;
    }()
  }]);

  return TransferenceApiService;
}(BaseApiService);

export default TransferenceApiService;