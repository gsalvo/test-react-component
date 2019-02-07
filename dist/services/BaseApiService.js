import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

var BaseApiService =
/*#__PURE__*/
function () {
  function BaseApiService() {
    _classCallCheck(this, BaseApiService);
  }

  _createClass(BaseApiService, null, [{
    key: "processApiResponseSingle",
    value: function () {
      var _processApiResponseSingle = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(apiResponse) {
        var fullResponse;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if ([200, 201].includes(apiResponse.status)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", false);

              case 2:
                _context.next = 4;
                return apiResponse.json();

              case 4:
                fullResponse = _context.sent;
                return _context.abrupt("return", fullResponse.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function processApiResponseSingle(_x) {
        return _processApiResponseSingle.apply(this, arguments);
      }

      return processApiResponseSingle;
    }()
  }, {
    key: "processApiResponseList",
    value: function () {
      var _processApiResponseList = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(apiResponse) {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(apiResponse.status !== 200)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", {
                  data: [],
                  extra: {
                    recordsTotal: 0,
                    recordsFiltered: 0
                  }
                });

              case 2:
                _context2.next = 4;
                return apiResponse.json();

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function processApiResponseList(_x2) {
        return _processApiResponseList.apply(this, arguments);
      }

      return processApiResponseList;
    }()
  }, {
    key: "objToQueryString",
    value: function objToQueryString(obj) {
      var keyValuePairs = [];

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
      }

      return keyValuePairs.join('&');
    }
  }]);

  return BaseApiService;
}();

export default BaseApiService;